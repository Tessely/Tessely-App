"""
Process Mining API Endpoints

This module provides REST API endpoints for process mining data.
"""

import logging
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status

from src.api.dependencies import get_current_user
from src.models.process_mining import (
    CaseRootsResponse,
    OverallMetricsModel,
    ProcessDetailResponse,
    ProcessMiningDataResponse,
)
from src.services.process_mining_service import ProcessMiningService

router = APIRouter()
logger = logging.getLogger(__name__)


def get_process_mining_service() -> ProcessMiningService:
    """
    Dependency for process mining service

    Returns:
        ProcessMiningService instance
    """
    return ProcessMiningService()


@router.get("/data", response_model=ProcessMiningDataResponse)
async def get_process_mining_data(
    time_period: Optional[str] = None,
    industry: Optional[str] = None,
    service: ProcessMiningService = Depends(get_process_mining_service),
    current_user: dict = Depends(get_current_user),
) -> ProcessMiningDataResponse:
    """
    Get complete process mining data for dashboard

    Args:
        time_period: Optional time period filter (e.g., Q4-2025)
        industry: Optional industry filter
        service: Injected process mining service
        current_user: Current authenticated user

    Returns:
        Complete process mining data

    Raises:
        HTTPException: If data retrieval fails
    """
    try:
        logger.info(
            f"User {current_user.get('id')} fetching process mining data: "
            f"time_period={time_period}, industry={industry}"
        )

        data = await service.get_process_data(time_period=time_period, industry=industry)

        logger.debug(f"Successfully retrieved process mining data for user {current_user.get('id')}")

        return ProcessMiningDataResponse(**data)

    except ValueError as e:
        logger.warning(f"Invalid parameters for user {current_user.get('id')}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )
    except Exception as e:
        logger.error(
            f"Failed to fetch process mining data for user {current_user.get('id')}: {str(e)}",
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve process mining data",
        )


@router.get("/processes/{process_id}", response_model=ProcessDetailResponse)
async def get_process_details(
    process_id: str,
    service: ProcessMiningService = Depends(get_process_mining_service),
    current_user: dict = Depends(get_current_user),
) -> ProcessDetailResponse:
    """
    Get detailed information about a specific process

    Args:
        process_id: Process identifier
        service: Injected process mining service
        current_user: Current authenticated user

    Returns:
        Detailed process information

    Raises:
        HTTPException: If process not found or retrieval fails
    """
    try:
        logger.info(f"User {current_user.get('id')} fetching process: {process_id}")

        process = await service.get_process_by_id(process_id)

        if not process:
            logger.warning(f"Process not found for user {current_user.get('id')}: {process_id}")
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Process '{process_id}' not found",
            )

        logger.debug(f"Successfully retrieved process {process_id} for user {current_user.get('id')}")

        return ProcessDetailResponse(**process)

    except HTTPException:
        # Re-raise HTTP exceptions
        raise
    except Exception as e:
        logger.error(
            f"Failed to fetch process {process_id} for user {current_user.get('id')}: {str(e)}",
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve process details",
        )


@router.get("/case-roots", response_model=CaseRootsResponse)
async def get_case_roots(
    time_period: Optional[str] = None,
    service: ProcessMiningService = Depends(get_process_mining_service),
    current_user: dict = Depends(get_current_user),
) -> CaseRootsResponse:
    """
    Get case roots summary for pie chart visualization

    Args:
        time_period: Optional time period filter
        service: Injected process mining service
        current_user: Current authenticated user

    Returns:
        Case roots summary with total cases count

    Raises:
        HTTPException: If data retrieval fails
    """
    try:
        logger.info(
            f"User {current_user.get('id')} fetching case roots: time_period={time_period}"
        )

        data = await service.get_case_roots(time_period=time_period)

        logger.debug(
            f"Successfully retrieved {len(data['case_roots'])} case roots "
            f"for user {current_user.get('id')}"
        )

        return CaseRootsResponse(**data)

    except Exception as e:
        logger.error(
            f"Failed to fetch case roots for user {current_user.get('id')}: {str(e)}",
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve case roots data",
        )


@router.get("/metrics", response_model=OverallMetricsModel)
async def get_overall_metrics(
    service: ProcessMiningService = Depends(get_process_mining_service),
    current_user: dict = Depends(get_current_user),
) -> OverallMetricsModel:
    """
    Get overall process metrics for KPI cards

    Args:
        service: Injected process mining service
        current_user: Current authenticated user

    Returns:
        Overall metrics data

    Raises:
        HTTPException: If data retrieval fails
    """
    try:
        logger.info(f"User {current_user.get('id')} fetching overall metrics")

        metrics = await service.get_overall_metrics()

        logger.debug(f"Successfully retrieved overall metrics for user {current_user.get('id')}")

        return OverallMetricsModel(**metrics)

    except Exception as e:
        logger.error(
            f"Failed to fetch metrics for user {current_user.get('id')}: {str(e)}",
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve overall metrics",
        )
