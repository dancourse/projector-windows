import type { Metadata, Viewport } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import Link from "next/link";
import { AddToHomeScreen } from "@/components/AddToHomeScreen";
import { BottomNav } from "@/components/BottomNav";
import "./globals.css";

const crimson = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-crimson',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#78350f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Projector Windows | Cosy Ambience for Your Wall",
  description: "Browse and cast cosy ambience videos - Hogwarts, medieval castles, fantasy worlds - perfect for your projector.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Projector Windows',
  },
  icons: {
    apple: '/icon-192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${crimson.variable} font-sans bg-stone-950 text-stone-100 min-h-screen`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-lg border-b border-amber-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🪟</span>
                <span className="font-serif font-semibold text-lg hidden sm:inline text-amber-100">Projector Windows</span>
              </Link>

              <div className="flex items-center gap-4">
                <Link
                  href="/favourites"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800/80 hover:bg-stone-700 border border-amber-900/20 transition-colors"
                >
                  <span>❤️</span>
                  <span className="hidden sm:inline text-amber-100">Favourites</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content with padding for nav */}
        <main className="pt-16 pb-20 md:pb-0">
          {children}
        </main>

        {/* Bottom navigation for mobile */}
        <BottomNav />

        {/* iOS Add to Home Screen prompt */}
        <AddToHomeScreen />
      </body>
    </html>
  );
}
