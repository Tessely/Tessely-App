import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthNavBar } from './components/AuthNavBar';
import { Footer } from './components/Footer';

import { Landing } from './components/pages/LandingPage/Landing';
import { HowItWorks } from './components/pages/LandingPage/HowItWorks';
import { Solutions } from './components/pages/LandingPage/Solutions';
import { About } from './components/pages/LandingPage/About';
import { Careers } from './components/pages/LandingPage/Careers';
import { Contact } from './components/pages/LandingPage/Contact';
import { Dashboard } from './components/pages/LandingPage/Dashboard';
import { UseCase } from './components/pages/LandingPage/UseCase';

import { Pricing } from './components/pages/LandingPage/Auth/Pricing';
import { Login } from './components/pages/LandingPage/Auth/Login';
import { Signup } from './components/pages/LandingPage/Auth/SignUp';
import { SignupSuccess } from './components/pages/LandingPage/Auth/SignupSuccess';
import { ForgotPassword } from './components/pages/LandingPage/Auth/ForgotPassword';
import { ResetPassword } from './components/pages/LandingPage/Auth/ResetPassword';

import DataSources from './components/pages/Auth_Pages/DataSources';
import ProtectedRoute from './ProtectedRoute';
import { MainDashboard } from './components/pages/Auth_Pages/MainDashboard';
import { Processes } from './components/pages/Auth_Pages/Processes';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "./theme"

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === '/login' ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/main-dashboard' ||
    location.pathname === '/processes' ||
    location.pathname === '/data-sources';
  const AuthNav =
    location.pathname === '/main-dashboard'||
    location.pathname === '/processes' ||
    location.pathname === '/data-sources';

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
          <Route path="/use-case/:industry" element={<UseCase />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/main-dashboard" element={
            <ProtectedRoute>
              <AuthNavBar />
            <ChakraProvider value={system}>
              <MainDashboard />
            </ChakraProvider>
            </ProtectedRoute>
          } />
          <Route path="/data-sources" element={
            <ProtectedRoute>
             <ChakraProvider value={system}><DataSources /></ChakraProvider>
            </ProtectedRoute>
            } />
          <Route path="/data-sources" element={
            <ProtectedRoute>
              <AuthNavBar />
              < DataSources/>
            </ProtectedRoute>
          } />
          <Route path="/processes" element={
            <ProtectedRoute>
              <AuthNavBar />
              <Processes />
            </ProtectedRoute>
          } />
          
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
