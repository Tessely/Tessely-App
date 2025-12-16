import { Button } from '../ui/button';
import { Briefcase, MapPin, Clock, Heart, Book, Globe, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Careers() {
  const openRoles = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI/ML',
      location: 'Remote / New York',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / London',
      type: 'Full-time',
    },
    {
      title: 'Solutions Architect',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Berlin',
      type: 'Full-time',
    },
  ];

  const perks = [
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours',
    },
    {
      icon: Book,
      title: 'Learning Budget',
      description: '$2000 annual budget for courses and conferences',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness stipend',
    },
    {
      icon: Briefcase,
      title: 'Equity Package',
      description: 'Competitive equity in a fast-growing company',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Senior Engineer',
      quote: 'Best team I\'ve ever worked with. We\'re solving real problems that make a difference.',
    },
    {
      name: 'Maya Patel',
      role: 'Product Manager',
      quote: 'The culture of innovation and collaboration here is unmatched. Every voice matters.',
    },
    {
      name: 'Jordan Lee',
      role: 'Data Scientist',
      quote: 'I learn something new every day. The growth opportunities are incredible.',
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
              Build the Future of Process Intelligence.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join a team redefining how businesses understand data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">
              Find your next opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    {role.department}
                  </span>
                </div>
                <h3 className="text-gray-900 mb-4">{role.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {role.type}
                  </div>
                </div>
                <Button className="w-full bg-[#0047AB] hover:bg-[#003380] text-white">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5 px-8 py-6">
              View All Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-gray-600">
              Hear from the people who make Tessely great
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <Quote className="w-10 h-10 text-[#00D9B5] mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Perks & Benefits</h2>
            <p className="text-gray-600">
              We invest in our team's growth and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center">
                  <perk.icon className="w-8 h-8 text-[#0047AB]" />
                </div>
                <h3 className="text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-gray-900 mb-4">Our Culture</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're building more than a product — we're building a team that values curiosity, collaboration, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Innovation First', 'Remote-Friendly', 'Inclusive & Diverse'].map((value, index) => (
                <div key={value} className="bg-white rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0047AB] to-[#00D9B5] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
            Send Open Application
          </Button>
        </div>
      </section>
    </div>
  );
}
