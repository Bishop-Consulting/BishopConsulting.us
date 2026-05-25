import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bishop Consulting | AI Efficiency Systems',
  description:
    'Bishop Consulting helps existing businesses save time and money with practical AI workflow optimization, automation, and operating systems.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
