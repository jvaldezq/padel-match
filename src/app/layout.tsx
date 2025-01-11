import { ReactNode } from 'react';

import { Navigation } from '@/components/Navigation';
import { QueryWrapper } from '@/components/QueryWrapper';

import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Padel Match',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-anti-flash-white">
        <QueryWrapper>
          {children}
          <Navigation />
        </QueryWrapper>
      </body>
    </html>
  );
}
