import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './components/pages/Landing';
import { HowItWorks } from './components/pages/HowItWorks';
import { Solutions } from './components/pages/Solutions';
import { About } from './components/pages/About';
import { Careers } from './components/pages/Careers';
import { Contact } from './components/pages/Contact';
import { Pricing } from './components/pages/Pricing';
import { Dashboard } from './components/pages/Dashboard';
import { Login } from './components/pages/Login';
import { ForgotPassword } from './components/pages/ForgotPassword';
import { UseCase } from './components/pages/UseCase';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/forgot-password';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/use-case/:industry" element={<UseCase />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}