'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VideoCard } from '@/components/VideoCard';

interface Favourite {
  id: number;
  videoId: string;
  title: string;
  thumbnail: string;
  channel: string;
}

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavourites() {
      try {
        const response = await fetch('/api/favourites');
        const data = await response.json();
        setFavourites(data.favourites || []);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
      setLoading(false);
    }

    fetchFavourites();
  }, []);

  const handleRemoveFavourite = async (videoId: string) => {
    await fetch(`/api/favourites?videoId=${videoId}`, { method: 'DELETE' });
    setFavourites((prev) => prev.filter((f) => f.videoId !== videoId));
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-200 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2 flex items-center gap-3 text-amber-100">
            <span>❤️</span> Your Favourites
          </h1>
          <p className="text-stone-400">
            Your saved ambience videos, ready to cast to your projector
          </p>
        </div>

        {/* Favourites Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-video bg-stone-800/50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : favourites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favourites.map((favourite) => (
              <VideoCard
                key={favourite.videoId}
                id={favourite.videoId}
                title={favourite.title || 'Untitled'}
                thumbnail={favourite.thumbnail || `https://img.youtube.com/vi/${favourite.videoId}/hqdefault.jpg`}
                channel={favourite.channel || 'Unknown'}
                isFavourited={true}
                onToggleFavourite={() => handleRemoveFavourite(favourite.videoId)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-xl font-semibold mb-2 text-stone-200">No favourites yet</h2>
            <p className="text-stone-500 mb-6">
              Start exploring themes and save your favourite videos
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium rounded-full transition-colors"
            >
              Browse Themes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
