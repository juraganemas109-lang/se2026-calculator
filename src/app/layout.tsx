import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PwaRegistrar from '@/components/PwaRegistrar';
import PasswordProtection from '@/components/PasswordProtection';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SE2026 Smart Business Calculator',
  description: 'Kalkulator Cerdas Pencatatan Komponen Usaha Sensus Ekonomi 2026',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#04549C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SE2026 Calc" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-slate-950">
        <AuthProvider>
          <PasswordProtection>
            {children}
            <PwaRegistrar />
          </PasswordProtection>
        </AuthProvider>
      </body>
    </html>
  );
}
