import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
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
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={TesselyLogo} alt="Tessely Logo" className="w-8 h-8" />
              <span className="text-[#003F72]">Tessely</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Making AI Simple for Everyone.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#003F72] hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#003F72] hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4" style={{fontWeight: '500'}}>Quick Links</h3>
            <div className="space-y-2">
              <div>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-[#003F72] transition-colors">
                  How It Works
                </Link>
              </div>
              <div>
                <Link to="/solutions" className="text-sm text-gray-600 hover:text-[#003F72] transition-colors">
                  Solutions
                </Link>
              </div>
              <div>
                <Link to="/about" className="text-sm text-gray-600 hover:text-[#003F72] transition-colors">
                  About
                </Link>
              </div>
              <div>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-[#003F72] transition-colors">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 mb-4" style={{fontWeight: '500'}}>Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-sm"
              />
              <Button
                type="submit"
                className="w-full bg-[#003F72] hover:bg-[#003380] text-white text-sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Tessely. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#003F72] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#003F72] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
