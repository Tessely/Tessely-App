import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  X,
  House,
  List,
  Database,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../api/auth";
import {
  CloseButton,
  Drawer,
  VStack,
  Menu,
  Popover,
  Portal,
  Button,
  Avatar,
  AvatarGroup,
  Box,
  HStack,
  Link,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState<{ full_name: string; email: string } | null>(
    {
      full_name: "Unknown User",
      email: "unknown@example.com",
    }
  );
  const variant = useBreakpointValue({ base: 'mobile', md: 'desktop' });

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("@user_data");
    if (userData) {
      setUser(JSON.parse(userData));
      console.log("User data loaded:", JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", path: "/main-dashboard", icon: House },
    { name: "Processes", path: "/processes", icon: List },
    { name: "Data Sources", path: "/data-sources", icon: Database },
  ];

  const loadNavLinks = () => {
      return navLinks.map((link) => {
        const Icon = link.icon;
        const isCurrent = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            href={link.path}
            aria-current={isCurrent ? "page" : undefined}
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            rounded="xl"
            _currentPage={{ color: "brand.primary", bg: "brand.selected" }}
            _hover={{ bg: "brand.selected", color: "brand.primary" }}
            transition="all 0.2s"
          >
            {Icon && <Icon size={16} />}
            <Text>{link.name}</Text>
          </Link>
        );
      });
    };
    
  const mobileNav=()=>{
    return (
      <Drawer.Root
            placement="bottom"
            size="xs"
            open={isMobileMenuOpen}
            onOpenChange={(e) => setIsMobileMenuOpen(e.open)}
          >
            <Drawer.Trigger asChild>
              <IconButton
                variant={"plain"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <MenuIcon />}
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content pb={10}>
                  <Drawer.Header>
                    <Drawer.Title>Navigation</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    {loadNavLinks()}
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
    );
  }

  const desktopNav=()=>{
    return (
      <HStack>
            {loadNavLinks()}
      </HStack>
    );
  }
  
  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <HStack px={4} className="flex h-16 items-center justify-between">
        {/* Left side*/}
        <div className="flex items-center ml-4 gap-8">
          <img
            src="/images/Logo.png"
            alt="Tessely"
            style={{ height: "38px", width: "auto" }}
          />
          {variant === 'mobile' ? mobileNav() : desktopNav()}
        </div>
        {/* Right side*/}
        <div>
          <Menu.Root>
            <Menu.Trigger cursor="pointer" asChild>
              <Box>
                <Avatar.Root variant="outline">
                  <Avatar.Fallback name={user?.full_name || "User"} />
                  <Avatar.Image />
                </Avatar.Root>
              </Box>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <VStack
                    p={2}
                    align="end"
                    borderBottom="1px solid"
                    borderColor="brand.border"
                    mb={2}
                  >
                    <Text>{user?.full_name}</Text>
                    <Text>{user?.email}</Text>
                  </VStack>
                  <Menu.Item
                    cursor="pointer"
                    value="account-settings"
                    onSelect={() => navigate("/")}
                  >
                    Account Settings
                  </Menu.Item>
                  <Menu.Item
                    cursor="pointer"
                    value="logout"
                    color="brand.error"
                    onSelect={handleLogout}
                  >
                    Log Out
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </div>
      </HStack>
    </nav>
  );
}
