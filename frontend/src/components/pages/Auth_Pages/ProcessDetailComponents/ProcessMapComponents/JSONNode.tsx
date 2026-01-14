import {
  Handle,
  Position,
} from '@xyflow/react';

import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';

export interface JSONNodeData extends Record<string, unknown> {
  name: string;
  averageDuration: string;
  successRate: string;
  itemCount: number;
  bgColor: string;
  nameColor: string;
}

export function JSONNode({ data }: { data: JSONNodeData }) {
  return (
    <Flex gap={3} align="center" justify="center">
      {/* Stage Card */}
      <Box
        bg={data.bgColor}
        borderColor="black"
        borderRadius="15px"
        p={3}
        borderWidth="1px"
        minW="200px"
        position="relative"
        textAlign="center"
      >
        {/* target (incoming from above) */}
        <Handle
          type="target"
          position={Position.Top}
          id="in"
          style={{ opacity: 0 }}
        />
        {/* source (outgoing to below) */}
        <Handle
          type="source"
          position={Position.Bottom}
          id="out"
          style={{ opacity: 0 }}
        />
        <Text fontWeight="bold" fontSize="sm" mb={2} color={data.nameColor}>
          {data.name}
        </Text>
        <Text fontSize="xs" color="gray.600" mt={0.5}>
          {data.averageDuration}
        </Text>
        <Text fontSize="xs" color="gray.600" mt={0.5}>
          Success: <Text as="span" fontWeight="medium" color="green.600">{data.successRate}</Text>
        </Text>
        <Text fontSize="xs" color="gray.600" mt={0.5}>
          Items: <Text as="span" fontWeight="medium" color="gray.900">{data.itemCount.toLocaleString()}</Text>
        </Text>
      </Box>
    </Flex>
  );
}