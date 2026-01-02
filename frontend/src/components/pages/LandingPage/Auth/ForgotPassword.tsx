import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { forgetPassword } from '../../../../api/auth';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await forgetPassword(email);
    setIsSubmitted(true);
  };

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
                ? "Check your email for reset instructions"
                : "Enter your email and we'll send you a reset link"
              }
            </p>
          </div>

          {/* Reset Form or Success Message */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@company.com"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0047AB] to-[#00D9B5] text-white hover:opacity-90 py-6"
                >
                  Send Reset Link
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Back to Login */}
                <div className="text-center">
                  <Link to="/login" className="text-sm text-[#0047AB] hover:underline inline-flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                  </Link>
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
                  <h3 className="text-gray-900">Check Your Email</h3>
                  <p className="text-gray-600 text-sm">
                    We've sent a password reset link to <span className="text-[#0047AB]">{email}</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5"
                  >
                    Resend Email
                  </Button>
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
