import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Database, GitBranch, Brain, BarChart3, Upload, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function HowItWorks() {
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    {
      icon: Database,
      number: '1',
      title: 'Connect Data',
      description: 'Link your existing systems, databases, or upload files. No data cleaning required.',
      details: 'Support for SQL, CSV, Excel, ERP systems, and more.',
    },
    {
      icon: GitBranch,
      number: '2',
      title: 'Automated Mapping',
      description: 'Our AI automatically discovers and maps your business processes.',
      details: 'Machine learning identifies patterns, relationships, and workflows.',
    },
    {
      icon: Brain,
      number: '3',
      title: 'AI Insight Layer',
      description: 'Advanced algorithms detect bottlenecks, anomalies, and optimization opportunities.',
      details: 'Real-time analysis with predictive capabilities.',
    },
    {
      icon: BarChart3,
      number: '4',
      title: 'Impact Dashboard',
      description: 'Visualize insights through interactive dashboards and get actionable recommendations.',
      details: 'Custom reports, alerts, and continuous monitoring.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6">
              From Raw Data to Real-Time Intelligence.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Tessely transforms complex data into clear, actionable insights through intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four-Step Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center text-white">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#0047AB] flex items-center justify-center text-[#0047AB]">
                      {step.number}
                    </div>
                  </div>
                  <h2 className="text-gray-900 mb-3">{step.title}</h2>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 h-64 flex items-center justify-center border border-gray-100">
                    <step.icon className="w-32 h-32 text-[#0047AB]/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">See It In Action</h2>
            <p className="text-gray-600">
              Upload sample data and preview how Tessely maps your process
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 text-center">
              {!showPreview ? (
                <div>
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center">
                    <Upload className="w-12 h-12 text-[#0047AB]" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Upload Sample Data</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Drop a CSV or Excel file to see instant process mapping
                  </p>
                  <Button
                    onClick={() => setShowPreview(true)}
                    className="bg-[#0047AB] hover:bg-[#003380] text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Try Sample Dataset
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <span className="text-sm text-emerald-800">Sample_Orders.csv uploaded</span>
                    <span className="text-sm text-emerald-600">✓ Processed</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#0047AB] mx-auto mb-2" />
                      <p className="text-xs text-gray-600 text-center">Order Created</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#00D9B5] mx-auto mb-2" />
                      <p className="text-xs text-gray-600 text-center">Processing</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#0047AB] mx-auto mb-2" />
                      <p className="text-xs text-gray-600 text-center">Completed</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">✓ 3 process steps identified</p>
                    <p className="mb-2">✓ 1 bottleneck detected in Processing phase</p>
                    <p>✓ Estimated 23% efficiency improvement available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">From Chaos to Clarity</h2>
            <p className="text-gray-600">
              Watch how Tessely transforms complex data into actionable insights
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-[#0047AB] ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
