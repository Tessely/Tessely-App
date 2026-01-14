import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import AlertCircle from '../../../../assets/icons/FiAlertCircle.svg?react';
import AlertTriangle from '../../../../assets/icons/BiError.svg?react';
import QuestionCircle from '../../../../assets/icons/AiFillQuestionCircle.svg?react';

interface Insight {
  type: 'error' | 'warning';
  title: string;
  description: string;
  recommendation: string;
}

const insights: Insight[] = [
  {
    type: 'error',
    title: 'Approval and Validation Delays',
    description:
      'Approval and validation delays in Equity and Fixed Income trades slow order-to-execution and increase settlement failures',
    recommendation:
      'Automate trade validation, improve static data quality, and streamline approval workflows',
  },
  {
    type: 'warning',
    title: 'Trade Processing Delays',
    description:
      'Frequent rework and exceptions in trade processing cause delays across Equity and Fixed Income lifecycles',
    recommendation:
      'Introduce automated validation, enforce data completeness, and optimise approval routing',
  },
];

export function InsightsPanel() {
  return (
    <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
      <Card.Body p={6}>
        <Heading size="md" mb={6} color="gray.900" fontWeight="bold">
          Process Insights (Powered by AI)
        </Heading>

        <VStack gap={6} align="stretch">
          {insights.map((insight, index) => (
            <Box key={index}>
              {/* Icon and Title */}
              <Flex align="center" gap={2} mb={2}>
                {insight.type === 'error' ? (
                  <Box as={AlertCircle} w="20px" h="20px" color="red.500" flexShrink={0} />
                ) : (
                  <Box as={AlertTriangle} w="20px" h="20px" color="orange.400" flexShrink={0} />
                )}
                <Text
                  fontWeight="semibold"
                  color={insight.type === 'error' ? 'red.600' : 'orange.500'}
                >
                  {insight.title}
                </Text>
              </Flex>

              {/* Description */}
              <Text fontSize="sm" color="gray.800" mb={3} fontWeight="medium">
                {insight.description}
              </Text>

              {/* Recommendation Box */}
              <Box bg="blue.50" p={3} borderRadius="md">
                <Flex align="flex-start" gap={2}>
                  <Box as={QuestionCircle} w="18px" h="18px" color="blue.500" flexShrink={0} mt="2px" />
                  <Text fontSize="sm" color="blue.600">
                    <Text as="span" fontWeight="medium">Recommendation:</Text>{' '}
                    {insight.recommendation}
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
