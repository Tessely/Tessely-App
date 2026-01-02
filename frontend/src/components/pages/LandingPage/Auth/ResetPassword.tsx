import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { resetPassword } from '../../../../api/auth';

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    const type = params.get('type');

    if (token && type === 'recovery') {
      setAccessToken(token);
      localStorage.setItem('@reset_token', token);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) {
      alert("No reset token found. Please request to forget password again.");
      return;
    }
    try {
      const result = await resetPassword(newPassword, accessToken)
      localStorage.removeItem('@reset_token');
      alert("Password has been reset successfully!")
      setIsSubmitted(true);
    } catch (error) {
      alert("Error resetting password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center">
                <span className="text-white text-xl">T</span>
              </div>
              <span className="text-2xl text-[#0047AB]">Tessely</span>
            </Link>
            <h1 className="text-gray-900 mb-2">Reset Your Password</h1>
            <p className="text-gray-600">
              {isSubmitted
                ? "Password has been reset successfully!"
                : "Enter your new password."
              }
            </p>
          </div>

          {/* Reset Form or Success Message */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <label htmlFor="newPassword" className="block text-sm text-gray-700 mb-2">
                    New Password
                  </label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="New Password"
                    className="pl-10 w-full mb-4"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0047AB] to-[#00D9B5] text-white hover:opacity-90 py-6"
                  >
                    Reset Password
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                {/* Success Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#0047AB]" />
                </div>

                {/* Success Message */}
                <div className="text-center space-y-3">
                  <h3 className="text-gray-900">Password Reset Successfully</h3>
                  <p className="text-gray-600 text-sm">
                    We've successfully reset your password. Please login with your new password.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link to="/login" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Additional Help */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Need help?{' '}
              <Link to="/contact" className="text-[#0047AB] hover:underline">
                Contact support
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-4">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
