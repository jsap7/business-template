'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: 'John Smith',
    role: 'Managing Partner',
    image: '/team/john-smith.jpg',
    bio: 'With over 20 years of experience in public accounting, John leads our firm with expertise in tax strategy and business consulting.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Tax Director',
    image: '/team/sarah-johnson.jpg',
    bio: 'Sarah specializes in complex tax planning for businesses and high-net-worth individuals, bringing 15 years of expertise to our clients.',
  },
  {
    name: 'Michael Chen',
    role: 'Audit Manager',
    image: '/team/michael-chen.jpg',
    bio: 'Michael heads our audit department, ensuring the highest standards of quality and compliance in all our audit engagements.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Accountant',
    image: '/team/emily-rodriguez.jpg',
    bio: 'Emily brings a wealth of experience in bookkeeping and financial reporting, helping businesses maintain accurate and compliant records.',
  },
];

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency in all our dealings.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our work, delivering the highest quality service to our clients.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Client Focus',
    description: 'We put our clients first, providing personalized solutions that meet their unique needs and objectives.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-primary-light/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          >
            <h1 className="font-heading mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Our Firm
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a team of dedicated professionals committed to providing exceptional financial services to businesses
              and individuals. With decades of combined experience, we help our clients navigate complex financial
              landscapes and achieve their goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core values guide everything we do, from how we serve our clients to how we work together as a team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white">
                    {value.icon}
                  </div>
                  {value.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet our experienced team of financial professionals dedicated to your success.
            </p>
          </div>
          <motion.ul
            ref={teamRef}
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {team.map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8"
              >
                <div className="relative">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-primary">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Certifications section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Certifications & Affiliations
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We maintain the highest standards of professional excellence through our certifications and industry
            affiliations.
          </p>
        </div>
        <div className="mt-16 flex justify-center gap-8 flex-wrap">
          {/* Add certification logos here */}
        </div>
      </div>
    </div>
  );
} 