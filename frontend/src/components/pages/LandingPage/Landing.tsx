import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Zap, Database, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Landing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typingText = 'Do I have bottlenecks in my process?';

  useEffect(() => {
    if (isTyping && searchQuery.length < typingText.length) {
      const timeout = setTimeout(() => {
        setSearchQuery(typingText.slice(0, searchQuery.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (searchQuery.length === typingText.length) {
      setTimeout(() => setIsTyping(false), 1000);
    }
  }, [searchQuery, isTyping]);

  const features = [
    {
      icon: Zap,
      title: 'Plug & Play Integration',
      description: 'Connect your systems in minutes, not months.',
    },
    {
      icon: Database,
      title: 'No Data Prep',
      description: 'AI handles the complexity automatically.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Insights',
      description: 'See what\'s happening in your process right now.',
    },
  ];

  const dataProblems = [
    {
      title: 'Data Governance',
      description: 'Automated compliance and policy enforcement',
    },
    {
      title: 'Data Lineage',
      description: 'Track data flow from source to destination',
    },
    {
      title: 'Data Ontology',
      description: 'Intelligent semantic understanding of your data',
    },
    {
      title: 'Data Catalogue',
      description: 'Auto-discovery and organization of data assets',
    },
    {
      title: 'Data Quality',
      description: 'Continuous monitoring and validation',
    },
    {
      title: 'AI-Ready Data',
      description: 'Automatic preparation for AI and analytics',
    },
  ];

  const workflowSteps = [
    { number: '1', label: 'Connect', description: 'Link your data sources' },
    { number: '2', label: 'Map', description: 'AI maps your processes' },
    { number: '3', label: 'Analyze', description: 'Get instant insights' },
    { number: '4', label: 'Act', description: 'Optimize with confidence' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-gray-900 mb-6">
              AI That Understands Your Business — No Training Needed.
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tessely turns your data into insights instantly — no setup, no code.
            </p>

            {/* Animated Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  readOnly
                  className="w-full px-6 py-4 rounded-full border-2 border-[#0047AB]/20 bg-white shadow-lg text-gray-700 pr-12"
                  placeholder="Ask anything about your process..."
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#0047AB] to-[#00D9B5] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                {isTyping && (
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="absolute right-16 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#0047AB]"
                  />
                )}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/pricing">
                <Button className="bg-[#0047AB] hover:bg-[#003380] text-white px-8 py-6">
                  Try Free
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5 px-8 py-6">
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-emerald-50/50 transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-[#0047AB]" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Problems We Solve Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-4">
                Eliminate 80% of Data Pain Points
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We tackle the biggest data challenges wholesale, automating away the complexity that holds your business back. From governance to AI-readiness, Tessely uplifts your organization instantly.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dataProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#0047AB]/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{problem.title}</h3>
                    <p className="text-gray-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-[#0047AB]/5 to-[#00D9B5]/5 rounded-2xl p-8 border border-gray-100"
          >
            <p className="text-gray-900 mb-2">
              <span className="text-3xl text-[#0047AB]">80%</span> reduction in data preparation effort
            </p>
            <p className="text-gray-600 text-sm">
              Our AI-powered automation handles what used to take months of manual work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From connection to action in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0047AB] to-[#00D9B5] text-white flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-gray-900 mb-2">{step.label}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#00D9B5]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to see your process clearly?
          </h2>
          <Link to="/pricing">
            <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
              Start Free Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}