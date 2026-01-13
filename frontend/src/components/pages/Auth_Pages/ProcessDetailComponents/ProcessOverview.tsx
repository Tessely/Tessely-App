import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

interface ProcessStage {
  name: string;
  duration: string;
  successRate: string;
  itemCount: number;
  bgColor: string;
  minDuration: string;
  maxDuration: string;
  minItems: number;
  maxItems: number;
}

const processStages: ProcessStage[] = [
  {
    name: 'Trade Capture',
    duration: '2 mins',
    successRate: '99.5%',
    itemCount: 1250,
    bgColor: 'white',
    minDuration: '1 min',
    maxDuration: '5 mins',
    minItems: 1000,
    maxItems: 1500,
  },
  {
    name: 'Trade Validation',
    duration: '15 mins',
    successRate: '98.2%',
    itemCount: 1240,
    bgColor: 'yellow.50',
    minDuration: '10 mins',
    maxDuration: '30 mins',
    minItems: 1200,
    maxItems: 1250,
  },
  {
    name: 'Execution',
    duration: '45 mins',
    successRate: '96.8%',
    itemCount: 1220,
    bgColor: 'orange.50',
    minDuration: '30 mins',
    maxDuration: '90 mins',
    minItems: 1150,
    maxItems: 1240,
  },
  {
    name: 'Settlement',
    duration: '2 hours',
    successRate: '99.1%',
    itemCount: 1210,
    bgColor: 'white',
    minDuration: '1 hour',
    maxDuration: '3 hours',
    minItems: 1180,
    maxItems: 1220,
  },
];

export function ProcessOverview() {
  return (
    <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
      <Card.Body p={6}>
        <Heading size="lg" mb={6} color="gray.900">
          Process Overview
        </Heading>

        {/* Vertical Flowchart */}
        <VStack gap={0} align="stretch" position="relative">
          {processStages.map((stage, index) => (
            <Box key={stage.name} position="relative">
              {/* Process Stage Box */}
              <Flex gap={4} align="center">
                {/* Left side - Min/Max metrics */}
                <VStack gap={0} align="flex-end" fontSize="xs" color="gray.600" minW="80px">
                  <Text>{stage.maxDuration}</Text>
                  <Text color="gray.400">•••</Text>
                  <Text>{stage.minDuration}</Text>
                </VStack>

                {/* Stage Card */}
                <Box
                  flex="1"
                  bg={stage.bgColor}
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="md"
                  p={4}
                  shadow="sm"
                >
                  <Text fontWeight="bold" fontSize="md" mb={2} color="gray.900">
                    {stage.name}
                  </Text>
                  <Flex justify="space-between" fontSize="sm">
                    <Text color="gray.600">
                      Duration: <Text as="span" fontWeight="medium" color="gray.900">{stage.duration}</Text>
                    </Text>
                    <Text color="gray.600">
                      Success: <Text as="span" fontWeight="medium" color="green.600">{stage.successRate}</Text>
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.600" mt={1}>
                    Items: <Text as="span" fontWeight="medium" color="gray.900">{stage.itemCount.toLocaleString()}</Text>
                  </Text>
                </Box>

                {/* Right side - Min/Max item counts */}
                <VStack gap={0} align="flex-start" fontSize="xs" color="gray.600" minW="80px">
                  <Text>{stage.maxItems.toLocaleString()}</Text>
                  <Text color="gray.400">•••</Text>
                  <Text>{stage.minItems.toLocaleString()}</Text>
                </VStack>
              </Flex>

              {/* Connecting Line */}
              {index < processStages.length - 1 && (
                <Box
                  position="absolute"
                  left="50%"
                  top="100%"
                  w="2px"
                  h="24px"
                  bg="gray.300"
                  transform="translateX(-50%)"
                />
              )}
            </Box>
          ))}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
