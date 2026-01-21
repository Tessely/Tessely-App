import { Briefcase, MapPin, Clock, Heart, Book, Globe, Quote } from 'lucide-react';
import { motion } from 'motion/react';
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

export function Careers() {
  const openRoles = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI/ML',
      location: 'Remote / New York',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / London',
      type: 'Full-time',
    },
    {
      title: 'Solutions Architect',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Berlin',
      type: 'Full-time',
    },
  ];

  const perks = [
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours',
    },
    {
      icon: Book,
      title: 'Learning Budget',
      description: '$2000 annual budget for courses and conferences',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness stipend',
    },
    {
      icon: Briefcase,
      title: 'Equity Package',
      description: 'Competitive equity in a fast-growing company',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Senior Engineer',
      quote: 'Best team I\'ve ever worked with. We\'re solving real problems that make a difference.',
    },
    {
      name: 'Maya Patel',
      role: 'Product Manager',
      quote: 'The culture of innovation and collaboration here is unmatched. Every voice matters.',
    },
    {
      name: 'Jordan Lee',
      role: 'Data Scientist',
      quote: 'I learn something new every day. The growth opportunities are incredible.',
    },
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
            textAlign="center"
          >
            <Heading
              size="2xl"
              color="black"
              fontWeight="black"
              whiteSpace="pre-line"
            >
              Build the Future of Process Intelligence.
            </Heading>
            <Text color="gray.600" maxW="2xl">
              Join a team redefining how businesses understand data
            </Text>
          </VStack>
        </motion.div>
      </section>

      {/* Open Roles */}
        <Box p={12} width="100%">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Open Positions
            </Text>
            <Text color="gray.600">
              Find your next opportunity
            </Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={6}
                  borderWidth="1px"
                  borderColor="gray.100"
                  _hover={{ shadow: "lg" }}
                  transition="all 0.2s"
                >
                  <HStack justify="space-between" mb={4} align="start">
                    <Box
                      w={12}
                      h={12}
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#F0FAF9"
                    >
                      <Briefcase className="w-6 h-6 text-[#0047AB]" />
                    </Box>
                    <Text fontSize="xs" color="brand.teal_ocean" bgColor="#ECFDF5" className="text-xs px-3 py-1 rounded-full">
                      {role.department}
                    </Text>
                  </HStack>
                  <Text color="gray.900" mb={4}>
                    {role.title}
                  </Text>
                  <VStack gap={2} mb={6} align="stretch">
                    <HStack gap={2} fontSize="sm" color="gray.600">
                      <MapPin className="w-4 h-4" />
                      <Text>{role.location}</Text>
                    </HStack>
                    <HStack gap={2} fontSize="sm" color="gray.600">
                      <Clock className="w-4 h-4" />
                      <Text>{role.type}</Text>
                    </HStack>
                  </VStack>
                  <Button w="full" >
                    Apply Now
                  </Button>
                </Box>
              </motion.div>
            ))}
          </div>

          <VStack textAlign="center" mt={12}>
            <Button variant="outline" borderColor="brand.primary" color="brand.primary" px={8} py={6} _hover={{ opacity: 0.9 }}>
              View All Roles
            </Button>
          </VStack>
        </Box>

      {/* Testimonials */}
      <Box  p={12}  bg="#EEF9F8">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              What Our Team Says
            </Text>
            <Text color="gray.600">
              Hear from the people who make Tessely great
            </Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={8}
                  height="100%"
                  borderWidth="1px"
                  borderColor="gray.100"
                  shadow="sm"
                  display="flex"
                  flexDirection="column"
                >
                  <Quote className="w-10 h-10 text-[#00D9B5] mb-4" />
                  <Text color="gray.600" mb={6} fontStyle="italic" flex={1}>
                    "{testimonial.quote}"
                  </Text>
                  <Box>
                    <Text color="gray.900" fontWeight="medium">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </div>
      </Box>

      {/* Perks & Benefits */}
        <Box p={12} width="100%">
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Perks & Benefits
            </Text>
            <Text color="gray.600">
              We invest in our team's growth and well-being
            </Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VStack textAlign="center">
                  <Box
                    w={16}
                    h={16}
                    mx="auto"
                    mb={4}
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgColor="#F0FAF9"
                  >
                    <perk.icon color="#003F72" className="w-8 h-8" />
                  </Box>
                  <Text color="gray.900" mb={2} fontWeight="medium">
                    {perk.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" textWrap="balance">
                    {perk.description}
                  </Text>
                </VStack>
              </motion.div>
            ))}
          </div>
        </Box>

      {/* Culture Section */}
      <Box pb={20} p={12} mx="auto">
        <Box
          className="bg-gradient-to-br from-blue-50 to-emerald-50"
          borderRadius="3xl"
          p={12}
        >
          <VStack textAlign="center" mb={8}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Our Culture
            </Text>
            <Text color="gray.600" maxW="2xl">
              We're building more than a product — we're building a team that values curiosity, collaboration, and continuous learning.
            </Text>
          </VStack>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Innovation First', 'Remote-Friendly', 'Inclusive & Diverse'].map((value, index) => (
              <Box key={value} bg="white" borderRadius="xl" p={6} textAlign="center">
                <Box
                  w={12}
                  h={12}
                  mx="auto"
                  mb={3}
                  borderRadius="full"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="linear-gradient(to bottom, #003F72, #C6EBE7)"
                >
                  {index + 1}
                </Box>
                <Text color="gray.900">
                  {value}
                </Text>
              </Box>
            ))}
          </div>
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
