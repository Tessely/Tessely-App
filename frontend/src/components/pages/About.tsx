import { Button } from '../ui/button';
import { Target, Eye, Lightbulb, Users, Heart, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useRef } from 'react';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries to make complex technology accessible to everyone.',
    },
    {
      icon: Heart,
      title: 'Simplicity',
      description: 'We believe powerful tools should be easy to use, not complicated.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We grow together.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at leading SaaS company',
    },
    {
      name: 'Marcus Williams',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher with 10+ years in machine learning',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader passionate about user experience',
    },
    {
      name: 'James Park',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring customer outcomes',
    },
    {
      name: 'Priya Sharma',
      role: 'VP of Engineering',
      bio: 'Scaling teams and systems with 15+ years experience',
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Sales',
      bio: 'Building strategic partnerships across industries',
    },
    {
      name: 'Maria Garcia',
      role: 'Lead Data Scientist',
      bio: 'PhD in ML, specializing in process mining algorithms',
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      bio: 'Creating intuitive experiences for complex systems',
    },
    {
      name: 'Rachel Foster',
      role: 'VP of Marketing',
      bio: 'Growth expert with B2B SaaS background',
    },
    {
      name: 'Thomas Wright',
      role: 'Senior Solutions Architect',
      bio: 'Helping enterprises optimize their workflows',
    },
    {
      name: 'Nina Patel',
      role: 'Head of Research',
      bio: 'Advancing AI capabilities in process intelligence',
    },
    {
      name: 'Chris Anderson',
      role: 'VP of Operations',
      bio: 'Streamlining internal processes and systems',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
      
      setTimeout(checkScroll, 300);
    }
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
              Empowering Every Business to Be AI-Ready.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're on a mission to democratize process intelligence and make AI accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#00D9B5] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Make process mining accessible to all businesses, regardless of size or technical expertise. We believe every organization deserves the power to understand and optimize their operations through AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9B5] to-[#0047AB] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Turn data into clarity and efficiency for every business. We envision a world where process optimization is intuitive, automated, and available to everyone at the click of a button.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#0047AB]" />
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Scroll */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 mb-2">
              Passionate experts dedicated to your success
            </p>
            <p className="text-sm text-gray-500">
              Growing to 10+ team members by June 2026
            </p>
          </div>

          <div className="relative">
            {/* Scroll Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-[#0047AB]" />
              </button>
            )}
            
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-[#0047AB]" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-2 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center group flex-shrink-0 w-64"
                >
                  <div className="mb-4 relative">
                    <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 overflow-hidden">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${1500000000000 + index * 100000}?auto=format&fit=crop&w=400&h=400`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-8 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-5 h-5 text-[#0047AB]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#0047AB] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>

            {/* Gradient Overlays for Visual Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Mobile Hint */}
          <div className="text-center mt-6 text-sm text-gray-500 md:hidden">
            ← Swipe to see more team members →
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="space-y-6 text-gray-600">
              <p>
                Tessely was born from a simple observation: while process mining technology had incredible potential, it remained out of reach for most businesses due to complexity and cost.
              </p>
              <p>
                Our founders, Sarah and Marcus, spent years watching companies struggle with inefficient processes, unable to identify bottlenecks or optimize workflows. They knew AI could help, but existing solutions required data scientists, consultants, and months of implementation.
              </p>
              <p>
                In 2023, they decided to change that. Tessely was created to make process intelligence as simple as asking a question. No technical knowledge required. No data preparation needed. Just instant, actionable insights.
              </p>
              <p>
                Today, we're helping businesses across industries transform their operations with AI-powered process mining that truly works for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#00D9B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Want to Join Our Mission?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers">
              <Button className="bg-white text-[#0047AB] hover:bg-gray-100 px-8 py-6">
                View Open Positions
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
