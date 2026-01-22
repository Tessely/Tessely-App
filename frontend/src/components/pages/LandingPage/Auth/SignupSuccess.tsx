import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Check } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  List,
} from '@chakra-ui/react';

export function SignupSuccess() {
  return (
    <Box
      minH="100vh"
      bgGradient="to-br"
      gradientFrom="white"
      gradientVia="blue.50/30"
      gradientTo="emerald.50/30"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={12}
      px={{ base: 4, sm: 6, lg: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '32rem', width: '100%' }}
      >
        {/* Success Card */}
        <Box
          maxW="2xl"
          mx="auto"
          bg="white"
          borderRadius="2xl"
          shadow="xl"
          borderWidth="1px"
          borderColor="gray.100"
          p={{ base: 8, md: 12 }}
          textAlign="center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Box mb={6}>
              <Box
                w={20}
                h={20}
                mx="auto"
                borderRadius="full"
                backgroundImage={"linear-gradient(to bottom, #003F72, #C6EBE7)"}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon asChild boxSize={12} color="white">
                  <CheckCircle />
                </Icon>
              </Box>
            </Box>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Heading size="lg" style={{fontWeight: 'bold'}} color="gray.900" mb={3}>
              Account Created Successfully!
            </Heading>
            <Text color="gray.600" mb={8}>
              Welcome to Tessely! Your account is ready and your 14-day free trial has started.
            </Text>
          </motion.div>

          {/* Email Verification Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Box w="100%" mx="auto" mb={8}>
              <Box
                borderWidth="1px"
                borderRadius="xl"
                p={4}
                bg="#F0FAF9"
              >
                <HStack alignItems="flex-start" gap={3}>
                  <Icon asChild boxSize={5} color="brand.primary" flexShrink={0} mt={0.5}>
                    <Mail />
                  </Icon>
                  <Box textAlign="left">
                    <Text fontSize="sm" color="gray.700" mb={1}>
                      We've sent a verification email to your inbox.
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Please verify your email to unlock all features.
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Box mb={8} textAlign="left">
              <Heading size="md" color="gray.900">
                What's next?
              </Heading>
              <List.Root gap={2}  p={0}>
                <List.Item display="flex" alignItems="flex-start" gap={2}>
                  <Icon asChild boxSize={5} color="#00D9B5" flexShrink={0} mt={0.5}>
                    <Check />
                  </Icon>
                  <Text fontSize="sm" color="gray.600">Connect your data sources</Text>
                </List.Item>
                <List.Item display="flex" alignItems="flex-start" gap={2}>
                  <Icon asChild boxSize={5} color="#00D9B5" flexShrink={0} mt={0.5}>
                    <Check />
                  </Icon>
                  <Text fontSize="sm" color="gray.600">Explore AI-powered insights on your dashboard</Text>
                </List.Item>
                <List.Item display="flex" alignItems="flex-start" gap={2}>
                  <Icon asChild boxSize={5} color="#00D9B5" flexShrink={0} mt={0.5}>
                    <Check />
                  </Icon>
                  <Text fontSize="sm" color="gray.600">Start optimizing your processes immediately</Text>
                </List.Item>
              </List.Root>
            </Box>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <VStack gap={4}>
              <Link to="/dashboard" style={{ width: '100%' }}>
                <Button w="full" size="lg" variant="solid">
                  Take Me to My Dashboard
                </Button>
              </Link>
              <Link to="/">
                <Text fontSize="sm" color="gray.600" _hover={{ color: 'brand.primary' }} transition="colors 0.2s">
                  Return to home page
                </Text>
              </Link>
            </VStack>
          </motion.div>
        </Box>

        {/* Need Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Box mt={6} textAlign="center">
            <Text fontSize="sm" color="gray.600">
              Need help getting started?{' '}
              <Link to="/contact">
                <Text as="span" color="brand.primary" _hover={{ color: 'brand.second_blue' }}>
                  Contact our team
                </Text>
              </Link>
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}
