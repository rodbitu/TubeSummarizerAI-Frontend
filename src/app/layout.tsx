import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TubeSummarizerAI',
  description: 'Um app de resumo utilizando IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-rich-black ${inter.className}`}>{children}</body>
    </html>
  );
}
