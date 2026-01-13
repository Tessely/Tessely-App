import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TesselyLogo from '../assets/icons/TesselyLogo.svg?react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Icon,
  VStack,
} from '@chakra-ui/react';
import {
  Database,
  FileStack,
  User,
  LogOut,
  Home
} from 'lucide-react';
import { logout } from '../api/auth';


// Navigation link component
interface NavLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

function NavLink({ to, icon, label, isActive }: NavLinkProps) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        gap={2}
        px={3}
        py={2}
        borderRadius="lg"
        fontSize="sm"
        fontWeight={isActive ? 'medium' : 'normal'}
        color={isActive ? '#0047AB' : 'gray.600'}
        bg={isActive ? 'blue.50' : 'transparent'}
        transition="all 0.2s"
        _hover={{
          color: isActive ? '#0047AB' : 'gray.900',
          bg: isActive ? 'blue.50' : 'gray.50',
        }}
      > 
        <Icon as={icon} boxSize={4} />
        {label}
      </Flex>
    </Link>
  );
}

export function AuthNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [user, setUser] = useState<{ full_name: string; email: string } | null>({
    full_name: 'Unknown User',
    email: 'unknown@example.com',
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('@user_data');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showAccountMenu && !target.closest('[data-account-menu]')) {
        setShowAccountMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAccountMenu]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={50}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      transition="all 0.3s"
      shadow={isScrolled ? 'sm' : 'none'}
    >
      <Box w="full" px={6} py={4}>
        <Flex align="center" justify="space-between">
          {/* Left side: Logo and Navigation Tabs */}
          <HStack gap={8}>
            {/* Logo */}
            <TesselyLogo/>

            {/* Navigation Tabs */}
            <HStack gap={2}>
              <NavLink
                to="/main-dashboard"
                icon={Home}
                label="Dashboard"
                isActive={location.pathname === '/main-dashboard'}
              />
              <NavLink
                to="/processes"
                icon={FileStack}
                label="Processes"
                isActive={location.pathname === '/processes'}
              />
              <NavLink
                to="/data-sources"
                icon={Database}
                label="Data Sources"
                isActive={location.pathname === '/data-sources'}
              />
            </HStack>
          </HStack>

          {/* Right side: Profile Icon */}
          <Box position="relative" data-account-menu>
            <Flex
              as="button"
              p={2}
              borderRadius="lg"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ bg: 'gray.100' }}
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <Icon as={User} boxSize={5} color="gray.600" />
            </Flex>

            {/* Account Menu Dropdown */}
            {showAccountMenu && (
              <Box
                position="absolute"
                right={0}
                top={12}
                bg="white"
                borderRadius="lg"
                shadow="lg"
                border="1px solid"
                borderColor="gray.200"
                zIndex={50}
                minW="200px"
                overflow="hidden"
              >
                {/* User Info */}
                <Box p={4} borderBottom="1px solid" borderColor="gray.100">
                  <HStack gap={3}>
                    <Flex
                      w={12}
                      h={12}
                      borderRadius="full"
                      bgGradient="linear(to-br, #0047AB, #00D9B5)"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={User} boxSize={6} color="white" />
                    </Flex>
                    <VStack align="flex-start" gap={0} flex={1} minW={0}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.900"
                        lineClamp={1}
                      >
                        {user?.full_name || 'User'}
                      </Text>
                      <Text fontSize="xs" color="gray.500" lineClamp={1}>
                        {user?.email || 'user@example.com'}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>

                {/* Logout Button */}
                <Box p={2}>
                  <Flex
                    as="button"
                    w="full"
                    align="center"
                    gap={3}
                    px={3}
                    py={2}
                    fontSize="sm"
                    color="red.600"
                    borderRadius="lg"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ bg: 'red.50' }}
                    onClick={handleLogout}
                  >
                    <Icon as={LogOut} boxSize={4} />
                    <Text>Log out</Text>
                  </Flex>
                </Box>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
