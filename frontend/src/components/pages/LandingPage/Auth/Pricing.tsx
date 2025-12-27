import { Link } from 'react-router-dom';
import { Button } from '../../..//ui/button';
import { Check, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../ui/accordion';

export function Pricing() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '14 days',
      description: 'Try all features with no credit card required',
      features: [
        { name: 'Up to 1,000 process instances', included: true },
        { name: 'Basic process mapping', included: true },
        { name: 'AI-powered insights', included: true },
        { name: 'Email support', included: true },
        { name: 'Real-time dashboards', included: true },
        { name: 'Advanced integrations', included: false },
        { name: 'Custom workflows', included: false },
        { name: 'Dedicated support', included: false },
      ],
      cta: 'Start Free Trial',
      ctaLink: '#',
      popular: false,
      gradient: 'from-gray-50 to-gray-100',
    },
    {
      name: 'Professional',
      price: 'Coming Soon',
      period: '',
      description: 'For growing teams that need more power',
      features: [
        { name: 'Unlimited process instances', included: true },
        { name: 'Advanced process mapping', included: true },
        { name: 'Predictive analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'SLA guarantees', included: false },
      ],
      cta: 'Join Waitlist',
      ctaLink: '#',
      popular: true,
      gradient: 'from-[#0047AB] to-[#00D9B5]',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For organizations with advanced needs',
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'Dedicated infrastructure', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated success manager', included: true },
        { name: 'SLA guarantees', included: true },
        { name: 'On-premise deployment', included: true },
        { name: 'White-label options', included: true },
        { name: 'Training & onboarding', included: true },
      ],
      cta: 'Book Demo',
      ctaLink: '/contact',
      popular: false,
      gradient: 'from-gray-50 to-gray-100',
    },
  ];

  const faqs = [
    {
      question: 'What happens after my free trial ends?',
      answer: 'Your free trial lasts 14 days with full access to all features. When it ends, you can choose to upgrade to a paid plan or your account will be paused. Your data is saved for 30 days.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! All our plans are month-to-month with no long-term contracts. You can cancel anytime from your account settings.',
    },
    {
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes, annual plans come with a 20% discount compared to monthly billing. Contact our sales team for details.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and can invoice enterprise customers.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, SOC 2 Type II compliance, and regular security audits to keep your data safe.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.',
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
              Start Free — Unlock the Power of Process Intelligence.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try Tessely risk-free. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl ${
                  plan.popular
                    ? 'border-2 border-[#0047AB] shadow-xl scale-105'
                    : 'border border-gray-100 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#00D9B5] text-white px-4 py-2 rounded-full text-sm">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 rounded-t-2xl bg-gradient-to-br ${plan.gradient} ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  <h3 className="mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl">{plan.price}</span>
                    {plan.period && <span className="text-sm opacity-80">/ {plan.period}</span>}
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="p-8">
                  <Link to={plan.ctaLink}>
                    <Button
                      className={`w-full mb-6 py-6 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#0047AB] to-[#00D9B5] text-white hover:opacity-90'
                          : 'border border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/5'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[#00D9B5] flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">All Plans Include</h2>
            <p className="text-gray-600">
              Core features available to everyone
            </p>
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
              'Regular Updates',
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 border border-gray-100 text-center"
              >
                <Check className="w-6 h-6 text-[#00D9B5] mx-auto mb-2" />
                <p className="text-sm text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about pricing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-100 rounded-xl px-6"
              >
                <AccordionTrigger className="text-gray-900 hover:text-[#0047AB]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to optimize your workflow?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}
