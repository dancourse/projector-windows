'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { VideoCard } from '@/components/VideoCard';
import { defaultThemes } from '@/lib/themes';
import type { YouTubeVideo } from '@/lib/youtube';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ThemePage({ params }: PageProps) {
  const { slug } = use(params);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [themeName, setThemeName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Find theme by slug
    const defaultTheme = defaultThemes.find((t) => t.slug === slug);

    if (defaultTheme) {
      setThemeName(defaultTheme.name);
      setSearchQuery(defaultTheme.searchQuery);
    } else {
      // Fetch custom theme from API
      fetch('/api/themes')
        .then((res) => res.json())
        .then((data) => {
          const customTheme = data.customThemes?.find((t: { slug: string }) => t.slug === slug);
          if (customTheme) {
            setThemeName(customTheme.name);
            setSearchQuery(customTheme.searchQuery);
          }
        });
    }
  }, [slug]);

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchVideos() {
      try {
        const response = await fetch(`/api/youtube?q=${encodeURIComponent(searchQuery)}&limit=12`);
        const data = await response.json();
        setVideos(data.videos || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
      setLoading(false);
    }

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

    fetchVideos();
    fetchFavourites();
  }, [searchQuery]);

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

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to themes
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{themeName || 'Loading...'}</h1>
          <p className="text-zinc-400">
            Discover cosy ambience videos perfect for your projector
          </p>
        </div>

        {/* Videos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-video bg-zinc-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
                isFavourited={favouriteIds.has(video.id)}
                onToggleFavourite={handleToggleFavourite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No videos found for this theme.</p>
            <Link
              href="/"
              className="inline-block mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-full transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
