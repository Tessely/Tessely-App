import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Heading,
  Highlight,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Play,
  Database,
  Zap,
  Shield,
  Package,
  Factory,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import LandingPageBackground from "../../../assets/icons/LandingPageBackground.svg";
import datamap from "/images/datamap.png?url";
// import heroBg from '/images/heroBg.png?url'
import heroBg from "/images/bg2.png?url";
import bannerbg from "/images/bannerbg.png?url";
import { Group } from "@chakra-ui/react";

export function Landing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const typingText = "Do I have bottlenecks in my process?";

  useEffect(() => {
    if (isTyping && searchQuery.length < typingText.length) {
      const timeout = setTimeout(() => {
        setSearchQuery(typingText.slice(0, searchQuery.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (searchQuery.length === typingText.length) {
      setTimeout(() => setIsTyping(false), 1000);
    }
  }, [searchQuery, isTyping]);

  const speedClarityControl = [
    {
      icon: Zap,
      title: "Plug & Play Integration",
      description:
        "Connect your systems in minutes,\n without data preparation\nor rebuilding.",
    },
    {
      icon: Database,
      title: "Process Clarity",
      description: "See the operational reality of how\nprocesses actually run.",
    },
    {
      icon: TrendingUp,
      title: "Actionable Insight",
      description: "Focus on what matters and act \nwith confidence.",
    },
  ];

  const dataProblems = [
    {
      title: "Data Governance",
      description: "Automated compliance and policy enforcement",
    },
    {
      title: "Data Lineage",
      description: "Track data flow from source to destination",
    },
    {
      title: "Data Ontology",
      description: "Intelligent semantic understanding of your data",
    },
    {
      title: "Data Catalogue",
      description: "Auto-discovery and organization of data assets",
    },
    {
      title: "Data Quality",
      description: "Continuous monitoring and validation",
    },
    {
      title: "AI-Ready Data",
      description: "Automatic preparation for AI and analytics",
    },
  ];

  const useCases = [
    {
      icon: TrendingUp,
      title: "Finance",
      benefit: "Streamline approval workflows and reduce processing time",
      description:
        "Improve end-to-end O2C efficiency with automated order validation, invoicing, and payment reconciliation",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Package,
      title: "Supply Chain",
      benefit: "Gain end-to-end visibility and optimize inventory flow",
      description: "Speed up order fulfillment and boost customer satisfaction",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      benefit: "Eliminate production bottlenecks and reduce downtime",
      description: "Eliminate production bottlenecks and reduce downtime",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      benefit: "Improve patient flow and reduce wait times",
      description: "Improve patient flow, management and reduce wait times",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <VStack bgColor="white" gap={0}>
      {/* Hero Section */}
      <Box
        w="full"
        minH="screen"
        bgAttachment="fixed"
        bgImage={`url(${heroBg})`}
        bgSize="cover"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <VStack
          gap={8}
          pt={16}
          px={{ base: 4, md: 16 }}
          alignItems="start"
          w="100%"
        >
          <VStack gap={4} w="100%" alignItems="start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Heading size="4xl" color="white" fontWeight="medium" whiteSpace="pre-line">
                <Highlight
                  query={"complexity"}
                  styles={{ fontWeight: "bold"}}
                >
                  {"Process Intelligence\nwithout the complexity."}
                </Highlight>
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Text fontSize="xl" color="white" opacity={0.75}>
                Built for real-world operations, Tessely integrates seamlessly
                with your systems. Uncover how work actually runs — no data
                modeling, event logs, or re-engineering required.
              </Text>
            </motion.div>
          </VStack>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Group>
              <Link to="/login">
                <Button variant="solid" size="xl">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="white" size="xl">
                  Try Out Our Demo
                </Button>
              </Link>
            </Group>
          </motion.div>
        </VStack>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Image src={datamap} w="full" alt="Datamap" />
        </motion.div>
      </Box>
      {/* Speed, Clarity, Control Section */}
      <Box width="100%" p={12}>
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Built for Speed, Clarity, and Control
            </Text>
            <Text color="gray.600" maxW="2xl" mx="auto">
              Process intelligence without the complexity, from integration to
              action.
            </Text>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speedClarityControl.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-100 transition-all group"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #003f72, #99b2c7)",
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
       
                  <Text fontSize="lg" color="gray.900" mb={4} fontWeight="bold">
                  {feature.title}
                  </Text>
                  <Text color={"brand.primary"} whiteSpace="pre-line">
                    {feature.description}
                  </Text>

              </motion.div>
            ))}
          </div>
        </div>
      </Box>
      {/* From Chaos to Clarity - Video Section */}

      <Box p={12} width={"100%"}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
           <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              From Chaos to Clarity
            </Text>
            <Text color="gray.600" maxW="2xl" mx="auto" whiteSpace="pre-line">
              {"Watch how Tessely transforms complex processes into clear,\nactionable insights in minutes."}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden max-w-5xl mx-auto group cursor-pointer hover:shadow-2xl transition-all"
            style={{
              background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              >
                <Play
                  className="w-10 h-10 ml-1"
                  style={{ color: "#003f72" }}
                  fill="#003f72"
                />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)",
              }}
            />
          </motion.div>
        </div>
      </Box>

      {/* Eliminate Data Management Overhead */}
      <Box p={12} width={"100%"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Eliminate Data Management Overhead
            </Text>
            <Text color="gray.600" maxW="5xl" mx="auto" whiteSpace="pre-line">
            {"We handle data complexity so you don't have to. Tessely provides the data capabilities required for process intelligence,\nwithout separate data platforms or long preparation cycles."}
            </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#003f72]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform"
                  style={{ backgroundColor: "#003f72" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <Text color="gray.900" mb={1}>
                  {problem.title}
                  </Text>
                  <Text fontSize="sm"color={"gray.600"}>
                    {problem.description}
                  </Text>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Box>
      {/* Use Cases */}
      <Box p={12} width={"100%"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Use Cases
            </Text>
            <Text color="gray.600" maxW="5xl" mx="auto" whiteSpace="pre-line">
            Solutions That Work Across Every Industry
            </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/use-case/${useCase.title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col cursor-pointer">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#5ECFC0" }}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                 <Text fontSize="lg" color="gray.900" mb={4} fontWeight="bold">
                  {useCase.title}
                  </Text>
                  <Text color={"brand.primary"} mb={4}>
                    {useCase.description}
                  </Text>
                <Text color={"brand.primary"} gap={1} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    Learn More
                  <ArrowRight className="w-4 h-4" />
                  </Text>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </Box>
      {/* Expert Guidance Section */}
      <Box width={"100%"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Box p={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
               Expert Guidance, When You Need It
            </Text>
            <Text color="gray.600" maxW="5xl" mx="auto" whiteSpace="pre-line">
            Tessely is designed to be intuitive and self-serve. For teams
            integrating process intelligence for the first time, we also offer
            consultation to accelerate adoption.
            </Text>
          
          </Box>
          
        </motion.div>
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
      </Box>
    </VStack>
  );
}
