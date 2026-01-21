import { Target, Eye, Lightbulb, Users, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
} from '@chakra-ui/react';
import bannerbg from "/images/bannerbg.png?url";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries to make complex technology accessible to everyone.',
    },
    {
      icon: Heart,
      title: 'Simplicity',
      description: 'We believe powerful tools should be easy to use, not complicated.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We grow together.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at leading SaaS company',
    },
    {
      name: 'Marcus Williams',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher with 10+ years in machine learning',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader passionate about user experience',
    },
    {
      name: 'James Park',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring customer outcomes',
    },
    {
      name: 'Priya Sharma',
      role: 'VP of Engineering',
      bio: 'Scaling teams and systems with 15+ years experience',
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Sales',
      bio: 'Building strategic partnerships across industries',
    },
    {
      name: 'Maria Garcia',
      role: 'Lead Data Scientist',
      bio: 'PhD in ML, specializing in process mining algorithms',
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      bio: 'Creating intuitive experiences for complex systems',
    },
    {
      name: 'Rachel Foster',
      role: 'VP of Marketing',
      bio: 'Growth expert with B2B SaaS background',
    },
    {
      name: 'Thomas Wright',
      role: 'Senior Solutions Architect',
      bio: 'Helping enterprises optimize their workflows',
    },
    {
      name: 'Nina Patel',
      role: 'Head of Research',
      bio: 'Advancing AI capabilities in process intelligence',
    },
    {
      name: 'Chris Anderson',
      role: 'VP of Operations',
      bio: 'Streamlining internal processes and systems',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
      
      setTimeout(checkScroll, 300);
    }
  };

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
            textAlign="center"
          >
            <Heading
              size="2xl"
              color="black"
              fontWeight="black"
              whiteSpace="pre-line"
            >
              Empowering Every Business to Be AI-Ready.
            </Heading>
            <Text color="gray.600" maxW="2xl">
              We're on a mission to democratize process intelligence and make AI accessible to businesses of all sizes.
            </Text>
          </VStack>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <Box p={12} bg="white" width={"100%"}>
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
              <Box
                bgColor={"#F0FAF9"}

                borderRadius="2xl"
                p={8}
                borderWidth="1px"
                borderColor="#F3F4F6"
              >
                <Box
                  w={16}
                  h={16}
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                  bg="linear-gradient(to bottom, #003F72, #C6EBE7)"
                >
                  <Target className="w-8 h-8 text-white" />
                </Box>
                <Text color="gray.900" mb={4}>
                  Our Mission
                </Text>
                <Text color="gray.600">
                  Make process mining accessible to all businesses, regardless of size or technical expertise. We believe every organization deserves the power to understand and optimize their operations through AI.
                </Text>
              </Box>
            </motion.div>
          </GridItem>

          <GridItem>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Box
                bgColor={"#F0FAF9"}

                borderRadius="2xl"
                p={8}
                borderWidth="1px"
                borderColor="#F3F4F6"
              >
                <Box
                  w={16}
                  h={16}
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                  bg="linear-gradient(to bottom, #003F72, #C6EBE7)"
                >
                  <Eye className="w-8 h-8 text-white" />
                </Box>
                <Text color="gray.900" mb={4}>
                  Our Vision
                </Text>
                <Text color="gray.600">
                  Turn data into clarity and efficiency for every business. We envision a world where process optimization is intuitive, automated, and available to everyone at the click of a button.
                </Text>
              </Box>
            </motion.div>
          </GridItem>
        </Grid>
      </Box>

      {/* Values Grid */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <Box p={12} width="100%">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Our Values
            </Text>
            <Text color="gray.600">
              The principles that guide everything we do
            </Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={8}
                  borderWidth="1px"
                  borderColor="gray.100"
                  _hover={{ shadow: "lg" }}
                  transition="all 0.2s"
                >
                  <Box
                    w={16}
                    h={16}
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={6}
                    bg="#F0FAF9"
                  >
                    <value.icon color="#003F72" className="w-8 h-8" />
                  </Box>
                  <Text color="gray.900" mb={3}>
                    {value.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {value.description}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </div>
        </Box>
      </section>

      {/* Team Section with Scroll */}
      <Box p={12} bg="white">
        <Box px={{ base: 4, sm: 6, lg: 8 }}>
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Meet the Team
            </Text>
            <Text color="gray.600" mb={4}>
              Passionate experts dedicated to your success
            </Text>
            <Text fontSize="sm" color="gray.500">
              Growing to 10+ team members by June 2026
            </Text>
          </VStack>

          <Box position="relative">
            {/* Scroll Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer border-none hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-[#0047AB]" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer border-none hover:bg-gray-50 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-[#0047AB]" />
              </button>
            )}

            {/* Scrollable Container */}
            <HStack
              ref={scrollContainerRef}
              onScroll={checkScroll}
              gap={8}
              overflowX="auto"
              pb={4}
              px={2}
              css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  style={{ flexShrink: 0, width: '16rem' }}
                >
                  <VStack textAlign="center">
                    <Box mb={4}>
                      <Box
                        w={48}
                        h={48}
                        mx="auto"
                        borderRadius="2xl"
                        overflow="hidden"
                        bg="#5ECFC0"
                      >
                        <ImageWithFallback
                          src={`https://images.unsplash.com/photo-${1500000000000 + index * 100000}?auto=format&fit=crop&w=400&h=400`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </Box>
                    </Box>
                    <Text color="gray.900" fontWeight="medium" mb={1}>
                      {member.name}
                    </Text>
                    <Text color="brand.primary" fontSize="sm" mb={2}>
                      {member.role}
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      {member.bio}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </HStack>

            {/* Gradient Overlays for Visual Effect */}
            <Box
              position="absolute"
              left={0}
              top={0}
              bottom={0}
              w={8}
              bgGradient="to-r"
              gradientFrom="white"
              gradientTo="transparent"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              w={8}
              bgGradient="to-l"
              gradientFrom="white"
              gradientTo="transparent"
              pointerEvents="none"
            />
          </Box>

          {/* Mobile Hint */}
          <Text
            textAlign="center"
            mt={6}
            fontSize="sm"
            color="gray.500"
            display={{ base: "block", md: "none" }}
          >
            Swipe to see more team members
          </Text>
        </Box>
      </Box>

      {/* Story Section */}
      <Box p={12} className="bg-gradient-to-b">
        <Box px={{ base: 4, sm: 6, lg: 8 }}>
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" fontWeight="bold">
              Our Story
            </Text>
          </VStack>
          <Box
            bg="white"
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            borderWidth="1px"
            borderColor="gray.100"
            shadow="sm"
          >
            <VStack gap={6} color="brand.second_blue" align="stretch">
              <Text>
                Tessely was born from a simple observation: while process mining technology had incredible potential, it remained out of reach for most businesses due to complexity and cost.
              </Text>
              <Text>
                Our founders, Sarah and Marcus, spent years watching companies struggle with inefficient processes, unable to identify bottlenecks or optimize workflows. They knew AI could help, but existing solutions required data scientists, consultants, and months of implementation.
              </Text>
              <Text>
                In 2023, they decided to change that. Tessely was created to make process intelligence as simple as asking a question. No technical knowledge required. No data preparation needed. Just instant, actionable insights.
              </Text>
              <Text>
                Today, we're helping businesses across industries transform their operations with AI-powered process mining that truly works for everyone.
              </Text>
            </VStack>
          </Box>
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
          <Text fontSize="xl" color="white" mb={4}>
            Ready to Get Started?
          </Text>
          <Group gap={4}>
            <Link to="/solutions">
              <Button variant={"white"} size="lg">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={"white"} size="lg">
                Free Trial
              </Button>
            </Link>
          </Group>
        </motion.div>
      </Box>
    </div>
  );
}
