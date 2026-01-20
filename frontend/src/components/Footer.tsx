import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Input } from './ui/input';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Link,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import TesselyLogo from '../assets/icons/TesselyLogo.svg';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock newsletter signup
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <Box
      as="footer"
      bgGradient="to-b"
      gradientFrom="white"
      gradientTo="gray.50"
      borderTopWidth={1}
      borderTopColor="gray.100"
    >
      <Box width="full" px={{ base: 4, sm: 6, lg: 8 }} py={12}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8} mb={8}>
          {/* Brand */}
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src={TesselyLogo} alt="Tessely Logo" style={{ width: '2rem', height: '2rem' }} />
              <Text fontSize="lg" fontWeight="bold" color="#003F72">
                Tessely
              </Text>
            </RouterLink>
            <Text fontSize="sm" color="gray.600" mb={4}>
              Making AI Simple for Everyone.
            </Text>
            <HStack gap={4}>
              <IconButton variant="surface" rounded="full" as="a" href="#" aria-label="LinkedIn" >
                <FaLinkedinIn></FaLinkedinIn>
              </IconButton>
              <IconButton variant="surface" rounded="full" as="a" href="#" aria-label="LinkedIn" >
                <FaTwitter></FaTwitter>
              </IconButton>
      
            </HStack>
          </GridItem>

          {/* Quick Links */}
          <VStack align="start" gap={2}>
            <Text fontWeight="500" color="gray.900" mb={2}>
              Quick Links
            </Text>
            <RouterLink to="/how-it-works" style={{ textDecoration: 'none' }}>
              <Text as="span" fontSize="sm" color="gray.600" _hover={{ color: '#003F72' }} cursor="pointer">
                How It Works
              </Text>
            </RouterLink>
            <RouterLink to="/solutions" style={{ textDecoration: 'none' }}>
              <Text as="span" fontSize="sm" color="gray.600" _hover={{ color: '#003F72' }} cursor="pointer">
                Solutions
              </Text>
            </RouterLink>
            <RouterLink to="/about" style={{ textDecoration: 'none' }}>
              <Text as="span" fontSize="sm" color="gray.600" _hover={{ color: '#003F72' }} cursor="pointer">
                About
              </Text>
            </RouterLink>
            <RouterLink to="/careers" style={{ textDecoration: 'none' }}>
              <Text as="span" fontSize="sm" color="gray.600" _hover={{ color: '#003F72' }} cursor="pointer">
                Careers
              </Text>
            </RouterLink>
            <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
              <Text as="span" fontSize="sm" color="gray.600" _hover={{ color: '#003F72' }} cursor="pointer">
                Contact Us
              </Text>
            </RouterLink>
          </VStack>

          {/* Newsletter */}
          <VStack align="start" gap={2}>
            <Text fontWeight="500" color="gray.900" mb={2}>
              Stay Updated
            </Text>
            <VStack alignItems="start" as="form" onSubmit={handleNewsletterSubmit} w="full" gap={2}>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="solid"
                size="sm"
              >
                Subscribe
              </Button>
            </VStack>
          </VStack>
        </Grid>

        {/* Bottom Bar */}
        <Box borderTopWidth={1} borderTopColor="gray.200" pt={8} mb={8} />
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="gray.500">
            © 2025 Tessely. All rights reserved.
          </Text>
          <HStack gap={6}>
            <Link href="#" fontSize="sm" color="gray.500" _hover={{ color: '#003F72' }}>
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm" color="gray.500" _hover={{ color: '#003F72' }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
