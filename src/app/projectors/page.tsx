'use client';

import Link from 'next/link';

interface Projector {
  name: string;
  brand: string;
  price: string;
  tier: 'Budget' | 'Mid-Range' | 'Premium';
  brightness: string;
  resolution: string;
  amazonUrl: string;
  features: string[];
  bestFor: string;
}

const projectors: Projector[] = [
  {
    name: 'XGIMI MoGo 2 Pro',
    brand: 'XGIMI',
    price: '£349',
    tier: 'Budget',
    brightness: '400 ANSI lumens',
    resolution: '1080p',
    amazonUrl: 'https://www.amazon.co.uk/dp/B0BW5V9V5Y?tag=projwindows-21',
    features: [
      'Built-in Android TV',
      'Auto keystone correction',
      'Portable design',
      '2-hour battery life',
    ],
    bestFor: 'Renters and small rooms',
  },
  {
    name: 'Anker Nebula Capsule 3',
    brand: 'Anker',
    price: '£449',
    tier: 'Budget',
    brightness: '200 ANSI lumens',
    resolution: '1080p',
    amazonUrl: 'https://www.amazon.co.uk/dp/B0C1JXC5VZ?tag=projwindows-21',
    features: [
      'Ultra-portable',
      'Google TV built-in',
      '2.5-hour battery',
      'Instant auto-focus',
    ],
    bestFor: 'Maximum portability',
  },
  {
    name: 'BenQ GV31',
    brand: 'BenQ',
    price: '£599',
    tier: 'Mid-Range',
    brightness: '300 ANSI lumens',
    resolution: '1080p',
    amazonUrl: 'https://www.amazon.co.uk/dp/B09MQFQWXN?tag=projwindows-21',
    features: [
      'Rotate 135° for ceiling projection',
      'Android TV',
      'USB-C power delivery',
      'Premium speakers',
    ],
    bestFor: 'Ceiling mount ambience',
  },
  {
    name: 'XGIMI Horizon Pro',
    brand: 'XGIMI',
    price: '£849',
    tier: 'Mid-Range',
    brightness: '2200 ANSI lumens',
    resolution: '4K',
    amazonUrl: 'https://www.amazon.co.uk/dp/B09PQJB2F8?tag=projwindows-21',
    features: [
      'True 4K resolution',
      'Bright enough for daylight',
      'Harman Kardon speakers',
      'Auto screen alignment',
    ],
    bestFor: 'Living room use',
  },
  {
    name: 'Epson EF-12',
    brand: 'Epson',
    price: '£899',
    tier: 'Premium',
    brightness: '1000 ANSI lumens',
    resolution: '1080p',
    amazonUrl: 'https://www.amazon.co.uk/dp/B08T1WZKCS?tag=projwindows-21',
    features: [
      'Laser light source (20,000 hours)',
      'Android TV',
      'Yamaha audio',
      'Compact premium design',
    ],
    bestFor: 'Long-term reliability',
  },
  {
    name: 'XGIMI Aura',
    brand: 'XGIMI',
    price: '£2,299',
    tier: 'Premium',
    brightness: '2400 ANSI lumens',
    resolution: '4K',
    amazonUrl: 'https://www.amazon.co.uk/dp/B09V5HTFXG?tag=projwindows-21',
    features: [
      'Ultra-short throw (sits against wall)',
      'Laser 4K',
      'Harman Kardon premium audio',
      'Ambient light rejection',
    ],
    bestFor: 'Permanent installation',
  },
];

export default function ProjectorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-700/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-amber-300">Recommended</span>{' '}
            <span className="text-stone-200">Projectors</span>
          </h1>
          <p className="text-stone-400 text-lg mb-4 max-w-2xl mx-auto">
            The best projectors for cosy ambience windows. Tested with our curated videos.
          </p>
          <p className="text-stone-500 text-sm max-w-xl mx-auto">
            As an Amazon Associate, we earn from qualifying purchases. This doesn't cost you anything extra.
          </p>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-8 px-4 bg-stone-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">What to Look For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-amber-100 mb-2">Brightness</h3>
              <p className="text-stone-400 text-sm">
                200+ ANSI lumens for dark rooms. 1000+ for ambient light. 2000+ for daylight use.
              </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-2">📐</div>
              <h3 className="font-semibold text-amber-100 mb-2">Throw Distance</h3>
              <p className="text-stone-400 text-sm">
                Standard throw: 2-3m from wall. Short throw: 0.5-1m. Ultra-short: sits against wall.
              </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-amber-100 mb-2">Smart Features</h3>
              <p className="text-stone-400 text-sm">
                Android TV or Google TV for YouTube casting. Auto-focus and keystone for easy setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tier */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌱</span>
            <h2 className="font-serif text-3xl font-bold text-amber-100">Budget-Friendly</h2>
            <span className="text-stone-500 text-sm">(£300-£600)</span>
          </div>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Perfect for renters, small bedrooms, or trying out projector ambience for the first time.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projectors
              .filter((p) => p.tier === 'Budget')
              .map((projector) => (
                <ProjectorCard key={projector.name} projector={projector} />
              ))}
          </div>
        </div>
      </section>

      {/* Mid-Range Tier */}
      <section className="py-12 px-4 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⭐</span>
            <h2 className="font-serif text-3xl font-bold text-amber-100">Mid-Range</h2>
            <span className="text-stone-500 text-sm">(£600-£1,000)</span>
          </div>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Better brightness for living rooms and permanent setups. 4K support for crystal-clear ambience.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projectors
              .filter((p) => p.tier === 'Mid-Range')
              .map((projector) => (
                <ProjectorCard key={projector.name} projector={projector} />
              ))}
          </div>
        </div>
      </section>

      {/* Premium Tier */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💎</span>
            <h2 className="font-serif text-3xl font-bold text-amber-100">Premium</h2>
            <span className="text-stone-500 text-sm">(£900+)</span>
          </div>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Laser projectors with 20,000+ hour lifespan. Ultra-short throw for permanent wall installations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projectors
              .filter((p) => p.tier === 'Premium')
              .map((projector) => (
                <ProjectorCard key={projector.name} projector={projector} />
              ))}
          </div>
        </div>
      </section>

      {/* Setup Tips */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-stone-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6 text-amber-100">Setup Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center gap-2">
                <span>📱</span> Casting YouTube
              </h3>
              <p className="text-stone-400 text-sm mb-2">
                Open YouTube on your phone, tap the cast icon, select your projector. Play any video from
                Projector Windows.
              </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center gap-2">
                <span>🌙</span> Best Results
              </h3>
              <p className="text-stone-400 text-sm mb-2">
                Use in dark or dimly lit rooms. Position 2-3m from wall for standard projectors. Enable
                keystone correction for angled placement.
              </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center gap-2">
                <span>🔊</span> Audio Setup
              </h3>
              <p className="text-stone-400 text-sm mb-2">
                Most portable projectors have decent speakers. For premium audio, connect Bluetooth speakers
                or soundbar.
              </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center gap-2">
                <span>🎨</span> Wall Surface
              </h3>
              <p className="text-stone-400 text-sm mb-2">
                White or light-colored walls work best. For dark walls, consider a projector screen or light
                gray paint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-amber-900/20 to-transparent border border-amber-900/30 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">
              Ready to Find Your Perfect Video?
            </h2>
            <p className="text-stone-400 mb-6">
              Browse our curated collection of cosy ambience videos perfect for your projector.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-full transition-colors"
            >
              Browse Videos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectorCard({ projector }: { projector: Projector }) {
  return (
    <div className="bg-stone-800/50 rounded-xl overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all hover:scale-[1.02] group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-amber-100 mb-1">{projector.name}</h3>
            <p className="text-stone-500 text-sm">{projector.brand}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-300">{projector.price}</div>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-stone-900/50 p-3 rounded-lg">
            <div className="text-stone-500 mb-1">Brightness</div>
            <div className="text-stone-200 font-medium">{projector.brightness}</div>
          </div>
          <div className="bg-stone-900/50 p-3 rounded-lg">
            <div className="text-stone-500 mb-1">Resolution</div>
            <div className="text-stone-200 font-medium">{projector.resolution}</div>
          </div>
        </div>

        {/* Best For */}
        <div className="mb-4 p-3 bg-amber-900/10 border border-amber-900/20 rounded-lg">
          <div className="text-amber-200 text-sm font-medium">✨ Best for: {projector.bestFor}</div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {projector.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-stone-400 text-sm">
              <span className="text-amber-500 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={projector.amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-center rounded-full transition-colors group-hover:shadow-lg group-hover:shadow-amber-900/50"
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
