'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedElement from '@/components/ui/AnimatedElement';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import GradientText from '@/components/ui/GradientText';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const services = [
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning to minimize liabilities and maximize returns for businesses and individuals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Bookkeeping',
    description: 'Comprehensive bookkeeping services to keep your finances organized and compliant.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Audit Support',
    description: 'Expert guidance and support through internal and external audits.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "Working with this CPA firm has transformed our business's financial management. Their expertise in tax planning has saved us thousands.",
    author: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
  },
  {
    content: "The team's attention to detail and proactive approach to financial planning has been invaluable for our growing business.",
    author: "Michael Chen",
    role: "Founder, Growth Ventures",
  },
  {
    content: "Their audit support services gave us peace of mind during our recent external audit. Highly recommended!",
    author: "Emily Rodriguez",
    role: "CFO, Global Solutions",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <AnimatedBackground pattern="waves" color="#1E3A8A" className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedElement animation="fade-down" duration={0.7}>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <GradientText preset="primary" direction="diagonal">
                  Financial Clarity
                </GradientText>{' '}
                for Your Business and Future
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={0.2} duration={0.7}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Expert accounting services tailored to your needs. We help businesses and individuals navigate complex financial landscapes with confidence.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={0.4}>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <AnimatedButton href="/contact" variant="primary" hoverEffect="bounce">
                  Schedule Consultation
                </AnimatedButton>
                <AnimatedButton href="/services" variant="secondary" hoverEffect="scale">
                  Learn More <span aria-hidden="true">→</span>
                </AnimatedButton>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedBackground>

      {/* Services Section */}
      <AnimatedBackground pattern="dots" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement animation="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <GradientText preset="accent">
                  Comprehensive Financial Services
                </GradientText>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer a wide range of professional services to help you achieve your financial goals.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <AnimatedElement
                  key={service.title}
                  animation="fade-up"
                  delay={index * 0.2}
                >
                  <AnimatedCard
                    href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}
                    className="h-full"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <AnimatedIcon effect="morph" color="#1E3A8A" className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white">
                        {service.icon}
                      </AnimatedIcon>
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <span className="text-sm font-semibold leading-6 text-primary">
                          Learn more <span aria-hidden="true">→</span>
                        </span>
                      </p>
                    </dd>
                  </AnimatedCard>
                </AnimatedElement>
              ))}
            </dl>
          </div>
        </div>
      </AnimatedBackground>

      {/* Testimonials Section */}
      <AnimatedBackground pattern="grid" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement animation="fade-up">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <GradientText preset="rainbow">
                  Trusted by Businesses
                </GradientText>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                See what our clients have to say about working with us.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedElement
                  key={index}
                  animation="fade-up"
                  delay={index * 0.2}
                >
                  <AnimatedCard
                    hoverScale={1.03}
                    hoverRotate={1}
                  >
                    <blockquote className="text-gray-900">
                      <p className="text-lg leading-7">&ldquo;{testimonial.content}&rdquo;</p>
                    </blockquote>
                    <div className="mt-6 border-t border-gray-900/10 pt-6">
                      <div className="text-base font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="mt-1 text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </AnimatedCard>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
