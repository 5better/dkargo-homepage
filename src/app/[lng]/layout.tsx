import { languages } from '@/app/i18n/settings';
import '@/styles/globals.scss';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homepage Template',
  description: 'Dkargo Hompage Template',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    userScalable: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
