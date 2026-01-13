import {
  Box,
  Breadcrumb,
  Container,
  Flex,
  Grid,
  NativeSelectRoot,
  NativeSelectField,
  Text,
} from '@chakra-ui/react';
import { ChevronRight } from 'lucide-react';
import { ProcessOverview } from './ProcessDetailComponents/ProcessOverview';
import { MetricsGrid } from './ProcessDetailComponents/MetricsGrid';
import { InsightsPanel } from './ProcessDetailComponents/InsightsPanel';

export function Processes() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="1400px" py={6}>
        {/* Top Bar - Breadcrumb and Time Selector */}
        <Flex justify="space-between" align="center" mb={8}>
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
                <Breadcrumb.Link href="#" color="gray.600">
                  Investment Execution
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <ChevronRight size={16} color="gray" />
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#" color="gray.900" fontWeight="medium">
                  Equity Trade Lifecycle
                </Breadcrumb.Link>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>

          {/* Time Period Selector */}
          <Flex align="center" gap={2} bg="white" px={4} py={2} borderRadius="md" border="1px" borderColor="gray.200">
            <Text fontSize="sm" color="gray.600">
              Time Period
            </Text>
            <NativeSelectRoot size="sm" variant="plain" width="auto">
              <NativeSelectField
                fontWeight="medium"
                defaultValue="Q4-2025"
                cursor="pointer"
                border="none"
              >
                <option value="Q4-2025">Q4 2025 (October 1 - December 31)</option>
                <option value="Q3-2025">Q3 2025 (July 1 - September 30)</option>
                <option value="Q2-2025">Q2 2025 (April 1 - June 30)</option>
                <option value="Q1-2025">Q1 2025 (January 1 - March 31)</option>
              </NativeSelectField>
            </NativeSelectRoot>
          </Flex>
        </Flex>

        {/* Main Content - Two Column Layout */}
        <Grid
          templateColumns={{ base: '1fr', lg: '2fr 3fr' }}
          gap={6}
        >
          {/* Left Column - Process Overview (narrower) */}
          <ProcessOverview />

          {/* Right Column - Metrics and Insights (wider) */}
          <Flex direction="column" gap={6}>
            {/* Metrics Grid */}
            <MetricsGrid />

            {/* Insights Panel */}
            <InsightsPanel />
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}
