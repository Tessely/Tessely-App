import {
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface Insight {
  type: 'error' | 'info' | 'warning';
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
    type: 'info',
    title: 'Trade Processing Delays',
    description:
      'Frequent rework and exceptions in trade processing cause delays across Equity and Fixed Income lifecycles',
    recommendation:
      'Introduce automated validation, enforce data completeness, and optimise approval routing',
  },
];

const iconMap = {
  error: { Icon: AlertCircle, color: 'red.500', bgColor: 'red.50' },
  info: { Icon: Info, color: 'blue.500', bgColor: 'blue.50' },
  warning: { Icon: AlertTriangle, color: 'orange.500', bgColor: 'orange.50' },
};

export function InsightsPanel() {
  return (
    <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
      <Card.Body p={6}>
        <Heading size="lg" mb={6} color="gray.900">
          Process Insights (Powered by AI)
        </Heading>

        <VStack gap={4} align="stretch">
          {insights.map((insight, index) => {
            const { Icon, color, bgColor } = iconMap[insight.type];

            return (
              <Box
                key={index}
                p={4}
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                bg="gray.50"
              >
                {/* Icon and Title */}
                <Flex align="flex-start" gap={3} mb={2}>
                  <Box
                    p={2}
                    bg={bgColor}
                    borderRadius="full"
                    flexShrink={0}
                  >
                    <Icon size={16} color={color} />
                  </Box>
                  <Text fontWeight="bold" color="gray.900" flex="1">
                    {insight.title}
                  </Text>
                </Flex>

                {/* Description */}
                <Text fontSize="sm" color="gray.700" mb={3} pl={10}>
                  {insight.description}
                </Text>

                {/* Recommendation Link */}
                <Flex pl={10}>
                  <Link
                    color="blue.600"
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Recommendation: {insight.recommendation}
                  </Link>
                </Flex>
              </Box>
            );
          })}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
