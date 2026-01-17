"""
Process Mining Data Models

This module defines all Pydantic models for process mining data structures.
"""

from datetime import datetime
from typing import List

from pydantic import BaseModel, Field


class TimeRangeModel(BaseModel):
    """Time range for analysis"""

    start: str = Field(..., description="Start date (YYYY-MM-DD)")
    end: str = Field(..., description="End date (YYYY-MM-DD)")


class MetadataModel(BaseModel):
    """Analysis metadata"""

    industry: str = Field(..., description="Industry type")
    client_id: str = Field(..., description="Client identifier")
    source_system: str = Field(..., description="Source system name")
    analysis_timestamp: str = Field(..., description="Analysis timestamp")
    time_range: TimeRangeModel


class OverallMetricsModel(BaseModel):
    """Overall process metrics"""

    total_cases_processed: int = Field(..., ge=0, description="Total cases processed")
    overall_process_efficiency: float = Field(
        ..., ge=0, le=1, description="Overall efficiency (0-1)"
    )
    average_cycle_time_days: float = Field(..., ge=0, description="Average cycle time in days")
    straight_through_processing_rate: float = Field(
        ..., ge=0, le=1, description="STP rate (0-1)"
    )


class CaseRootModel(BaseModel):
    """Case root information"""

    root_table: str = Field(..., description="Root table name")
    root_primary_key: str = Field(..., description="Primary key column")
    case_count: int = Field(..., ge=0, description="Number of cases")
    percentage: float = Field(..., ge=0, le=1, description="Percentage of total (0-1)")


class NodeMetricsModel(BaseModel):
    """Node-level metrics"""

    case_count_at_node: int = Field(..., ge=0, description="Cases at this node")
    avg_time_to_next_mins: float = Field(..., ge=0, description="Average time to next node")
    success_rate: float = Field(..., ge=0, le=1, description="Success rate (0-1)")


class NodeModel(BaseModel):
    """Process graph node"""

    node_id: str = Field(..., description="Unique node identifier")
    node_type: str = Field(..., description="Node type (e.g., start, middle, end)")
    node_category: str = Field(..., description="Node category (e.g., transaction, financial)")
    metrics: NodeMetricsModel


class JoinColumnModel(BaseModel):
    """Join column mapping"""

    from_column: str = Field(..., description="Source column")
    to_column: str = Field(..., description="Target column")


class EdgeModel(BaseModel):
    """Process graph edge"""

    edge_id: str = Field(..., description="Unique edge identifier")
    from_: str = Field(..., alias="from", description="Source node ID")
    to: str = Field(..., description="Target node ID")
    frequency: int = Field(..., ge=0, description="Number of transitions")
    probability: float = Field(..., ge=0, le=1, description="Transition probability (0-1)")
    average_transition_time_mins: float = Field(
        ..., ge=0, description="Average transition time in minutes"
    )
    join_columns: List[JoinColumnModel] = Field(..., description="Join column mappings")

    class Config:
        populate_by_name = True


class ProcessGraphModel(BaseModel):
    """Process graph structure"""

    nodes: List[NodeModel] = Field(..., description="List of nodes in the graph")
    edges: List[EdgeModel] = Field(..., description="List of edges in the graph")


class CaseRootInfoModel(BaseModel):
    """Case root reference"""

    root_table: str = Field(..., description="Root table name")
    root_primary_key: str = Field(..., description="Primary key column")


class ProcessModel(BaseModel):
    """Individual process information"""

    process_id: str = Field(..., description="Unique process identifier")
    display_name: str = Field(..., description="Human-readable process name")
    case_root: CaseRootInfoModel
    case_count: int = Field(..., ge=0, description="Number of cases in this process")
    case_percentage: float = Field(..., ge=0, le=1, description="Percentage of total (0-1)")
    average_cycle_time_days: float = Field(..., ge=0, description="Average cycle time in days")
    process_efficiency: float = Field(..., ge=0, le=1, description="Process efficiency (0-1)")
    graph: ProcessGraphModel


class ProcessMiningDataResponse(BaseModel):
    """Complete process mining data response"""

    schema_version: str = Field(..., description="Schema version")
    metadata: MetadataModel
    overall_metrics: OverallMetricsModel
    case_roots: List[CaseRootModel]
    processes: List[ProcessModel]


class CaseRootsResponse(BaseModel):
    """Case roots summary response"""

    case_roots: List[CaseRootModel]
    total_cases: int = Field(..., ge=0, description="Total number of cases")


class ProcessDetailResponse(BaseModel):
    """Detailed process response"""

    process_id: str = Field(..., description="Unique process identifier")
    display_name: str = Field(..., description="Human-readable process name")
    case_root: CaseRootInfoModel
    case_count: int = Field(..., ge=0, description="Number of cases in this process")
    case_percentage: float = Field(..., ge=0, le=1, description="Percentage of total (0-1)")
    average_cycle_time_days: float = Field(..., ge=0, description="Average cycle time in days")
    process_efficiency: float = Field(..., ge=0, le=1, description="Process efficiency (0-1)")
    graph: ProcessGraphModel
