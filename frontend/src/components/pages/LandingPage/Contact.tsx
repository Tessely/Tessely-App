import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Input,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import bannerbg from "/images/bannerbg.png?url";
import { Link } from 'react-router-dom';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              Let's Talk About Your Workflow.
            </Heading>
            <Text color="gray.600" maxW="2xl">
              Have questions? Want to see a demo? We're here to help.
            </Text>
          </VStack>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
        <Box p={12} width="100%">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Box
              bg="white"
              borderRadius="2xl"
              p={8}
              shadow="sm"
              mx="auto"
            >
              <Text color="gray.900" mb={6}>
                Send Us a Message
              </Text>
              <form onSubmit={handleSubmit}>
                <VStack gap={6} align="stretch">
                  <Box>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      Name *
                    </Text>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      w="full"
                    />
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      Email *
                    </Text>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      w="full"
                    />
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      Company
                    </Text>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      w="full"
                    />
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      Message *
                    </Text>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your needs..."
                      rows={6}
                      w="full"
                    />
                  </Box>

                  <Button
                    type="submit"
                    w="full" size="lg"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </motion.div>
        </Box>

      {/* Investor Relations Section */}
        <Box p={12} width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <VStack textAlign="center" mb={12}>
              <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
                Investor Relations
              </Text>
              <Text color="gray.600" maxW="2xl">
                Interested in partnering with us to transform the future of AI-powered process optimization?
              </Text>
            </VStack>
          </motion.div>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            <GridItem>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Box borderRadius="2xl" p={8} bg="#003F72" height="100%">
                  <Text color="white" mb={4} fontWeight="bold">
                    Investment Inquiries
                  </Text>
                  <Text color="white" fontSize="sm" mb={4}>
                    We're always open to conversations with strategic partners and investors who share our vision of democratizing AI-powered process intelligence.
                  </Text>
                  <HStack gap={2}>
                    <Mail className="w-4 h-4" style={{ color: '#5ECFC0' }} />
                    <a href="mailto:investors@tessely.ai" style={{ color: '#5ECFC0', fontSize: '0.875rem' }}>
                      investors@tessely.ai
                    </a>
                  </HStack>
                </Box>
              </motion.div>
            </GridItem>

            <GridItem>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Box borderRadius="2xl" p={8} bg="#003F72" height="100%">
                  <Text color="white" mb={4} fontWeight="bold">
                    Company Information
                  </Text>
                  <VStack gap={3} fontSize="sm" color="whiteAlpha.900" align="stretch">
                    <HStack>
                      <Text color="white">Founded:</Text>
                      <Text>2023</Text>
                    </HStack>
                    <HStack>
                      <Text color="white">Headquarters:</Text>
                      <Text>San Francisco, CA</Text>
                    </HStack>
                    <HStack>
                      <Text color="white">Stage:</Text>
                      <Text>Growth Stage</Text>
                    </HStack>
                    <HStack>
                      <Text color="white">Focus:</Text>
                      <Text>AI-Powered Process Mining</Text>
                    </HStack>
                  </VStack>
                </Box>
              </motion.div>
            </GridItem>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box
              mt={8}
              borderRadius="2xl"
              p={8}
              borderWidth="1px"
              borderColor="gray.100"
              bg="#E8F5F3"
            >
              <Text color="brand.primary" mb={6} fontWeight="bold">
                Why Invest in Tessely?
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
                <Box>
                  <Text fontSize="2xl" color="#5ECFC0" fontWeight="bold">
                    $50B+
                  </Text>
                  <Text color="gray.900" fontSize="sm">
                    Process mining market by 2030
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="2xl" color="#5ECFC0" fontWeight="bold">
                    80%
                  </Text>
                  <Text color="gray.900" fontSize="sm">
                    Reduction in data preparation time
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="2xl" color="#5ECFC0" fontWeight="bold">
                    24hrs
                  </Text>
                  <Text color="gray.900" fontSize="sm">
                    Average implementation time
                  </Text>
                </Box>
              </Grid>
            </Box>
          </motion.div>
        </Box>

      {/* Contact Information Section */}
        <Box p={12} width="100%">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VStack gap={6} align="stretch">
              <Box>
                <Text fontSize="xl" color="gray.900" mb={6} fontWeight="bold">
                  Get in Touch
                </Text>
                <Text color="gray.600">
                  Whether you're looking to optimize your processes or just want to learn more about what we do, we'd love to hear from you.
                </Text>
              </Box>

              {/* Contact Details */}
              <VStack gap={6} align="stretch">
                <HStack gap={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    bg="#F0FAF9"
                  >
                    <Mail color="#003F72" className="w-6 h-6 text-[#003F72]" />
                  </Box>
                  <Box>
                    <Text color="gray.900" mb={1} fontWeight="medium">
                      Email
                    </Text>
                    <a href="mailto:hello@tessely.ai" style={{ color: '#003F72' }}>
                      hello@tessely.ai
                    </a>
                  </Box>
                </HStack>

                <HStack gap={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    bg="#F0FAF9"
                  >
                    <Phone color="#003F72" className="w-6 h-6 text-[#003F72]" />
                  </Box>
                  <Box>
                    <Text color="gray.900" mb={1} fontWeight="medium">
                      Phone
                    </Text>
                    <Text color="gray.600">
                      <a href="tel:+1234567890">+1 (234) 567-8900</a>
                    </Text>
                  </Box>
                </HStack>

                <HStack gap={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    bg="#F0FAF9"
                  >
                    <MapPin color="#003F72" className="w-6 h-6 text-[#0047AB]" />
                  </Box>
                  <Box>
                    <Text color="gray.900" mb={1} fontWeight="medium">
                      Office
                    </Text>
                    <Text color="gray.600">
                      123 Innovation Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </Text>
                  </Box>
                </HStack>
              </VStack>

              {/* Map Visual */}
              <Box
                className="bg-gradient-to-br from-blue-50 to-emerald-50"
                borderRadius="2xl"
                h={64}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <MapPin className="w-16 h-16 text-[#0047AB]/30" />
              </Box>
            </VStack>
          </motion.div>
        </Box>

      {/* FAQ Section */}
      <Box p={12} className="bg-gradient-to-b">
        <Box>
          <VStack textAlign="center" mb={12}>
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              Quick Answers
            </Text>
            <Text color="gray.600">
              Common questions we receive
            </Text>
          </VStack>

          <VStack gap={4} align="stretch">
            {[
              {
                q: 'How long does implementation take?',
                a: 'Most customers are up and running within 24 hours. Our plug-and-play approach means no lengthy setup process.',
              },
              {
                q: 'Do I need technical expertise?',
                a: 'Not at all! Tessely is designed for business users. If you can ask a question, you can use Tessely.',
              },
              {
                q: 'What kind of support do you offer?',
                a: 'We provide email support, live chat, and dedicated customer success managers for enterprise customers.',
              },
              {
                q: 'Can I try before I buy?',
                a: 'Absolutely! We offer a free trial with no credit card required. See the full power of Tessely risk-free.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={6}
                  borderWidth="1px"
                  borderColor="gray.100"
                >
                  <Text color="gray.900" mb={2} fontWeight="medium">
                    {faq.q}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {faq.a}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </VStack>
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
        alignItems="start"
        p={16}
        textAlign="start"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ width: '100%' }}
        >
          <Text fontSize="xl" color="white" mb={4}>
            Prefer a Live Demo?
          </Text>
          <Text color="whiteAlpha.900" fontSize="sm" mb={6}>
            Schedule a personalized walkthrough with our team
          </Text>
          <Link to="/contact">
            <Button variant="white" size="lg" w="100%">
              Book a Demo
            </Button>
          </Link>
        </motion.div>
      </Box>
    </div>
  );
}
