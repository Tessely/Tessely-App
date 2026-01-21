import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Text, Link } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

import TesselyLogo from "../assets/icons/TesselyLogo.svg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src={TesselyLogo} alt="Tessely Logo" className="w-8 h-8" />
            <Text fontWeight="medium" color="brand.primary">
              Tessely.ai
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isCurrent = window.location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isCurrent ? "page" : undefined}
                  display="flex"
                  alignItems="center"
                  fontWeight="semi-bold"
                  rounded="xl"
                  _currentPage={{
                    color: "brand.primary",
                    fontWeight: "medium",
                  }}
                  _hover={{color: "brand.primary" }}
                  transition="all 0.2s"
                  truncate
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="solid">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isCurrent = window.location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    aria-current={isCurrent ? "page" : undefined}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    p={2}
                    fontWeight="normal"
                    rounded="xl"
                    _currentPage={{
                      color: "brand.primary",
                      fontWeight: "semi-bold",
                    }}
                    _hover={{ bg: "brand.selected", color: "brand.primary" }}
                    transition="all 0.2s"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="solid" width={"full"}>
                  Log In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" width={"full"}>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
