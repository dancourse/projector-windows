import Link from 'next/link';

interface ThemeCardProps {
  name: string;
  slug: string;
  icon: string;
}

export function ThemeCard({ name, slug, icon }: ThemeCardProps) {
  return (
    <Link href={`/theme/${slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-zinc-700 hover:to-zinc-800 hover:ring-2 hover:ring-amber-500/30">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-zinc-400 text-sm mt-1">Tap to explore</p>
        </div>
      </div>
    </Link>
  );
}
