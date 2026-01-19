import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { CheckCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function SignupSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        {/* Success Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-gray-900 mb-3">Account Created Successfully!</h1>
            <p className="text-gray-600 mb-8">
              Welcome to Tessely! Your account is ready and your 14-day free trial has started.
            </p>
          </motion.div>

          {/* Email Verification Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-1/2 mx-auto mb-8"
          >
            <div
              className="bg-blue-50/50 border rounded-xl p-4"
              style={{backgroundColor: '#CCEDEA'}}
            >
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0047AB] flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm text-gray-700 mb-1">
                    We've sent a verification email to your inbox.
                  </p>
                  <p className="text-xs text-gray-600">
                    Please verify your email to unlock all features.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-left"
          >
            <h3 className="text-gray-900 mb-3">What's next?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect your data sources</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Explore AI-powered insights on your dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Start optimizing your processes immediately</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/dashboard">
              <Button className="w-full bg-[#0047AB] hover:bg-[#003380] text-white py-6 mb-4">
                Take Me to My Dashboard
              </Button>
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-[#0047AB] transition-colors">
              Return to home page
            </Link>
          </motion.div>
        </div>

        {/* Need Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-600">
            Need help getting started?{' '}
            <Link to="/contact" className="text-[#0047AB] hover:text-[#003380]">
              Contact our team
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
