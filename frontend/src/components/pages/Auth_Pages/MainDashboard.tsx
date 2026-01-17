import {
  Box,
  Breadcrumb,
  Card,
  Circle,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  NativeSelectField,
  NativeSelectRoot,
  Progress,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  ChevronRight,
  Info,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../api/auth';
import { fetchCaseRoots } from '../../../api/processMining';
import { CaseRootsResponse } from '../../../types';

// KPI Card Data
const kpiCards = [
  {
    title: 'Average Trade Cycle Time',
    value: '2.3',
    trend: 'down',
    trendValue: '-0.1 QoQ',
    hasProgressBar: true,
    progressColor: 'red',
    isPositive: false,
  },
  {
    title: 'Average System Handoff Count',
    value: '1.3',
    trend: 'up',
    trendValue: '+0.2 QoQ',
    hasProgressBar: true,
    isPositive: true,
    progressColor: 'green',
  },
  {
    title: 'Average STP Rate',
    value: '88.0%',
    trend: 'up',
    trendValue: '+3% QoQ',
    isPositive: true,
    hasProgressBar: true,
    progressValue: 88,
    progressColor: 'green',
  },
  {
    title: 'On-Time Settlement Rate',
    value: '97.2%',
    trend: 'down',
    trendValue: '-0.6% QoQ',
    hasProgressBar: true,
    isPositive: false,
    progressColor: 'red',
  },
  {
    title: 'Failed Trade Rate',
    value: '4.2%',
    trend: 'up',
    trendValue: '+3% QoQ',
    isPositive: false,
    hasProgressBar: true,
    progressValue: 4.2,
    progressColor: 'red',
  },
];

// Pie chart colors
const PIE_CHART_COLORS = ['#1e3a5f', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

// Performance metrics data
const performanceMetrics = [
  { name: 'Equity Trade Lifecycle (Public Markets)', value: 100, color: '#dc2626' },
  { name: 'Private Equity Investment Closing', value: 100, color: '#dc2626' },
  { name: 'Fixed Income Trade Lifecycle (Public Markets)', value: 90, color: '#eab308' },
  { name: 'Fund Commitment Process', value: 70, color: '#eab308' },
  { name: 'FX Hedging', value: 50, color: '#22c55e' },
];

// Alerts data
const alertsData = [
  {
    processGroup: 'Equity Trade Lifecycle (Public Markets)',
    alert: 'Time from order submission and execution exceeds threshold',
    action: 'Review order routing',
  },
  {
    processGroup: 'FX Hedging',
    alert: 'Settlement failure',
    action: 'Manual reconciliation',
  },
];

export function MainDashboard() {
  const [selectedMetric, setSelectedMetric] = useState('Average Trade Cycle Time');
  const [user, setUser] = useState<{ full_name: string; email: string } | null>({
    full_name: 'Unknown User',
    email: 'unknown@example.com'
  });
  const [caseRootsData, setCaseRootsData] = useState<CaseRootsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('@user_data');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCaseRoots();
        setCaseRootsData(data);
      } catch (error) {
        console.error('Failed to fetch case roots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pie chart data - dynamic from API or fallback to hardcoded
  const pieChartData = caseRootsData
    ? caseRootsData.case_roots.map((root, index) => ({
        name: root.root_table,
        percentage: Math.round(root.percentage * 100),
        cases: root.case_count,
        color: PIE_CHART_COLORS[index % PIE_CHART_COLORS.length],
      }))
    : [
        { name: 'Equity Trade Lifecycle (Public Markets)', percentage: 56, cases: 2000, color: '#1e3a5f' },
        { name: 'Fixed Income Trade Lifecycle (Public Markets)', percentage: 14, cases: 500, color: '#3b82f6' },
        { name: 'Private Equity Investment Closing', percentage: 28, cases: 1000, color: '#60a5fa' },
        { name: 'Fund Commitment Process', percentage: 1, cases: 30, color: '#93c5fd' },
        { name: 'FX Hedging', percentage: 1, cases: 30, color: '#bfdbfe' },
      ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="1400px" py={6}>
        {/* Top Bar - Breadcrumb and Time Selector */}
        <Flex justify="space-between" align="center" mb={2}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb.Root fontSize="sm">
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#" color="gray.600">
                  Dashboard
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <ChevronRight size={16} color="gray" />
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#" color="gray.600">
                  Processes
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <ChevronRight size={16} color="gray" />
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#" color="gray.900" fontWeight="medium">
                  Investment Execution
                </Breadcrumb.Link>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>

          {/* Time Period Selector */}
          <Flex align="center" gap={2}>
            <Text fontSize="sm" color="gray.600">
              Time Period
            </Text>
            <NativeSelectRoot size="sm" variant="outline" width="auto" bg="white">
              <NativeSelectField
                fontWeight="medium"
                defaultValue="Q4-2025"
                cursor="pointer"
              >
                <option value="Q4-2025">Q4 2025 (October 1 - December 31)</option>
                <option value="Q3-2025">Q3 2025 (July 1 - September 30)</option>
                <option value="Q2-2025">Q2 2025 (April 1 - June 30)</option>
                <option value="Q1-2025">Q1 2025 (January 1 - March 31)</option>
              </NativeSelectField>
            </NativeSelectRoot>
          </Flex>
        </Flex>

        {/* Subtitle */}
        <Text fontSize="sm" color="gray.600" mb={6}>
          Click into a segment to view detailed breakdown.
        </Text>

        {/* KPI Cards */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={4}
          mb={6}
        >
          {kpiCards.map((kpi) => (
            <Card.Root key={kpi.title} bg="white" border="1px" borderColor="gray.200" shadow="sm">
              <Card.Body p={4}>
                <Flex align="center" gap={1} mb={2}>
                  <Text fontSize="sm" color="gray.600">
                    {kpi.title}
                  </Text>
                  <Info size={14} color="gray" />
                </Flex>
                <Text fontSize="2xl" fontWeight="bold" color="gray.900" mb={1}>
                  {kpi.value}
                </Text>
                <Flex align="center" gap={1}>
                  {kpi.trend === 'up' ? (
                    <TrendingUp size={16} color={kpi.isPositive ? 'green' : 'red'} />
                  ) : (
                    <TrendingDown size={16} color={kpi.isPositive ? 'green' : 'red'} />
                  )}
                  <Text fontSize="sm" color={kpi.isPositive ? 'green.600' : 'red.600'}>
                    {kpi.trendValue}
                  </Text>
                </Flex>
                {kpi.hasProgressBar && (
                  <Box mt={2}>
                    <Progress.Root
                      value={kpi.progressValue}
                      size="xs"
                      colorPalette={kpi.progressColor}
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

        {/* Main Content Grid */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6} mb={6}>
          {/* Process Overview - Pie Chart */}
          <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
            <Card.Body p={6}>
              <Heading size="md" mb={6} color="gray.900">
                Process Overview
              </Heading>
              <Flex align="center" justify="center" gap={8}>
                {/* Pie Chart SVG */}
                <Box position="relative" w="200px" h="200px">
                  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                    {/* Pie segments - simplified representation */}
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#1e3a5f"
                      strokeWidth="20"
                      strokeDasharray="140.8 251.2"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="20"
                      strokeDasharray="70.4 251.2"
                      strokeDashoffset="-140.8"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray="35.2 251.2"
                      strokeDashoffset="-211.2"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth="20"
                      strokeDasharray="2.5 251.2"
                      strokeDashoffset="-246.4"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#bfdbfe"
                      strokeWidth="20"
                      strokeDasharray="2.5 251.2"
                      strokeDashoffset="-248.9"
                    />
                  </svg>
                </Box>

                {/* Legend */}
                <VStack align="flex-start" gap={2} fontSize="xs">
                  {pieChartData.map((item) => (
                    <Flex key={item.name} align="center" gap={2}>
                      <Box w="10px" h="10px" borderRadius="sm" bg={item.color} />
                      <VStack align="flex-start" gap={0}>
                        <Text fontWeight="medium" color="gray.700" lineHeight="tight">
                          {item.name}
                        </Text>
                        <Text color="gray.500">
                          {item.percentage}%, {item.cases.toLocaleString()} Cases
                        </Text>
                      </VStack>
                    </Flex>
                  ))}
                </VStack>
              </Flex>
            </Card.Body>
          </Card.Root>

          {/* Performance Metrics */}
          <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
            <Card.Body p={6}>
              <Heading size="md" color="gray.900" mb={4}>
                Performance Metrics
              </Heading>
              <Flex justify="center" mb={6}>
                <NativeSelectRoot size="sm" variant="outline" width="auto">
                  <NativeSelectField
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                  >
                    <option>Average Trade Cycle Time</option>
                    <option>STP Rate</option>
                    <option>Throughput</option>
                  </NativeSelectField>
                </NativeSelectRoot>
              </Flex>
              <VStack gap={3} align="stretch">
                {performanceMetrics.map((metric) => (
                  <Box key={metric.name}>
                    <Flex
                      bg={metric.color}
                      borderRadius="md"
                      px={4}
                      py={3}
                      justify="space-between"
                      align="center"
                      style={{ width: `${metric.value}%` }}
                      minW="200px"
                    >
                      <Text fontSize="sm" color="white" fontWeight="medium" truncate>
                        {metric.name}
                      </Text>
                      <Text fontSize="sm" color="white" fontWeight="bold" ml={2}>
                        {metric.value}%
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>

        {/* Bottom Grid */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
          {/* Performance Overview - AI Insights */}
          <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
            <Card.Body p={6}>
              <Flex align="center" gap={2} mb={4}>
                <Heading size="md" color="gray.900">
                  Performance Overview (Insights Powered by AI)
                </Heading>
              </Flex>
              <Flex gap={6} align="flex-start">
                {/* Circular Score */}
                <Box position="relative" flexShrink={0}>
                  <Circle
                    size="100px"
                    border="8px solid"
                    borderColor="green.400"
                    bg="white"
                  >
                    <VStack gap={0}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.900">
                        99/100
                      </Text>
                    </VStack>
                  </Circle>
                </Box>

                {/* Insight Text */}
                <Box>
                  <Flex align="center" gap={2} mb={2}>
                    <Text color="gray.900">
                      Overall Process Health
                    </Text>
                    <Info size={16} color="gray" />
                  </Flex>
                  <Text fontSize="sm" color="gray.600" lineHeight="tall">
                    Focus on reducing delays across the Investment Execution
                    processes by streamlining order validation in Equity and Fixed
                    Income trading, accelerating approval and documentation
                    cycles in Private Equity and Fund Commitment, and shortening
                    exposure identification and hedge execution times in FX
                    Hedging.
                  </Text>
                </Box>
              </Flex>
            </Card.Body>
          </Card.Root>

          {/* Alerts and Hotspots */}
          <Card.Root bg="white" border="1px" borderColor="gray.200" shadow="sm">
            <Card.Body p={6}>
              <Heading size="md" color="gray.900" mb={4}>
                Alerts and Hotspots
              </Heading>
              <Table.Root size="sm">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader fontWeight="semibold" color="gray.700">
                      Process Group
                    </Table.ColumnHeader>
                    <Table.ColumnHeader fontWeight="semibold" color="gray.700">
                      Alert
                    </Table.ColumnHeader>
                    <Table.ColumnHeader fontWeight="semibold" color="gray.700">
                      Action
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {alertsData.map((alert, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Link color="blue.600" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                          {alert.processGroup}
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <Text fontSize="sm" color="gray.700">
                          {alert.alert}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text fontSize="sm" color="gray.700">
                          {alert.action}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Container>
    </Box>
  );
}
