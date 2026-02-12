'use client';

import Link from 'next/link';
import { SupportButton } from '@/components/SupportButton';

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-700/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">☕</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-amber-300">Support</span>{' '}
            <span className="text-stone-200">Projector Windows</span>
          </h1>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            Help keep this free tool running and support the development of new features.
          </p>
          <SupportButton variant="hero" />
        </div>
      </section>

      {/* Why Support */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-amber-100">Why Support?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-amber-100 mb-2 text-xl">Hosting & Maintenance</h3>
              <p className="text-stone-400">
                Server costs, database hosting, and CDN fees to keep the site fast and reliable for everyone.
              </p>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-amber-100 mb-2 text-xl">New Features</h3>
              <p className="text-stone-400">
                Your support helps fund new themes, better curation, and requested features from the community.
              </p>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="font-semibold text-amber-100 mb-2 text-xl">Premium Collections</h3>
              <p className="text-stone-400">
                Supporters get early access to curated premium video collections for D&D campaigns and special
                themes.
              </p>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-semibold text-amber-100 mb-2 text-xl">Show Appreciation</h3>
              <p className="text-stone-400">
                Every coffee helps validate that this tool is useful and motivates continued development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporter Benefits */}
      <section className="py-12 px-4 bg-stone-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-amber-100">Supporter Benefits</h2>

          <div className="space-y-4">
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20 flex items-start gap-4">
              <div className="text-2xl">☕</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-amber-100 text-lg">£3 - One Coffee</h3>
                  <span className="text-amber-500 text-sm">Thank you!</span>
                </div>
                <p className="text-stone-400 text-sm">
                  Your name in the supporters list (optional) and our eternal gratitude.
                </p>
              </div>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20 flex items-start gap-4">
              <div className="text-2xl">💎</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-amber-100 text-lg">£5+ - Premium Access</h3>
                  <span className="text-amber-500 text-sm bg-amber-900/20 px-2 py-1 rounded-full text-xs">
                    BONUS
                  </span>
                </div>
                <p className="text-stone-400 text-sm mb-2">
                  Unlock one premium theme collection as a thank you gift.
                </p>
                <ul className="text-stone-500 text-sm space-y-1">
                  <li>• D&D Battle Music Collection (coming soon)</li>
                  <li>• Fantasy Tavern Ambience Collection (coming soon)</li>
                  <li>• Cozy Reading Nooks Collection (coming soon)</li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20 flex items-start gap-4">
              <div className="text-2xl">🌟</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-amber-100 text-lg">£10+ - Super Supporter</h3>
                  <span className="text-amber-500 text-sm bg-amber-900/20 px-2 py-1 rounded-full text-xs">
                    PREMIUM
                  </span>
                </div>
                <p className="text-stone-400 text-sm">
                  Unlock all premium themes, early access to new features, and priority support for requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-amber-100">What's Next?</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎲</span>
                <h3 className="font-semibold text-amber-100 text-lg">D&D Premium Features</h3>
              </div>
              <p className="text-stone-400 text-sm mb-3">
                Custom playlist builder, battle music transitions, grid overlay for tactical play, and DM notes.
              </p>
              <div className="text-stone-500 text-sm">Target: Q2 2026</div>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📱</span>
                <h3 className="font-semibold text-amber-100 text-lg">Mobile App</h3>
              </div>
              <p className="text-stone-400 text-sm mb-3">
                Native iOS and Android apps for better control and offline video downloads.
              </p>
              <div className="text-stone-500 text-sm">Target: Q3 2026</div>
            </div>

            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎨</span>
                <h3 className="font-semibold text-amber-100 text-lg">More Premium Collections</h3>
              </div>
              <p className="text-stone-400 text-sm mb-3">
                Sci-fi spaceships, underwater scenes, seasonal themes, and more based on community requests.
              </p>
              <div className="text-stone-500 text-sm">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-stone-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-amber-100">FAQ</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-amber-100 mb-2">Will Projector Windows always be free?</h3>
              <p className="text-stone-400 text-sm">
                Yes! The core YouTube search and curated themes will always be free. Premium features are
                optional extras for power users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-amber-100 mb-2">What is Ko-fi?</h3>
              <p className="text-stone-400 text-sm">
                Ko-fi is a simple platform for supporting creators. No subscription required - just a one-time
                donation, like buying someone a coffee.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-amber-100 mb-2">Can I request features?</h3>
              <p className="text-stone-400 text-sm">
                Absolutely! Email{' '}
                <a href="mailto:dan@smartforge.uk" className="text-amber-400 hover:text-amber-300">
                  dan@smartforge.uk
                </a>{' '}
                with your ideas. Supporters get priority consideration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-amber-100 mb-2">
                How do I access premium themes after donating?
              </h3>
              <p className="text-stone-400 text-sm">
                After donating £5+, you'll receive an email with access instructions. Premium themes are coming
                in Q1 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-amber-900/20 to-transparent border border-amber-900/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">🙏</div>
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Every Coffee Helps</h2>
            <p className="text-stone-400 mb-6">
              Even a small contribution helps cover hosting costs and validates that this tool is useful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SupportButton variant="hero" />
              <Link
                href="/"
                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                Continue browsing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
