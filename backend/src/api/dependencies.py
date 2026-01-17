# @track_context("dependencies.md")

import logging
from typing import Any

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt

from src.core.config import settings
from src.core.messages import ErrorMessages, LogMessages
from src.core.supabase_client import get_supabase_client
from src.services.auth_service import AuthService

logger = logging.getLogger(__name__)
security = HTTPBearer()


def validate_jwt_token(token: str) -> str:
    """
    Extract and validate JWT token, return user_id

    Args:
        token: JWT token string

    Returns:
        user_id extracted from token

    Raises:
        HTTPException: If token is invalid
    """
    try:
        # Decode and verify token
        payload: dict[str, Any] = jwt.decode(
            token,
            settings.SUPABASE_JWT_SECRET,
            algorithms=["HS256"],
            options={
                "verify_signature": True,
                "verify_exp": True,
                "verify_aud": True,
                "require_exp": True,
            },
            audience="authenticated",
        )

        # Extract user_id from sub claim
        user_id: Any = payload.get("sub")
        if not user_id:
            logger.warning(LogMessages.JWT_MISSING_SUB)
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=ErrorMessages.INVALID_TOKEN_MISSING_USER,
            )

        return str(user_id)

    except JWTError as err:
        logger.warning(LogMessages.JWT_VALIDATION_FAILED.format(error=err))
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=ErrorMessages.INVALID_TOKEN,
        ) from err

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> dict[str, Any]:
    """
    Get current authenticated user from JWT token

    Args:
        credentials: HTTP Bearer token credentials

    Returns:
        Dictionary containing user information

    Raises:
        HTTPException: If token is invalid or user not found
    """
    token = credentials.credentials

    try:
        # Get Supabase client
        supabase = get_supabase_client()

        # Verify token with Supabase
        result = supabase.auth.get_user(token)

        if not result or not result.user:
            logger.warning("Token validation failed: No user found")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired token",
            )

        # Return user info as dict
        user_dict = {
            "id": result.user.id,
            "email": result.user.email,
            "user_metadata": result.user.user_metadata or {},
        }

        logger.debug(f"User authenticated: {user_dict['id']}")
        return user_dict

    except HTTPException:
        # Re-raise HTTP exceptions
        raise
    except Exception as e:
        logger.error(f"Authentication error: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
        ) from e

def get_auth_service() -> AuthService:
    return AuthService()
