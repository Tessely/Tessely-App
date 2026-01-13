import {
  Box,
  Card,
  Flex,
  Grid,
  Progress,
  Text,
} from '@chakra-ui/react';
import { Info, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  trend: 'up' | 'down';
  trendValue: string;
  hasProgressBar?: boolean;
  progressValue?: number;
  progressColor?: string;
}

const metrics: MetricCard[] = [
  {
    title: 'Average Trade Cycle Time',
    value: '1 hour',
    trend: 'up',
    trendValue: '+17.6% faster',
    hasProgressBar: false,
  },
  {
    title: 'STP Rate',
    value: '96.0%',
    trend: 'up',
    trendValue: '+3.0%',
    hasProgressBar: true,
    progressValue: 96,
    progressColor: 'green',
  },
  {
    title: 'Manual Intervention Rate',
    value: '1.3',
    trend: 'down',
    trendValue: '-0.1',
    hasProgressBar: false,
  },
  {
    title: 'Failed Trade Rate',
    value: '4.0%',
    trend: 'up',
    trendValue: '+1.8%',
    hasProgressBar: true,
    progressValue: 4,
    progressColor: 'red',
  },
  {
    title: 'Reconciliation Break Rate',
    value: '2.0%',
    trend: 'up',
    trendValue: '+2.0%',
    hasProgressBar: true,
    progressValue: 2,
    progressColor: 'red',
  },
  {
    title: 'Rework Loops per Trade',
    value: '1.3',
    trend: 'up',
    trendValue: '+0.2',
    hasProgressBar: false,
  },
];

export function MetricsGrid() {
  return (
    <Grid
      templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={4}
    >
      {metrics.map((metric) => (
        <Card.Root
          key={metric.title}
          bg="white"
          border="1px"
          borderColor="gray.200"
          shadow="sm"
        >
          <Card.Body p={4}>
            {/* Title with Info Icon */}
            <Flex align="center" gap={1} mb={3}>
              <Text fontSize="sm" color="gray.600" flex="1">
                {metric.title}
              </Text>
              <Info size={14} color="gray" />
            </Flex>

            {/* Value */}
            <Text fontSize="2xl" fontWeight="bold" color="gray.900" mb={2}>
              {metric.value}
            </Text>

            {/* Trend Indicator */}
            <Flex align="center" gap={1} mb={metric.hasProgressBar ? 3 : 0}>
              {metric.trend === 'up' ? (
                <TrendingUp size={16} color={metric.trendValue.includes('-') ? 'green' : 'red'} />
              ) : (
                <TrendingDown size={16} color="green" />
              )}
              <Text
                fontSize="sm"
                color={metric.trendValue.includes('-') || metric.trend === 'down' ? 'green.600' : 'red.600'}
              >
                {metric.trendValue} QoQ
              </Text>
            </Flex>

            {/* Progress Bar (if applicable) */}
            {metric.hasProgressBar && (
              <Box w="100%">
                <Progress.Root
                  value={metric.progressValue}
                  size="sm"
                  colorPalette={metric.progressColor}
                >
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
              </Box>
            )}
          </Card.Body>
        </Card.Root>
      ))}
    </Grid>
  );
}
