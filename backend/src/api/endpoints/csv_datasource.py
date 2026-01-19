# src/api/routes/upload.py (or wherever your router is)

from fastapi import Header,APIRouter, File, UploadFile, HTTPException, Depends
from datetime import datetime
import logging
from src.core.supabase_client import get_supabase_service_client
from src.core.supabase_client import get_supabase_client_for_user
from src.core.supabase_client import get_supabase_client
from src.api.dependencies import get_current_user

router = APIRouter()
logger = logging.getLogger("uvicorn")

@router.get("/files")
async def get_user_csv_files(
    current_user: dict = Depends(get_current_user),
):
    """
    Retrieve all CSV files uploaded by the current user
    """
    try:
        supabase = get_supabase_client()
        response = supabase.table("uploaded_csv_files")\
            .select("*")\
            .eq("user_id", current_user.get('id'))\
            .order("uploaded_at", desc=True)\
            .execute()
        logger.info(f"Current user ID: {current_user.get('id')}")
        logger.info(f"Query result: {response.data}")
        return {
            "success": True,
            "data": response.data,
            "count": len(response.data)
        }
        
    except Exception as e:
        logger.error(f"Failed to fetch files for user {current_user.get('id')} - Error: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to retrieve files: {str(e)}")

@router.delete("/files/{file_id}")
async def delete_csv_file(
    file_id: int,
    current_user: dict = Depends(get_current_user),
    authorization: str = Header(...),
):
    """
    Delete a specific CSV file from both Storage and Database
    """
    try:
        token = authorization.replace("Bearer ", "", 1) if authorization.startswith("Bearer ") else authorization
        supabase = get_supabase_client()
        supabase.postgrest.auth(token)
        supabase.storage._client.headers["Authorization"] = f"Bearer {token}"
        
        user_id = current_user.get('id')

        file_record = supabase.table("uploaded_csv_files")\
            .select("file_url")\
            .eq("id", file_id)\
            .eq("user_id", user_id)\
            .single()\
            .execute()

        if not file_record.data:
            raise HTTPException(status_code=404, detail="File not found or unauthorized")

        file_path = file_record.data['file_url']

        storage_response = supabase.storage.from_("uploaded_csv_files").remove([file_path])
        
        db_response = supabase.table("uploaded_csv_files")\
            .delete()\
            .eq("id", file_id)\
            .eq("user_id", user_id)\
            .execute()

        logger.info(f"User {user_id} deleted file {file_id} successfully")

        return {
            "success": True,
            "message": "File deleted successfully",
            "deleted_id": file_id
        }

    except HTTPException as he:
        raise he
    except Exception as e:
        logger.error(f"Delete failed for file {file_id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Delete failed: {str(e)}")

@router.post("/upload")
async def upload_csv(
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user),
    authorization: str = Header(...)
):    
    try:

        token = authorization.replace("Bearer ", "", 1) if authorization.startswith("Bearer ") else authorization
        supabase = get_supabase_client()
        supabase.postgrest.auth(token)
        supabase.storage._client.headers["Authorization"] = f"Bearer {token}"
        
        contents = await file.read()        
        timestamp = datetime.now().isoformat()
        file_name = f"{timestamp}_{file.filename}"
        file_path = f"{current_user.get('id')}/{file_name}"

        storage_response = supabase.storage.from_("uploaded_csv_files").upload(
            path=file_path,
            file=contents,
            file_options={"content-type": "text/csv", "upsert": "false"}
        )

        db_response = supabase.table("uploaded_csv_files").insert({
            "user_id": current_user.get('id'),
            "file_name": file.filename,
            "file_url": file_path,
            "uploaded_at": timestamp,
        }).execute()
          
        return {
            "success": True,
            "data": db_response.data[0]
        }
        
    except Exception as e:
        logger.error(f"Upload failed for user {current_user.get('id')} - Error: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")
    
    finally:
        await file.close()
