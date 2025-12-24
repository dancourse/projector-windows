import Link from 'next/link';

interface ThemeCardProps {
  name: string;
  slug: string;
  icon: string;
}

export function ThemeCard({ name, slug, icon }: ThemeCardProps) {
  return (
    <Link href={`/theme/${slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 p-6 cursor-pointer transition-all duration-300 hover:scale-105 ring-1 ring-amber-900/20 hover:ring-2 hover:ring-amber-500/40">
        {/* Warm glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-amber-100 font-semibold text-lg">{name}</h3>
          <p className="text-stone-500 text-sm mt-1">Tap to explore</p>
        </div>
      </div>
    </Link>
  );
}
