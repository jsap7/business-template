import { Metadata } from 'next';

const siteConfig = {
  name: 'CPA Firm',
  description:
    'Professional accounting services including tax planning, bookkeeping, audit support, financial advisory, and business consulting.',
  url: 'https://www.example.com',
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@cpafirm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'CPA',
    'accounting',
    'tax planning',
    'bookkeeping',
    'audit support',
    'financial advisory',
    'business consulting',
    'certified public accountant',
  ],
};

export const generateMetadata = (
  title: string,
  description?: string,
  path?: string
): Metadata => {
  const pageTitle = `${title} | ${siteConfig.name}`;
  const pageDescription = description || siteConfig.description;
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    ...sharedMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: pageTitle,
      description: pageDescription,
      url,
    },
    twitter: {
      ...sharedMetadata.twitter,
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}; 