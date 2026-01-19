import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RightLabelEdge } from './ProcessMapComponents/RightLabelEdge'
import { JSONNodeData, JSONNode } from './ProcessMapComponents/JSONNode'

type RawNode = {
  node_id: string;
  node_type: string;
  node_category: string;
  metrics: {
    case_count_at_node: number;
    avg_time_to_next_mins: number;
    success_rate: number;
  };
};

type RawEdge = {
  edge_id: string;
  from: string;
  to: string,
  frequency: number,
  probability: number, // as a percentage of all outedges from the starting node?
  average_transition_time_mins: number,
  join_columns: Array<{
    from_column: string;
    to_column: string;
  }>;
};

const nodeTypes: NodeTypes = {
  JSONNode: JSONNode,
};

const edgeTypes = {
  rightLabel: RightLabelEdge,
};

// Nodes Formation
const rawNodes: RawNode[] = [
  {
    "node_id": "Order Placed",
    "node_type": "start",
    "node_category": "transaction | smth else?", // for custom node shape per category
    "metrics": {
      "case_count_at_node": 100,
      "avg_time_to_next_mins": 20,
      "success_rate": 0.888
    }
  },
  {
    "node_id": "Compliance Check",
    "node_type": "middle",
    "node_category": "financial | smth else?",
    "metrics": {
      "case_count_at_node": 98,
      "avg_time_to_next_mins": 11,
      "success_rate": 0.928
    }
  },
  {
    "node_id": "Trade Executed",
    "node_type": "middle",
    "node_category": "financial | smth else?",
    "metrics": {
      "case_count_at_node": 99,
      "avg_time_to_next_mins": 11,
      "success_rate": 0.928
    }
  },
  {
    "node_id": "Trade Confirmed",
    "node_type": "middle",
    "node_category": "financial | smth else?",
    "metrics": {
      "case_count_at_node": 99,
      "avg_time_to_next_mins": 11,
      "success_rate": 0.928
    }
  },
  {
    "node_id": "Settlement",
    "node_type": "middle",
    "node_category": "financial | smth else?",
    "metrics": {
      "case_count_at_node": 99,
      "avg_time_to_next_mins": 11,
      "success_rate": 0.928
    }
  },
  {
    "node_id": "Post-Trade Reporting",
    "node_type": "end",
    "node_category": "financial | smth else?",
    "metrics": {
      "case_count_at_node": 99,
      "avg_time_to_next_mins": 11,
      "success_rate": 0.970
    }
  }
]

const getNameColor = (nodeType: string): string => {
  switch (nodeType) {
    case 'start': return 'red.600';
    case 'middle': return 'orange.500';
    case 'end': return 'green.600';
    default: return 'gray.900';
  }
};

// Edges Formation
const rawEdges: RawEdge[] = [
  {
    edge_id: "Order Placed->Compliance Check",
    from: "Order Placed",
    to: "Compliance Check",
    frequency: 100,
    probability: 0.95,
    average_transition_time_mins: 5.0,
    join_columns: [
      { from_column: "OrderPlaced.ORDER_ID", to_column: "ComplianceCheck.ORDER_ID" }
    ]
  },
  {
    edge_id: "Compliance Check->Trade Executed",
    from: "Compliance Check",
    to: "Trade Executed",
    frequency: 99,
    probability: 0.93,
    average_transition_time_mins: 11.0,
    join_columns: [
      { from_column: "ComplianceCheck.TRADE_ID", to_column: "TradeExecuted.TRADE_ID" }
    ]
  },
  {
    edge_id: "Trade Executed->Trade Confirmed",
    from: "Trade Executed",
    to: "Trade Confirmed",
    frequency: 99,
    probability: 0.92,
    average_transition_time_mins: 8.0,
    join_columns: [
      { from_column: "TradeExecuted.EXECUTION_ID", to_column: "TradeConfirmed.EXECUTION_ID" }
    ]
  },
  {
    edge_id: "Trade Confirmed->Settlement",
    from: "Trade Confirmed",
    to: "Settlement",
    frequency: 99,
    probability: 0.90,
    average_transition_time_mins: 30.0,
    join_columns: [
      { from_column: "TradeConfirmed.TRADE_ID", to_column: "Settlement.TRADE_ID" }
    ]
  },
  {
    edge_id: "Settlement->Post-Trade Reporting",
    from: "Settlement",
    to: "Post-Trade Reporting",
    frequency: 99,
    probability: 0.98,
    average_transition_time_mins: 12.0,
    join_columns: [
      { from_column: "Settlement.SETTLEMENT_ID", to_column: "PostTradeReporting.SETTLEMENT_ID" }
    ]
  }
];

export function ProcessOverview() {
  const onNodesChange = useCallback(() => { }, []);
  const onEdgesChange = useCallback(() => { }, []);

  const transformedNodes: Node<JSONNodeData>[] = useMemo(() => {
    const nodeCount = rawNodes.length;
    const nodeHeight = 120; // Approximate height of each node
    const nodeWidth = 280; // Approximate width of each node
    const verticalSpacing = 200; // Space between nodes vertically
    const horizontalCenter = 400; // Center X position

    return rawNodes.map((node, index) => ({
      id: node.node_id,
      type: 'JSONNode',
      position: {
        x: horizontalCenter - (nodeWidth / 2),
        y: index * verticalSpacing + 50
      },
      data: {
        name: node.node_id,
        averageDuration: `${node.metrics.avg_time_to_next_mins} mins`,
        successRate: `${(node.metrics.success_rate * 100).toFixed(1)}%`,
        itemCount: node.metrics.case_count_at_node,
        bgColor: 'white',
        nameColor: getNameColor(node.node_type),
      }
    }));
  }, []);

  const transformedEdges: Edge[] = useMemo(() => {
    return rawEdges.map((e) => ({
      id: e.edge_id,
      source: e.from,
      target: e.to,
      type: 'rightLabel',
      sourceHandle: 'out',
      targetHandle: 'in',
      style: { stroke: '#9CA3AF', strokeWidth: 2 },
      data: {
        frequency: e.frequency,
        probability: e.probability,
        average_transition_time_mins: e.average_transition_time_mins,
      },
    }));
  }, []);

  return (
    <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
      <Card.Body p={6}>
        <Heading size="md" mb={4} color="gray.900">
          Process Overview
        </Heading>

        {/* Flow Chart */}
        <Box
          h="800px"
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          bg="gray.50"
        >
          <ReactFlow
            nodes={transformedNodes}
            edges={transformedEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            fitViewOptions={{
              padding: 0.0,
              minZoom: 0.5,
              maxZoom: 1.5,
            }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnDrag={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
            preventScrolling={true}
            minZoom={0.1}
            maxZoom={2}
            attributionPosition="bottom-right"
            proOptions={{ hideAttribution: true }}
          >
            <Background color="#cfafaf" gap={16} />
          </ReactFlow>
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
