import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar'; // Import the Shadcn Navbar
import { Footer } from '@/components/Footer'; // Import the Shadcn Footer
import { SwarmCursor } from '@/components/SwarmCursor';
import { NeuralField } from '@/components/NeuralField';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Arkhon Systems',
  description: 'Orchestration for autonomous physical intelligence at scale.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground selection:bg-primary antialiased selection:text-white">
        {/* This background now reacts to the scroll of the 'children' below */}
        <NeuralField />

        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </div>

        <SwarmCursor />
      </body>
    </html>
  );
}
