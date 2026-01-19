import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play, Database, Lightbulb, Shield, Package, Factory, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import LandingPageBackground from '../../../assets/icons/LandingPageBackground.svg';

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

  const speedClarityControl = [
    {
      icon: Database,
      title: 'Plug & Play Integration',
      description: 'Connect your systems in minutes, without data preparation or rebuilding.',
    },
    {
      icon: Lightbulb,
      title: 'Process Clarity',
      description: 'See the operational reality of how processes actually run.',
    },
    {
      icon: Shield,
      title: 'No-Code Access',
      description: 'Built for operations teams, accessible to everyone.',
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

  const useCases = [
    {
      icon: TrendingUp,
      title: 'Finance',
      benefit: 'Streamline approval workflows and reduce processing time',
      description: 'Improve end-to-end O2C efficiency with automated order validation, invoicing, & payment reconciliation.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Package,
      title: 'Supply Chain',
      benefit: 'Gain end-to-end visibility and optimize inventory flow',
      description: 'Speed up order fulfillment and boost customer satisfaction',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      benefit: 'Eliminate production bottlenecks and reduce downtime',
      description: 'Eliminate production bottlenecks and reduce downtime',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      benefit: 'Improve patient flow and reduce wait times',
      description: 'Improve patient flow, management and reduce wait times',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <img src={LandingPageBackground} alt="Background" className="w-full h-auto relative z-0" />
          <div style={{ paddingRight: '40px', paddingLeft: '40px'}}>
            <div
              className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12 relative z-10"
              style={{ marginTop: '-256px'}}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-gray-900 mb-4" style={{fontWeight: 'bold'}}>
                  Built for Speed, Clarity, and Control
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Process intelligence without the complexity, from integration to action.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {speedClarityControl.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(to bottom right, #003f72, #99b2c7)' }}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-3 " style={{fontWeight: 'bold'}}>{feature.title}</h3>
                    <p className="text-sm" style={{color: '#003F72'}}>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Chaos to Clarity - Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">
              From Chaos to Clarity
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how Tessely transforms complex processes into clear, actionable insights in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden max-w-5xl mx-auto group cursor-pointer hover:shadow-2xl transition-all"
            style={{ background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <Play className="w-10 h-10 ml-1" style={{ color: '#003f72' }} fill="#003f72" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* Eliminate Data Management Overhead */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">
              Eliminate Data Management Overhead
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We handle data complexity so you don't have to. Tessely provides the data capabilities required for process intelligence, without separate data platforms or long preparation cycles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dataProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#003f72]/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: '#003f72' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1" style={{fontWeight: '500'}}>{problem.title}</h3>
                    <p className="text-gray-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4" style={{fontWeight: 'bold'}}>
              Use Cases
            </h2>
            <p className="text-gray-600">
              Solutions That Work Across Every Industry 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#5ECFC0' }}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3" style={{fontWeight: 'bold'}}>{useCase.title}</h3>
                  <p className="text-[#003f72] text-sm mb-4" style={{ color: '#003f72' }}>{useCase.description}</p>
                  <Link to={`/use-case/${useCase.title.toLowerCase()}`}>
                    <button className="text-sm flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: '#003f72' }}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Guidance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-gray-900 mb-4" style={{fontWeight: 'bold'}}>
          Expert Guidance, When You Need It
        </h2>
        <p className="text-gray-600">
          Tessely is designed to be intuitive and self-serve. For teams integrating process intelligence for the first time, 
we also offer consultation to accelerate adoption.
        </p>
      </motion.div>
      <section className="max-w-7xl mx-auto py-20" style={{ background: 'linear-gradient(to bottom right, #003f72, #006ba8)' }}>
        <div className=" px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              Ready to see your process clearly?
            </h2>
            <Link to="/contact">
              <Button className="px-8 py-6 hover:opacity-90 transition-opacity" style={{ backgroundColor: 'white', color: '#003f72' }}>
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
