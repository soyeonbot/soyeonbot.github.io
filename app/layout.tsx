import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://soyeonbot.github.io'),
  title: 'Soyeon Kim | Explainable AI & Weather Intelligence',
  description: 'Soyeon Kim is a Ph.D. candidate at KAIST and Principal Researcher at INEEJI, working on explainable AI, weather intelligence, and environmental systems.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Soyeon Kim', description: 'Explainable AI · Weather Intelligence · Environmental Systems', url: 'https://soyeonbot.github.io/', type: 'website', images: [{url: '/og.png', width: 1730, height: 909, alt: 'Soyeon Kim — Explainable AI · Weather Intelligence'}] },
  twitter: { card: 'summary_large_image', images: ['/og.png'], title: 'Soyeon Kim', description: 'Explainable AI · Weather Intelligence · Environmental Systems' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
