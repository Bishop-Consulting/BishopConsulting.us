import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bishop Consulting | AI Solutions That Execute',
  description:
    'Bishop Consulting helps teams deploy practical AI systems to automate operations, ship products, and accelerate growth.'
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
