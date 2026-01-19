import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Factory, DollarSign, Heart, ShoppingCart, Truck, ArrowRight, TrendingUp, Check, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Solutions() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What happens after my free trial ends?',
      answer: 'After your 14-day free trial ends, you can choose to upgrade to a paid plan or continue with limited features. Your data will be preserved for 30 days.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
    },
    {
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and follow industry best practices to keep your data safe and secure.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    }
  ];

  const solutions = [
    {
      icon: Factory,
      title: 'Manufacturing',
      benefit: 'Eliminate production bottlenecks and reduce downtime',
      description: 'Optimize assembly lines, track quality metrics, and improve resource allocation.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Finance',
      benefit: 'Streamline approval workflows and reduce processing time',
      description: 'Accelerate loan approvals, detect fraud patterns, and optimize compliance.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      benefit: 'Improve patient flow and reduce wait times',
      description: 'Optimize appointment scheduling, track patient journeys, and enhance care delivery.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      benefit: 'Speed up order fulfillment and boost customer satisfaction',
      description: 'Optimize checkout processes, reduce cart abandonment, and streamline returns.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Truck,
      title: 'Logistics',
      benefit: 'Optimize delivery routes and reduce operational costs',
      description: 'Track shipments in real-time, identify delays, and improve warehouse efficiency.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const metrics = [
    { value: '+30%', label: 'Efficiency Improvement', icon: TrendingUp },
    { value: '-45%', label: 'Process Time Reduction', icon: TrendingUp },
    { value: '+25%', label: 'Cost Savings', icon: TrendingUp },
    { value: '99%', label: 'Customer Satisfaction', icon: TrendingUp },
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
            <h1 className="text-gray-900 mb-6" style={{fontWeight: 'bold'}}>
              Solutions That Work Across Every Industry.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored process intelligence for your specific business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#5ECFC0' }}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-[#0047AB] text-sm mb-4">{solution.benefit}</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{solution.description}</p>
                  <Link to={`/use-case/${solution.title.toLowerCase()}`}>
                    <button className="text-[#0047AB] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      See Use Case
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Carousel */}
      <section className="py-20 bg-gradient-to-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4" style={{ fontWeight: 'bold' }}>Proven Results</h2>
            <p className="text-gray-600">
              Real outcomes from businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onViewportEnter={() => setActiveMetric(index)}
                className={`text-center p-6 rounded-2xl transition-all cursor-pointer ${
                  activeMetric === index
                    ? 'bg-gradient-to-br from-[#0047AB] to-[#00D9B5] text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-100 text-gray-900'
                }`}
                style={{ background: (activeMetric === index) ? 'linear-gradient(to bottom, #003F72, #C6EBE7)':'white' }}
              >
                <metric.icon className={`w-8 h-8 mx-auto mb-3 ${activeMetric === index ? 'text-white' : 'text-[#0047AB]'}`} />
                <div className="text-3xl mb-2">{metric.value}</div>
                <p className={`text-sm ${activeMetric === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {metrics.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMetric(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeMetric === index ? 'bg-[#0047AB] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gray-900 mb-4">
                  Built for Your Industry
                </h2>
                <p className="text-gray-600 mb-6">
                  Every industry has unique challenges. Tessely adapts to your specific needs with pre-built templates and custom workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{backgroundColor: '#003F72'}}>✓</div>
                    Industry-specific KPIs and metrics
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{backgroundColor: '#003F72'}}>✓</div>
                    Compliance and regulatory support
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{backgroundColor: '#003F72'}}>✓</div>
                    Pre-configured integration templates
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{backgroundColor: '#003F72'}}>✓</div>
                    Expert support and best practices
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  {['Process Templates', 'Custom Dashboards', 'Integration Hub', 'Analytics Engine'].map((feature, index) => (
                    <div key={feature} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg" >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: 'linear-gradient(to bottom, #003F72, #C6EBE7)' }}>
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4" style={{ fontWeight: 'bold' }}>Choose Your Plan</h2>
            <p className="text-gray-600">
              Start free and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Trial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-gray-900 mb-2">Free Trial</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl text-gray-900">$0</span>
                  <span className="text-sm text-gray-600">/ 14 days</span>
                </div>
                <p className="text-sm text-gray-600">No credit card required</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Up to 1,000 processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">AI-powered insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Basic dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Email support</span>
                  </li>
                </ul>
                <Link to="/pricing">
                  <Button className="w-full border border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5" variant="outline">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border-2 hadow-xl scale-105 overflow-hidden relative"
              style={{borderColor: '#5ECFC0 '}}
            >

              <div className="p-8 bg-gradient-to-br text-white" style={{backgroundColor: '#5ECFC0 '}}>
                <h3 className="mb-2">Professional</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl">Coming Soon</span>
                </div>
                <p className="text-sm text-white/80">For growing teams</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Unlimited processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Custom dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Link to="/pricing">
                  <Button className="w-full bg-gradient-to-r text-white hover:opacity-90" style={{backgroundColor: '#5ECFC0 '}}>
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-gray-900 mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl text-gray-900">Custom</span>
                </div>
                <p className="text-sm text-gray-600">Tailored to your needs</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">SLA guarantees</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full border border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5" variant="outline">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Still Unsure Button */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still not sure which plan is right for you?</p>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Plans Include Section */}
      <section className="pt-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4" style={{ fontWeight: 'bold' }}>All Plans Include</h2>
            <p className="text-gray-600">Core features available to everyone</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'AI-Powered Insights',
              'Process Mapping',
              'Real-Time Dashboards',
              'Data Security',
              'Cloud Storage',
              'Mobile Access',
              'Export Reports',
              'Regular Updates'
            ].map((feature) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <Check className="w-6 h-6 mx-auto mb-3" style={{ color: '#003F72' }} />
                <p className="text-gray-900 text-sm font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4" style={{ fontWeight: 'bold' }}>Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about pricing</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 px-8 py-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-gray-900 font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-20 rounded-2xl" style={{ background: 'radial-gradient(circle at center, #003F72 0%, #bdebe6 100%)', marginBottom: '20px' }}>
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              Ready to see your process clearly?
            </h2>
            <Link to="/pricing">
              <Button className="px-8 py-6 hover:opacity-90 transition-opacity" style={{ backgroundColor: 'white', color: '#003F72' }}>
                Start Free Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}