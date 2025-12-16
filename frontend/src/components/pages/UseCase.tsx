import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Factory, DollarSign, Heart, ShoppingCart, Truck, CheckCircle, TrendingUp, Clock, DollarSign as Cost, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function UseCase() {
  const { industry } = useParams<{ industry: string }>();

  const useCases: Record<string, any> = {
    manufacturing: {
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Optimize Production & Eliminate Bottlenecks',
      color: 'from-blue-500 to-blue-600',
      challenge: 'Manufacturing operations face complex challenges with multiple production lines, quality control checkpoints, and resource allocation issues that lead to costly downtime and inefficiencies.',
      solution: 'Tessely automatically maps your entire production process, identifying bottlenecks in real-time and providing actionable insights to optimize throughput and reduce waste.',
      benefits: [
        { label: 'Reduce Downtime', value: '40%', icon: Clock },
        { label: 'Increase Efficiency', value: '35%', icon: TrendingUp },
        { label: 'Cost Savings', value: '$2.5M', icon: Cost },
        { label: 'Quality Improvement', value: '28%', icon: CheckCircle },
      ],
      features: [
        'Real-time production line monitoring',
        'Automated bottleneck detection',
        'Quality control process mapping',
        'Resource allocation optimization',
        'Predictive maintenance insights',
        'Compliance tracking and reporting',
      ],
      processSteps: [
        { name: 'Material Intake', efficiency: 92 },
        { name: 'Assembly Line A', efficiency: 68 },
        { name: 'Quality Check', efficiency: 85 },
        { name: 'Assembly Line B', efficiency: 78 },
        { name: 'Final Inspection', efficiency: 90 },
        { name: 'Packaging', efficiency: 88 },
      ],
      testimonial: {
        quote: 'Tessely helped us identify a critical bottleneck in our assembly process that was costing us $50,000 per week. Within 2 weeks of implementation, we increased our output by 35%.',
        author: 'Michael Chen',
        role: 'VP of Operations',
        company: 'TechManufacture Inc.',
      },
    },
    finance: {
      icon: DollarSign,
      title: 'Finance',
      subtitle: 'Streamline Approvals & Accelerate Processing',
      color: 'from-emerald-500 to-emerald-600',
      challenge: 'Financial institutions struggle with lengthy approval processes, compliance requirements, and manual verification steps that slow down customer service and increase operational costs.',
      solution: 'Tessely maps your entire financial workflow, from application to approval, highlighting delays and suggesting automation opportunities to speed up processing while maintaining compliance.',
      benefits: [
        { label: 'Faster Approvals', value: '65%', icon: Clock },
        { label: 'Process Efficiency', value: '48%', icon: TrendingUp },
        { label: 'Cost Reduction', value: '$1.8M', icon: Cost },
        { label: 'Compliance Score', value: '99%', icon: CheckCircle },
      ],
      features: [
        'Loan approval process mapping',
        'Fraud detection pattern analysis',
        'Compliance workflow tracking',
        'Customer journey optimization',
        'Risk assessment automation',
        'Cross-department collaboration insights',
      ],
      processSteps: [
        { name: 'Application Submit', efficiency: 95 },
        { name: 'Document Verify', efficiency: 72 },
        { name: 'Credit Check', efficiency: 88 },
        { name: 'Risk Assessment', efficiency: 65 },
        { name: 'Manager Approval', efficiency: 58 },
        { name: 'Final Processing', efficiency: 92 },
      ],
      testimonial: {
        quote: 'We reduced our loan approval time from 5 days to 2 days. Tessely showed us exactly where applications were getting stuck and how to streamline our verification process.',
        author: 'Sarah Williams',
        role: 'Chief Operating Officer',
        company: 'Regional Credit Union',
      },
    },
    healthcare: {
      icon: Heart,
      title: 'Healthcare',
      subtitle: 'Improve Patient Flow & Reduce Wait Times',
      color: 'from-red-500 to-red-600',
      challenge: 'Healthcare facilities face challenges with patient scheduling, treatment delays, and resource allocation that impact patient satisfaction and care quality.',
      solution: 'Tessely tracks patient journeys from check-in to discharge, identifying delays and optimizing resource allocation to improve patient flow and care delivery.',
      benefits: [
        { label: 'Reduced Wait Time', value: '45%', icon: Clock },
        { label: 'Patient Satisfaction', value: '38%', icon: TrendingUp },
        { label: 'Cost Savings', value: '$3.2M', icon: Cost },
        { label: 'Care Quality', value: '32%', icon: CheckCircle },
      ],
      features: [
        'Patient flow optimization',
        'Appointment scheduling analysis',
        'Resource utilization tracking',
        'Treatment protocol mapping',
        'Emergency response time monitoring',
        'Staff allocation optimization',
      ],
      processSteps: [
        { name: 'Check-In', efficiency: 88 },
        { name: 'Triage', efficiency: 92 },
        { name: 'Consultation', efficiency: 75 },
        { name: 'Diagnosis', efficiency: 82 },
        { name: 'Treatment', efficiency: 68 },
        { name: 'Discharge', efficiency: 85 },
      ],
      testimonial: {
        quote: 'Patient wait times dropped by 45% after implementing Tessely. We can now see our entire patient flow in real-time and make adjustments on the fly.',
        author: 'Dr. James Martinez',
        role: 'Medical Director',
        company: 'City General Hospital',
      },
    },
    ecommerce: {
      icon: ShoppingCart,
      title: 'E-commerce',
      subtitle: 'Accelerate Fulfillment & Boost Satisfaction',
      color: 'from-purple-500 to-purple-600',
      challenge: 'E-commerce businesses face high cart abandonment rates, slow order processing, and inefficient return workflows that impact customer satisfaction and revenue.',
      solution: 'Tessely analyzes your entire customer journey from browsing to delivery, identifying friction points and optimization opportunities to increase conversions and reduce fulfillment time.',
      benefits: [
        { label: 'Faster Fulfillment', value: '52%', icon: Clock },
        { label: 'Cart Conversion', value: '28%', icon: TrendingUp },
        { label: 'Revenue Increase', value: '$4.1M', icon: Cost },
        { label: 'Customer Retention', value: '41%', icon: CheckCircle },
      ],
      features: [
        'Checkout process optimization',
        'Cart abandonment analysis',
        'Order fulfillment tracking',
        'Return process mapping',
        'Inventory management insights',
        'Customer behavior analytics',
      ],
      processSteps: [
        { name: 'Product Browse', efficiency: 92 },
        { name: 'Add to Cart', efficiency: 75 },
        { name: 'Checkout', efficiency: 68 },
        { name: 'Payment', efficiency: 88 },
        { name: 'Fulfillment', efficiency: 72 },
        { name: 'Delivery', efficiency: 85 },
      ],
      testimonial: {
        quote: 'Tessely revealed that our checkout process had 3 unnecessary steps. After streamlining, our conversion rate increased by 28% and cart abandonment dropped significantly.',
        author: 'Emma Thompson',
        role: 'Director of Operations',
        company: 'StyleHub Online',
      },
    },
    logistics: {
      icon: Truck,
      title: 'Logistics',
      subtitle: 'Optimize Routes & Reduce Operational Costs',
      color: 'from-orange-500 to-orange-600',
      challenge: 'Logistics companies struggle with route optimization, warehouse inefficiencies, and delivery delays that increase costs and reduce customer satisfaction.',
      solution: 'Tessely maps your entire supply chain from warehouse to delivery, identifying delays and suggesting route optimizations to reduce costs and improve on-time delivery rates.',
      benefits: [
        { label: 'Faster Delivery', value: '38%', icon: Clock },
        { label: 'Route Efficiency', value: '42%', icon: TrendingUp },
        { label: 'Cost Reduction', value: '$2.8M', icon: Cost },
        { label: 'On-Time Rate', value: '95%', icon: CheckCircle },
      ],
      features: [
        'Route optimization analysis',
        'Warehouse workflow mapping',
        'Delivery tracking and monitoring',
        'Fleet utilization insights',
        'Last-mile delivery optimization',
        'Supply chain visibility',
      ],
      processSteps: [
        { name: 'Order Receipt', efficiency: 95 },
        { name: 'Warehouse Pick', efficiency: 78 },
        { name: 'Package Sort', efficiency: 72 },
        { name: 'Route Planning', efficiency: 68 },
        { name: 'In Transit', efficiency: 85 },
        { name: 'Delivery', efficiency: 88 },
      ],
      testimonial: {
        quote: 'We cut our delivery times by 38% and reduced fuel costs by $2.8M annually. Tessely showed us inefficiencies in our routing that we never would have caught manually.',
        author: 'David Park',
        role: 'Logistics Director',
        company: 'FastShip Delivery',
      },
    },
  };

  const currentCase = useCases[industry || 'manufacturing'];

  if (!currentCase) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-gray-900 mb-4">Use Case Not Found</h1>
        <Link to="/solutions">
          <Button className="bg-[#0047AB] hover:bg-[#003380] text-white">
            Back to Solutions
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${currentCase.color} py-20 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <currentCase.icon className="w-8 h-8 text-white" />
                </div>
                <Link to="/solutions" className="text-sm text-white/80 hover:text-white">
                  ← Back to Solutions
                </Link>
              </div>
              <h1 className="text-white mb-4">{currentCase.title}</h1>
              <p className="text-xl text-white/90 mb-6">
                {currentCase.subtitle}
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {currentCase.benefits.map((benefit: any, index: number) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur rounded-xl p-4 text-center"
                  >
                    <benefit.icon className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="text-2xl text-white mb-1">{benefit.value}</div>
                    <p className="text-sm text-white/80">{benefit.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-600">{currentCase.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-4">The Tessely Solution</h2>
              <p className="text-gray-600">{currentCase.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Process Efficiency Analysis</h2>
            <p className="text-gray-600">
              See how Tessely identifies optimization opportunities
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentCase.processSteps}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="efficiency" radius={[8, 8, 0, 0]}>
                  {currentCase.processSteps.map((entry: any, index: number) => (
                    <rect
                      key={`cell-${index}`}
                      fill={entry.efficiency > 80 ? '#00D9B5' : entry.efficiency > 70 ? '#FFA500' : '#FF6B6B'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#00D9B5]" />
                <span className="text-gray-600">Optimal (&gt;80%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#FFA500]" />
                <span className="text-gray-600">Needs Attention (70-80%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#FF6B6B]" />
                <span className="text-gray-600">Critical (&lt;70%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Key Features for {currentCase.title}</h2>
            <p className="text-gray-600">
              Industry-specific capabilities designed for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCase.features.map((feature: string, index: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 border border-gray-100 shadow-lg"
          >
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentCase.color} mx-auto mb-6 flex items-center justify-center`}>
                <currentCase.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl text-gray-700 italic mb-6">
                &ldquo;{currentCase.testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-gray-900">{currentCase.testimonial.author}</p>
                <p className="text-sm text-gray-600">{currentCase.testimonial.role}</p>
                <p className="text-sm text-[#0047AB]">{currentCase.testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your {currentCase.title} Operations?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how Tessely can optimize your processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}