import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projector Windows | Cosy Ambience for Your Wall",
  description: "Browse and cast cosy ambience videos - Hogwarts, medieval castles, fantasy worlds - perfect for your projector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🪟</span>
                <span className="font-semibold text-lg hidden sm:inline">Projector Windows</span>
              </Link>

              <div className="flex items-center gap-4">
                <Link
                  href="/favourites"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  <span className="text-red-500">❤️</span>
                  <span className="hidden sm:inline">Favourites</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content with padding for nav */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
