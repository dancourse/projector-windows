'use client';

import { useState, useEffect } from 'react';
import { ThemeCard } from '@/components/ThemeCard';
import { VideoCard } from '@/components/VideoCard';
import { SearchBar } from '@/components/SearchBar';
import { AddThemeModal } from '@/components/AddThemeModal';
import { defaultThemes, curatedVideos } from '@/lib/themes';
import type { YouTubeVideo } from '@/lib/youtube';

interface CustomTheme {
  id: number;
  name: string;
  slug: string;
  searchQuery: string;
}

export default function HomePage() {
  const [featuredVideos, setFeaturedVideos] = useState<YouTubeVideo[]>([]);
  const [customThemes, setCustomThemes] = useState<CustomTheme[]>([]);
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(new Set());
  const [showAddTheme, setShowAddTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured videos (Hogwarts theme by default)
    async function fetchFeatured() {
      try {
        const response = await fetch('/api/youtube?q=Hogwarts+castle+window+rain+ambience&limit=6');
        const data = await response.json();
        setFeaturedVideos(data.videos || []);
      } catch (error) {
        console.error('Error fetching featured videos:', error);
      }
      setLoading(false);
    }

    // Fetch custom themes
    async function fetchThemes() {
      try {
        const response = await fetch('/api/themes');
        const data = await response.json();
        setCustomThemes(data.customThemes || []);
      } catch (error) {
        console.error('Error fetching themes:', error);
      }
    }

    // Fetch favourites
    async function fetchFavourites() {
      try {
        const response = await fetch('/api/favourites');
        const data = await response.json();
        const ids = new Set<string>((data.favourites || []).map((f: { videoId: string }) => f.videoId));
        setFavouriteIds(ids);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    }

    fetchFeatured();
    fetchThemes();
    fetchFavourites();
  }, []);

  const handleToggleFavourite = async (id: string, title: string, thumbnail: string, channel: string) => {
    const isFavourited = favouriteIds.has(id);

    if (isFavourited) {
      await fetch(`/api/favourites?videoId=${id}`, { method: 'DELETE' });
      setFavouriteIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      await fetch('/api/favourites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId: id, title, thumbnail, channel }),
      });
      setFavouriteIds((prev) => new Set(prev).add(id));
    }
  };

  const handleAddTheme = async (name: string, searchQuery: string) => {
    try {
      const response = await fetch('/api/themes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, searchQuery }),
      });
      const data = await response.json();
      if (data.theme) {
        setCustomThemes((prev) => [...prev, data.theme]);
      }
    } catch (error) {
      console.error('Error adding theme:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background gradient - warm amber glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-700/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-amber-300">Cosy Ambience</span> <span className="text-stone-200">for Your Projector</span>
          </h1>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            Transform your wall into a window to Hogwarts, medieval castles, and magical worlds.
            Find the perfect ambience, favourite it, and cast to your projector.
          </p>

          <SearchBar />
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2 text-amber-100">
            <span className="animate-flicker">✨</span> Featured Ambience
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-video bg-stone-800/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  {...video}
                  isFavourited={favouriteIds.has(video.id)}
                  onToggleFavourite={handleToggleFavourite}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Theme Categories */}
      <section id="themes" className="py-12 px-4 bg-gradient-to-b from-stone-900/50 to-transparent scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold flex items-center gap-2 text-amber-100">
              <span>🎨</span> Browse by Theme
            </h2>
            <button
              onClick={() => setShowAddTheme(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium rounded-full transition-colors flex items-center gap-2"
            >
              <span>+</span> Add Theme
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {defaultThemes.map((theme) => (
              <ThemeCard key={theme.slug} {...theme} />
            ))}
            {customThemes.map((theme) => (
              <ThemeCard
                key={theme.slug}
                name={theme.name}
                slug={theme.slug}
                icon="🎭"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curated Picks - These are the user's selected videos */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2 text-amber-100">
            <span>💎</span> Curated Picks
          </h2>
          <p className="text-stone-400 mb-6">Hand-picked videos perfect for your projector setup.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedVideos.map((videoId) => (
              <div
                key={videoId}
                className="aspect-video bg-stone-800/50 rounded-xl overflow-hidden cursor-pointer ring-1 ring-amber-900/20 hover:ring-2 hover:ring-amber-500/50 transition-all hover:scale-105"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Curated video"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AddThemeModal
        isOpen={showAddTheme}
        onClose={() => setShowAddTheme(false)}
        onAdd={handleAddTheme}
      />
    </div>
  );
}
