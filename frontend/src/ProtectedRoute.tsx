import { Navigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      // For web, use localStorage
      const token = localStorage.getItem('@auth_token');
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  // Loading state while checking authentication
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  );
};

export default ProtectedRoute;