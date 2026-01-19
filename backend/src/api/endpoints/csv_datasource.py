# src/api/routes/upload.py (or wherever your router is)

from fastapi import APIRouter, File, UploadFile, HTTPException, Depends
from datetime import datetime
import logging
from src.core.supabase_client import get_supabase_service_client
from src.api.dependencies import get_current_user

router = APIRouter()
logger = logging.getLogger("uvicorn")


@router.post("/upload")
async def upload_csv(
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user),
):
    logger.info(f"📂 CSV upload initiated - User ID: {current_user.get('id')}, Filename: {file.filename}")
    
    try:
        supabase = get_supabase_service_client()
        
        contents = await file.read()
        logger.info(f"✅ File read successfully - Size: {len(contents)} bytes")
        
        timestamp = datetime.now().isoformat()
        file_name = f"{timestamp}_{file.filename}"
        file_path = f"{current_user.get('id')}/{file_name}"
        logger.info(f"🗂 Generated file path: {file_path}")
        
        logger.info(f"⬆️ Uploading to Supabase storage bucket 'uploaded_csv_files'...")

        storage_response = supabase.storage.from_("uploaded_csv_files").upload(
            path=file_path,
            file=contents,
            file_options={"content-type": "text/csv", "upsert": "false"}
        )
        logger.info(f"📦 Storage upload response: {storage_response}")
        
        # Insert metadata into database
        logger.info(f"📝 Inserting file metadata into 'uploaded_csv_files' table...")
        db_response = supabase.table("uploaded_csv_files").insert({
            "user_id": current_user.get('id'),
            "file_name": file.filename,
            "file_url": file_path,
            "uploaded_at": timestamp,
        }).execute()
        
        record_id = db_response.data[0].get("id") if db_response.data else "N/A"
        logger.debug(f"✅ Database insert successful - Record ID: {record_id}")
        logger.info(f"🎉 Upload completed successfully for user {current_user.get('id')}")
        
        return {
            "success": True,
            "data": db_response.data[0]
        }
        
    except Exception as e:
        logger.error(f"❌ Upload failed for user {current_user.get('id')} - Error: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")
    
    finally:
        await file.close()
        logger.debug(f"🗑 File stream closed for {file.filename}")