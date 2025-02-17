'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Strategic tax planning to minimize liabilities and maximize returns.',
    features: [
      'Personal and business tax preparation',
      'Tax strategy development',
      'Quarterly tax planning',
      'IRS representation',
      'State and local tax compliance',
    ],
    price: 'Starting at $299/month',
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Comprehensive bookkeeping services to keep your finances organized.',
    features: [
      'Monthly financial statements',
      'Accounts payable/receivable',
      'Payroll processing',
      'Bank reconciliation',
      'Financial reporting',
    ],
    price: 'Starting at $199/month',
  },
  {
    id: 'audit-support',
    title: 'Audit Support',
    description: 'Expert guidance through internal and external audits.',
    features: [
      'Audit preparation',
      'Documentation review',
      'Representation during audits',
      'Post-audit analysis',
      'Compliance review',
    ],
    price: 'Custom pricing',
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory',
    description: 'Strategic financial guidance for business growth and success.',
    features: [
      'Business planning',
      'Cash flow management',
      'Investment strategy',
      'Risk assessment',
      'Growth planning',
    ],
    price: 'Starting at $399/month',
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Expert business advice to help you achieve your goals.',
    features: [
      'Business structure optimization',
      'Process improvement',
      'Strategic planning',
      'Market analysis',
      'Performance metrics',
    ],
    price: 'Custom pricing',
  },
];

const faqs = [
  {
    question: 'How often should I meet with my CPA?',
    answer: 'We recommend quarterly meetings for most businesses, with more frequent check-ins during tax season or significant financial events. Personal clients typically meet annually, with additional consultations as needed.',
  },
  {
    question: 'What documents do I need for tax preparation?',
    answer: 'Required documents typically include income statements (W-2s, 1099s), expense records, investment statements, and previous tax returns. We&apos;ll provide a comprehensive checklist based on your specific situation.',
  },
  {
    question: 'Do you offer virtual services?',
    answer: 'Yes, we offer virtual consultations and secure document sharing for clients who prefer remote services. Our digital platform ensures seamless communication and collaboration.',
  },
  {
    question: 'How do you handle client data security?',
    answer: 'We employ industry-leading encryption and security measures to protect client data. Our systems comply with all regulatory requirements and best practices for financial data protection.',
  },
];

export default function Services() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-light/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="font-heading mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive financial services tailored to your business needs. From tax planning to strategic consulting,
              we&apos;re here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8"
              id={service.id}
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900">{service.title}</h2>
              <p className="mt-4 text-base text-gray-600">{service.description}</p>
              <ul role="list" className="mt-8 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-gray-600">
                    <svg
                      className="h-6 w-5 flex-none text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base font-semibold text-gray-900">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="font-heading text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 