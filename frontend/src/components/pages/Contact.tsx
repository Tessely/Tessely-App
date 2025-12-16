import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Let's Talk About Your Workflow.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to see a demo? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your needs..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0047AB] hover:bg-[#003380] text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're looking to optimize your processes or just want to learn more about what we do, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@tessely.ai" className="text-[#0047AB] hover:underline">
                      hello@tessely.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Innovation Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Visual */}
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl h-64 flex items-center justify-center border border-gray-100">
                <MapPin className="w-16 h-16 text-[#0047AB]/30" />
              </div>

              {/* Book Demo CTA */}
              <div className="bg-gradient-to-br from-[#0047AB] to-[#00D9B5] rounded-2xl p-8 text-white">
                <h3 className="mb-3">Prefer a Live Demo?</h3>
                <p className="text-white/90 text-sm mb-6">
                  Schedule a personalized walkthrough with our team
                </p>
                <Button className="bg-white text-[#0047AB] hover:bg-gray-100 w-full py-6">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Quick Answers</h2>
            <p className="text-gray-600">
              Common questions we receive
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does implementation take?',
                a: 'Most customers are up and running within 24 hours. Our plug-and-play approach means no lengthy setup process.',
              },
              {
                q: 'Do I need technical expertise?',
                a: 'Not at all! Tessely is designed for business users. If you can ask a question, you can use Tessely.',
              },
              {
                q: 'What kind of support do you offer?',
                a: 'We provide email support, live chat, and dedicated customer success managers for enterprise customers.',
              },
              {
                q: 'Can I try before I buy?',
                a: 'Absolutely! We offer a free trial with no credit card required. See the full power of Tessely risk-free.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-gray-900 mb-4">Investor Relations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Interested in partnering with us to transform the future of AI-powered process optimization?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-gray-900 mb-4">Investment Inquiries</h3>
                <p className="text-gray-600 text-sm mb-6">
                  We're always open to conversations with strategic partners and investors who share our vision of democratizing AI-powered process intelligence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0047AB]" />
                    <a href="mailto:investors@tessely.ai" className="text-[#0047AB] hover:underline text-sm">
                      investors@tessely.ai
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <span className="text-gray-900 ml-2">2023</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Headquarters:</span>
                    <span className="text-gray-900 ml-2">San Francisco, CA</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Stage:</span>
                    <span className="text-gray-900 ml-2">Growth Stage</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Focus:</span>
                    <span className="text-gray-900 ml-2">AI-Powered Process Mining</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-[#0047AB]/5 to-[#00D9B5]/5 rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-gray-900 mb-4">Why Invest in Tessely?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl text-[#0047AB] mb-2">$50B+</div>
                  <p className="text-gray-600 text-sm">Process mining market by 2030</p>
                </div>
                <div>
                  <div className="text-2xl text-[#0047AB] mb-2">80%</div>
                  <p className="text-gray-600 text-sm">Reduction in data preparation time</p>
                </div>
                <div>
                  <div className="text-2xl text-[#0047AB] mb-2">24hrs</div>
                  <p className="text-gray-600 text-sm">Average implementation time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
