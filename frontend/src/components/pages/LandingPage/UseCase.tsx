import { Link, useParams } from 'react-router-dom';
import { Factory, DollarSign, Heart, Package, Truck, CheckCircle, TrendingUp, Clock, DollarSign as Cost, ArrowRight, Check, CircleCheckBig, ChartArea } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle } from 'recharts';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Grid,
  GridItem,
  Group,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Chart, useChart } from "@chakra-ui/charts"

import bannerbg from "/images/bannerbg.png?url";

export function UseCase() {
  const { industry } = useParams<{ industry: string }>();

  const useCases: Record<string, any> = {
    manufacturing: {
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Optimize Production & Eliminate Bottlenecks',
      color: 'from-blue-500 to-blue-600',
      challenge: 'Manufacturing operations face complex challenges with multiple production lines, quality control checkpoints, and resource allocation issues that lead to costly downtime and inefficiencies.',
      solution: 'Tessely automatically maps your entire production process, identifying bottlenecks in real-time and providing actionable insights to optimize throughput and reduce waste.',
      benefits: [
        { label: 'Reduce Downtime', value: '40%', icon: Clock },
        { label: 'Increase Efficiency', value: '35%', icon: TrendingUp },
        { label: 'Cost Savings', value: '$2.5M', icon: Cost },
        { label: 'Quality Improvement', value: '28%', icon: CheckCircle },
      ],
      features: [
        'Real-time production line monitoring',
        'Automated bottleneck detection',
        'Quality control process mapping',
        'Resource allocation optimization',
        'Predictive maintenance insights',
        'Compliance tracking and reporting',
      ],
      processSteps: [
        { name: 'Material Intake', efficiency: 92 },
        { name: 'Assembly Line A', efficiency: 68 },
        { name: 'Quality Check', efficiency: 85 },
        { name: 'Assembly Line B', efficiency: 78 },
        { name: 'Final Inspection', efficiency: 90 },
        { name: 'Packaging', efficiency: 88 },
      ],
      testimonial: {
        quote: 'Tessely helped us identify a critical bottleneck in our assembly process that was costing us $50,000 per week. Within 2 weeks of implementation, we increased our output by 35%.',
        author: 'Michael Chen',
        role: 'VP of Operations',
        company: 'TechManufacture Inc.',
      },
    },
    finance: {
      icon: DollarSign,
      title: 'Finance',
      subtitle: 'Streamline Approvals & Accelerate Processing',
      color: 'from-emerald-500 to-emerald-600',
      challenge: 'Financial institutions struggle with lengthy approval processes, compliance requirements, and manual verification steps that slow down customer service and increase operational costs.',
      solution: 'Tessely maps your entire financial workflow, from application to approval, highlighting delays and suggesting automation opportunities to speed up processing while maintaining compliance.',
      benefits: [
        { label: 'Faster Approvals', value: '65%', icon: Clock },
        { label: 'Process Efficiency', value: '48%', icon: TrendingUp },
        { label: 'Cost Reduction', value: '$1.8M', icon: Cost },
        { label: 'Compliance Score', value: '99%', icon: CheckCircle },
      ],
      features: [
        'Loan approval process mapping',
        'Fraud detection pattern analysis',
        'Compliance workflow tracking',
        'Customer journey optimization',
        'Risk assessment automation',
        'Cross-department collaboration insights',
      ],
      processSteps: [
        { name: 'Application Submit', efficiency: 95 },
        { name: 'Document Verify', efficiency: 72 },
        { name: 'Credit Check', efficiency: 88 },
        { name: 'Risk Assessment', efficiency: 65 },
        { name: 'Manager Approval', efficiency: 58 },
        { name: 'Final Processing', efficiency: 92 },
      ],
      testimonial: {
        quote: 'We reduced our loan approval time from 5 days to 2 days. Tessely showed us exactly where applications were getting stuck and how to streamline our verification process.',
        author: 'Sarah Williams',
        role: 'Chief Operating Officer',
        company: 'Regional Credit Union',
      },
    },
    healthcare: {
      icon: Heart,
      title: 'Healthcare',
      subtitle: 'Improve Patient Flow & Reduce Wait Times',
      color: 'from-red-500 to-red-600',
      challenge: 'Healthcare facilities face challenges with patient scheduling, treatment delays, and resource allocation that impact patient satisfaction and care quality.',
      solution: 'Tessely tracks patient journeys from check-in to discharge, identifying delays and optimizing resource allocation to improve patient flow and care delivery.',
      benefits: [
        { label: 'Reduced Wait Time', value: '45%', icon: Clock },
        { label: 'Patient Satisfaction', value: '38%', icon: TrendingUp },
        { label: 'Cost Savings', value: '$3.2M', icon: Cost },
        { label: 'Care Quality', value: '32%', icon: CheckCircle },
      ],
      features: [
        'Patient flow optimization',
        'Appointment scheduling analysis',
        'Resource utilization tracking',
        'Treatment protocol mapping',
        'Emergency response time monitoring',
        'Staff allocation optimization',
      ],
      processSteps: [
        { name: 'Check-In', efficiency: 88 },
        { name: 'Triage', efficiency: 92 },
        { name: 'Consultation', efficiency: 75 },
        { name: 'Diagnosis', efficiency: 82 },
        { name: 'Treatment', efficiency: 68 },
        { name: 'Discharge', efficiency: 85 },
      ],
      testimonial: {
        quote: 'Patient wait times dropped by 45% after implementing Tessely. We can now see our entire patient flow in real-time and make adjustments on the fly.',
        author: 'Dr. James Martinez',
        role: 'Medical Director',
        company: 'City General Hospital',
      },
    },
    'supply chain': {
      icon: Package,
      title: 'Supply Chain',
      subtitle: 'End-to-End Visibility & Inventory Optimization',
      color: 'from-purple-500 to-purple-600',
      challenge: 'Global supply chains face unprecedented complexity with multi-tier suppliers, unpredictable demand patterns, inventory imbalances, and lack of real-time visibility across the entire network, leading to stockouts, excess inventory, and missed delivery commitments.',
      solution: 'Tessely provides complete supply chain transparency by automatically mapping your entire network from raw material suppliers to end customers, identifying risks, bottlenecks, and optimization opportunities across procurement, production, warehousing, and distribution.',
      benefits: [
        { label: 'Inventory Reduction', value: '35%', icon: Cost },
        { label: 'Lead Time Cut', value: '42%', icon: Clock },
        { label: 'Supply Chain Visibility', value: '95%', icon: TrendingUp },
        { label: 'On-Time Delivery', value: '98%', icon: CheckCircle },
      ],
      features: [
        'Multi-tier supplier network mapping',
        'Real-time inventory optimization',
        'Demand forecasting and planning',
        'Supply risk identification and mitigation',
        'Lead time analysis and reduction',
        'Cross-functional collaboration tracking',
      ],
      processSteps: [
        { name: 'Supplier Order', efficiency: 88 },
        { name: 'Procurement', efficiency: 72 },
        { name: 'Inbound Logistics', efficiency: 68 },
        { name: 'Warehousing', efficiency: 75 },
        { name: 'Order Processing', efficiency: 82 },
        { name: 'Distribution', efficiency: 85 },
      ],
      testimonial: {
        quote: 'Tessely gave us complete visibility into our multi-tier supply chain for the first time. We reduced inventory carrying costs by $5.2M while improving on-time delivery to 98%. The AI identified supplier risks we never knew existed.',
        author: 'Jennifer Rodriguez',
        role: 'Chief Supply Chain Officer',
        company: 'GlobalTech Manufacturing',
      },
    },
    logistics: {
      icon: Truck,
      title: 'Logistics',
      subtitle: 'Optimize Routes & Reduce Operational Costs',
      color: 'from-orange-500 to-orange-600',
      challenge: 'Logistics companies struggle with route optimization, warehouse inefficiencies, and delivery delays that increase costs and reduce customer satisfaction.',
      solution: 'Tessely maps your entire supply chain from warehouse to delivery, identifying delays and suggesting route optimizations to reduce costs and improve on-time delivery rates.',
      benefits: [
        { label: 'Faster Delivery', value: '38%', icon: Clock },
        { label: 'Route Efficiency', value: '42%', icon: TrendingUp },
        { label: 'Cost Reduction', value: '$2.8M', icon: Cost },
        { label: 'On-Time Rate', value: '95%', icon: CheckCircle },
      ],
      features: [
        'Route optimization analysis',
        'Warehouse workflow mapping',
        'Delivery tracking and monitoring',
        'Fleet utilization insights',
        'Last-mile delivery optimization',
        'Supply chain visibility',
      ],
      processSteps: [
        { name: 'Order Receipt', efficiency: 95 },
        { name: 'Warehouse Pick', efficiency: 78 },
        { name: 'Package Sort', efficiency: 72 },
        { name: 'Route Planning', efficiency: 68 },
        { name: 'In Transit', efficiency: 85 },
        { name: 'Delivery', efficiency: 88 },
      ],
      testimonial: {
        quote: 'We cut our delivery times by 38% and reduced fuel costs by $2.8M annually. Tessely showed us inefficiencies in our routing that we never would have caught manually.',
        author: 'David Park',
        role: 'Logistics Director',
        company: 'FastShip Delivery',
      },
    },
  };

  const currentCase = useCases[industry || 'manufacturing'];

  const chart = useChart({
    data: currentCase?.processSteps || [],
    series: [
      { name: "efficiency", label: "Efficiency", color: "teal.solid" },
    ],
  });

  const showXAxisTick = useBreakpointValue({ base: false, md: true });

  if (!currentCase) {
    return (
      <Box py={20} textAlign="center">
        <Heading size="xl" color="gray.900" mb={4}>Use Case Not Found</Heading>
        <Link to="/solutions">
          <Button variant="solid">
            Back to Solutions
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <Box as="section" py={20} bg="#5ECFC0" color="white">
        <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={8}
              alignItems="center"
            >
              <GridItem>
                <HStack gap={3} mb={4}>
                  <Box
                    w={16}
                    h={16}
                    borderRadius="2xl"
                    bg="whiteAlpha.200"
                    backdropFilter="blur(8px)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <currentCase.icon className="w-8 h-8 text-white" />
                  </Box>
                  <Link to="/solutions">
                    <Text fontSize="sm" color="whiteAlpha.800" _hover={{ color: "white" }}>
                      ← Back to Solutions
                    </Text>
                  </Link>
                </HStack>
                <Heading size="2xl" color="white" mb={4} fontWeight="black">
                  {currentCase.title}
                </Heading>
                <Text fontSize="xl" color="whiteAlpha.900" mb={6}>
                  {currentCase.subtitle}
                </Text>
              </GridItem>
              <GridItem>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {currentCase.benefits.map((benefit: any, index: number) => (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(8px)"
                        borderRadius="xl"
                        p={4}
                        textAlign="center"
                      >
                        <benefit.icon className="w-6 h-6 text-white mx-auto mb-2" />
                        <Text fontSize="2xl" color="white" mb={1}>
                          {benefit.value}
                        </Text>
                        <Text fontSize="sm" color="whiteAlpha.800">
                          {benefit.label}
                        </Text>
                      </Box>
                    </motion.div>
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </motion.div>
        </Box>
      </Box>

      {/* Challenge & Solution */}
      <Box as="section" p={12} bg="white" width="100%">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={12}
        >
          <GridItem>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Text fontSize="xl" color="gray.900" mb={4}>
                The Challenge
              </Text>
              <Text color="gray.600">{currentCase.challenge}</Text>
            </motion.div>
          </GridItem>
          <GridItem>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Text fontSize="xl" color="gray.900" mb={4}>
                The Tessely Solution
              </Text>
              <Text color="gray.600">{currentCase.solution}</Text>
            </motion.div>
          </GridItem>
        </Grid>
      </Box>

      {/* Process Visualization */}
      <Box as="section" p={12} width="100%" className="bg-gradient-to-b from-white to-gray-50">
        <VStack textAlign="center" mb={12}>
          <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
            Process Efficiency Analysis
          </Text>
          <Text color="gray.600">
            See how Tessely identifies optimization opportunities
          </Text>
        </VStack>

        <Box
          bg="white"
          borderRadius="2xl"
          p={8}
          borderWidth="1px"
          borderColor="gray.100"
          shadow="sm"
        >
          <Chart.Root chart={chart} maxH="sm">
            <BarChart data={chart.data}>
              <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
              <XAxis
                tickLine={false}
                dataKey="name"
                stroke={chart.color("border")}
                tick={showXAxisTick ? { fontSize: 12 } : false}
              />
              <YAxis
                tickLine={false}
                stroke={chart.color("border")}
                tick={{ fontSize: 12 }}
                domain={[0, 100]}
              />
              <Tooltip
                cursor={{ fill: chart.color("bg.muted") }}
                animationDuration={100}
                content={<Chart.Tooltip />}
              />
              <Bar
                dataKey={chart.key("efficiency")}
                name="Efficiency"
                radius={[8, 8, 0, 0]}
                isAnimationActive={false}
                shape={(props: any) => {
                  const { efficiency } = props.payload;
                  const color = "black";
                  return <Rectangle {...props} fill={color} />;
                }}
              />
            </BarChart>
          </Chart.Root>

          <Box
            mt={6}
            display="flex"
            justifyContent="center"
            gap={{ base: 3, md: 6 }}
            fontSize="sm"
            flexWrap="wrap"
            rowGap={3}
          >
            {/* <HStack gap={2}>
              <Box w={4} h={4} borderRadius="md" bg="#00D9B5" flexShrink={0} />
              <Text color="gray.600">Optimal (&gt;80%)</Text>
            </HStack>
            <HStack gap={2}>
              <Box w={4} h={4} borderRadius="md" bg="#FFA500" flexShrink={0} />
              <Text color="gray.600">Needs Attention (70-80%)</Text>
            </HStack>
            <HStack gap={2}>
              <Box w={4} h={4} borderRadius="md" bg="#FF6B6B" flexShrink={0} />
              <Text color="gray.600">Critical (&lt;70%)</Text>
            </HStack> */}
          </Box>
        </Box>
      </Box>

      {/* Features */}
      <Box as="section" p={12} bg="white" width="100%">
        <VStack textAlign="center" mb={12}>
          <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
            Key Features for {currentCase.title}
          </Text>
          <Text color="gray.600">
            Industry-specific capabilities designed for your needs
          </Text>
        </VStack>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCase.features.map((feature: string, index: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HStack
                align="flex-start"
                gap={3}
                p={6}
                className="bg-gradient-to-br from-blue-50/50 to-emerald-50/50"
                borderRadius="xl"
                borderWidth="1px"
                borderColor="gray.100"
              >
                
                <CircleCheckBig className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                <Text color="gray.700">{feature}</Text>
              </HStack>
            </motion.div>
          ))}
        </div>
      </Box>

      {/* Testimonial */}
      <Box as="section" p={12} width="100%" className="bg-gradient-to-b from-white to-gray-50">
        <Box mx="auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box
              bg="white"
              borderRadius="2xl"
              p={{ base: 8, md: 12 }}
              borderWidth="1px"
              borderColor="gray.100"
              shadow="lg"
            >
              <VStack textAlign="center">
                <Box
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg="#5ECFC0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <currentCase.icon className="w-8 h-8 text-white" />
                </Box>
                <Text fontSize="xl" color="gray.700" fontStyle="italic" mb={6}>
                  &ldquo;{currentCase.testimonial.quote}&rdquo;
                </Text>
                <VStack gap={1}>
                  <Text color="gray.900" fontWeight="medium">
                    {currentCase.testimonial.author}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {currentCase.testimonial.role}
                  </Text>
                  <Text fontSize="sm" color="brand.primary">
                    {currentCase.testimonial.company}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
          w="full"
          minH="screen"
          bgAttachment="fixed"
          bgImage={`url(${bannerbg})`}
          bgSize="100% 100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={16}
          textAlign={"center"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Text fontSize="xl" color="white" mb={6}>
               Ready to see your process clearly?
            </Text>
           
            <Link to="/contact">
              <Button variant={"white"} size="lg">Start Free Today</Button>
            </Link>
          </motion.div>
        </Box>
    </div>
  );
}