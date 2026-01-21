import { Link } from "react-router-dom";
import {
  Factory,
  DollarSign,
  Heart,
  ShoppingCart,
  Truck,
  ArrowRight,
  TrendingUp,
  Check,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Button,
  Group,
  List,
} from "@chakra-ui/react";
import { MdOutlineCheck } from "react-icons/md";
import heroBg from "/images/bg2.png?url";
import { Grid, GridItem } from "@chakra-ui/react";
import bannerbg from "/images/bannerbg.png?url";

export function Solutions() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What happens after my free trial ends?",
      answer:
        "After your 14-day free trial ends, you can choose to upgrade to a paid plan or continue with limited features. Your data will be preserved for 30 days.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer:
        "Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and follow industry best practices to keep your data safe and secure.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
  ];

  const solutions = [
    {
      icon: Factory,
      title: "Manufacturing",
      benefit: "Eliminate production bottlenecks and reduce downtime",
      description:
        "Optimize assembly lines, track quality metrics, and improve resource allocation.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: DollarSign,
      title: "Finance",
      benefit: "Streamline approval workflows and reduce processing time",
      description:
        "Accelerate loan approvals, detect fraud patterns, and optimize compliance.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      benefit: "Improve patient flow and reduce wait times",
      description:
        "Optimize appointment scheduling, track patient journeys, and enhance care delivery.",
      color: "5ECFC0",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      benefit: "Speed up order fulfillment and boost customer satisfaction",
      description:
        "Optimize checkout processes, reduce cart abandonment, and streamline returns.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Truck,
      title: "Logistics",
      benefit: "Optimize delivery routes and reduce operational costs",
      description:
        "Track shipments in real-time, identify delays, and improve warehouse efficiency.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const metrics = [
    { value: "+30%", label: "Efficiency Improvement", icon: TrendingUp },
    { value: "-45%", label: "Process Time Reduction", icon: TrendingUp },
    { value: "+25%", label: "Cost Savings", icon: TrendingUp },
    { value: "99%", label: "Customer Satisfaction", icon: TrendingUp },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VStack
            align="center"
            gap={2}
            mb={12}
            p={{ base: 4, sm: 6, lg: 8 }}
            textAlign={"center"}
          >
            <Heading
              size="2xl"
              color="black"
              fontWeight="black"
              whiteSpace="pre-line"
            >
              {"Solutions That Work Across Every Industry."}
            </Heading>
            <Text color={"gray.600"}>
              Tailored process intelligence for your specific business needs
            </Text>
          </VStack>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <Box p={12} width={"100%"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={`/use-case/${solution.title.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  borderWidth="1px"
                  borderColor="gray.100"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.2s"
                  h="full"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                >
                  <Box
                    w={16}
                    h={16}
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={6}
                    bg="#5ECFC0"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </Box>
                  <Text fontSize="lg" color="gray.900" mb={4} fontWeight="bold">
                    {solution.title}
                  </Text>
                  <Text color="brand.primary" mb={4}>
                    {solution.benefit}
                  </Text>
                  <Text color="gray.600" mb={4} flex={1}>
                    {solution.description}
                  </Text>
                  <Text
                    color="brand.primary"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    See Use Case
                    <ArrowRight className="w-4 h-4" />
                  </Text>
                </Box>
              </Link>
            </motion.div>
          ))}
        </div>
      </Box>

      {/* Success Metrics Carousel */}
      <section className="bg-gradient-to-b ">
        <Box p={12} width={"100%"}>
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Proven Results
            </Text>
            <Text color="gray.600">
              Real outcomes from businesses like yours
            </Text>
          </VStack>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onViewportEnter={() => setActiveMetric(index)}
                onClick={() => setActiveMetric(index)}
                className={`text-center p-6 rounded-2xl transition-all cursor-pointer ${
                  activeMetric === index
                    ? "bg-gradient-to-br from-[#0047AB] to-[#00D9B5] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-100 text-gray-900"
                }`}
                style={{
                  background:
                    activeMetric === index
                      ? "linear-gradient(to bottom, #003F72, #C6EBE7)"
                      : "white",
                }}
              >
                <metric.icon
                  className={`w-8 h-8 mx-auto mb-3 ${activeMetric === index ? "text-white" : "text-[#0047AB]"}`}
                />
                <Text fontSize="3xl" mb={2}>
                  {metric.value}
                </Text>
                <Text
                  fontSize="sm"
                  color={activeMetric === index ? "whiteAlpha.900" : "gray.600"}
                >
                  {metric.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {metrics.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMetric(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeMetric === index ? "bg-[#0047AB] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </Box>
      </section>

      {/* Industry-Specific Features */}
      <Box
        py={12}
        width={"100%"}
        className="bg-gradient-to-br from-blue-50 to-emerald-50"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          px={12}
          gap={8}
          alignItems={"center"}
        >
          <GridItem>
            <VStack alignItems={"start"} gap={2}>
              <Text fontWeight="black" color="brand.primary">
                Built for Your Industry
              </Text>
              <Text color="brand.primary">
                Every industry has unique challenges. Tessely adapts to your
                specific needs with pre-built templates and custom workflows.
              </Text>
              <List.Root variant="plain" gap={3} pl={0}>
                <List.Item alignItems="center" ml={0} color="brand.third_blue">
                  <List.Indicator asChild>
                    <Box
                      w={6}
                      h={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="brand.primary"
                      borderRadius="full"
                    >
                      <MdOutlineCheck color="#80ADBD" />
                    </Box>
                  </List.Indicator>
                  Industry-specific KPIs and metrics
                </List.Item>
                <List.Item alignItems="center" color="brand.third_blue">
                  <List.Indicator asChild>
                    <Box
                      w={6}
                      h={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="brand.primary"
                      borderRadius="full"
                    >
                      <MdOutlineCheck color="#80ADBD" />
                    </Box>
                  </List.Indicator>
                  Compliance and regulatory support
                </List.Item>
                <List.Item alignItems="center" color="brand.third_blue">
                  <List.Indicator asChild>
                    <Box
                      w={6}
                      h={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="brand.primary"
                      borderRadius="full"
                    >
                      <MdOutlineCheck color="#80ADBD" />
                    </Box>
                  </List.Indicator>
                  Pre-configured integration templates
                </List.Item>
                <List.Item alignItems="center" color="brand.third_blue">
                  <List.Indicator asChild>
                    <Box
                      w={6}
                      h={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="brand.primary"
                      borderRadius="full"
                    >
                      <MdOutlineCheck color="#80ADBD" />
                    </Box>
                  </List.Indicator>
                  Expert support and best practices
                </List.Item>
              </List.Root>
            </VStack>
          </GridItem>
          <GridItem>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {[
                  "Process Templates",
                  "Custom Dashboards",
                  "Integration Hub",
                  "Analytics Engine",
                ].map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{
                        background:
                          "linear-gradient(to bottom, #003F72, #C6EBE7)",
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </GridItem>
        </Grid>
      </Box>

      {/* Pricing Preview Section */}
      <section className=" bg-gradient-to-b from-white to-gray-50">
        <Box p={12} width={"100%"}>
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Choose Your Plan
            </Text>
            <Text color="gray.600">Start free and scale as you grow</Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Trial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <Box
                p={8}
                bgGradient="to-br"
                gradientFrom="gray.50"
                gradientTo="gray.100"
              >
                <Text color="gray.900" mb={2} fontWeight="medium">
                  Free Trial
                </Text>
                <HStack gap={2} mb={2} alignItems="baseline">
                  <Text fontSize="4xl" color="gray.900">
                    $0
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    / 14 days
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  No credit card required
                </Text>
              </Box>
              <VStack p={8} align="stretch">
                <VStack gap={3} mb={6} align="stretch">
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Up to 1,000 processes
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      AI-powered insights
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Basic dashboards
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Email support
                    </Text>
                  </HStack>
                </VStack>
                <Link to="/pricing">
                  <Button
                    w="full"
                    variant={"outline"}
                    borderColor="#5ECFC0"
                    color="#5ECFC0"
                    _hover={{ opacity: 0.9 }}
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </VStack>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border-2 hadow-xl scale-105 overflow-hidden relative"
              style={{ borderColor: "#5ECFC0 " }}
            >
              <Box p={8} bgGradient="to-br" bg="#5ECFC0" color="white">
                <Text mb={2} fontWeight="medium">
                  Professional
                </Text>
                <HStack gap={2} mb={2} alignItems="baseline">
                  <Text fontSize="4xl">Coming Soon</Text>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.800">
                  For growing teams
                </Text>
              </Box>
              <VStack p={8} align="stretch">
                <VStack gap={3} mb={6} align="stretch">
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Unlimited processes
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Advanced analytics
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Custom dashboards
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Priority support
                    </Text>
                  </HStack>
                </VStack>
                <Link to="/pricing">
                  <Button
                    w="full"
                    bg="#5ECFC0"
                    color="white"
                    _hover={{ opacity: 0.9 }}
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </VStack>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <Box
                p={8}
                bgGradient="to-br"
                gradientFrom="gray.50"
                gradientTo="gray.100"
              >
                <Text color="gray.900" mb={2} fontWeight="medium">
                  Enterprise
                </Text>
                <HStack gap={2} mb={2} alignItems="baseline">
                  <Text fontSize="4xl" color="gray.900">
                    Custom
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  Tailored to your needs
                </Text>
              </Box>
              <VStack p={8} align="stretch">
                <VStack gap={3} mb={6} align="stretch">
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Everything in Pro
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Dedicated support
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      Custom integrations
                    </Text>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <Text fontSize="sm" color="gray.700">
                      SLA guarantees
                    </Text>
                  </HStack>
                </VStack>
                <Link to="/contact">
                <Button
                    w="full"
                    variant={"outline"}
                    borderColor="#5ECFC0"
                    color="#5ECFC0"
                    _hover={{ opacity: 0.9 }}
                  >
                    Book Demo
                  </Button>
                  
                </Link>
              </VStack>
            </motion.div>
          </div>

          {/* Still Unsure Button */}
          <VStack textAlign="center" mt={12}>
            <Text color="gray.600" mb={4}>
              Still not sure?
            </Text>
            <Link to="/how-it-works">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" bgColor="white" size="lg">
                  See Our Solutions
                </Button>
              </motion.div>
            </Link>
          </VStack>
        </Box>
      </section>

      {/* All Plans Include Section */}
      <Box p={12} width={"100%"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              All Plans Include
            </Text>
            <Text color="gray.600">Core features available to everyone</Text>
          </VStack>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "AI-Powered Insights",
              "Process Mapping",
              "Real-Time Dashboards",
              "Data Security",
              "Cloud Storage",
              "Mobile Access",
              "Export Reports",
              "Regular Updates",
            ].map((feature) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  textAlign="center"
                  shadow="sm"
                >
                  <Check
                    className="w-6 h-6 mx-auto mb-3"
                    style={{ color: "#003F72" }}
                  />
                  <Text color="gray.900" fontSize="sm" fontWeight="medium">
                    {feature}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </div>
        </div>
      </Box>

      {/* FAQ Section */}
      <Box p={12} width={"100%"} bg="white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Frequently Asked Questions
            </Text>
            <Text color="gray.600">
              Everything you need to know about pricing
            </Text>
          </VStack>
          <VStack gap={4} align="stretch">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  bg="white"
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor="gray.100"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  _hover={{ shadow: "md" }}
                  transition="all 0.2s"
                >
                  <HStack
                    w="full"
                    px={6}
                    py={5}
                    justify="space-between"
                    textAlign="left"
                  >
                    <Text color="gray.900" fontWeight="medium">
                      {faq.question}
                    </Text>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </HStack>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Box px={6} pb={5}>
                          <Text color="gray.600">{faq.answer}</Text>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </motion.div>
            ))}
          </VStack>
        </div>
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
