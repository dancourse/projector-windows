'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { VideoCard } from '@/components/VideoCard';
import { SearchBar } from '@/components/SearchBar';
import type { YouTubeVideo } from '@/lib/youtube';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    async function fetchVideos() {
      try {
        const response = await fetch(`/api/youtube?q=${encodeURIComponent(query)}&limit=16`);
        const data = await response.json();
        setVideos(data.videos || []);
      } catch (error) {
        console.error('Error searching videos:', error);
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

    setLoading(true);
    fetchVideos();
    fetchFavourites();
  }, [query]);

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
          className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-200 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Search bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Results header */}
        {query && (
          <div className="mb-8">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-amber-100">
              Search results for &ldquo;{query}&rdquo;
            </h1>
            <p className="text-stone-400">
              {loading ? 'Searching...' : `Found ${videos.length} videos`}
            </p>
          </div>
        )}

        {/* Results Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-video bg-stone-800/50 rounded-xl animate-pulse" />
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
        ) : query ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold mb-2 text-stone-200">No results found</h2>
            <p className="text-stone-500 mb-6">
              Try searching for something else, like &ldquo;Hogwarts rain&rdquo; or &ldquo;medieval castle&rdquo;
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-flicker">✨</div>
            <h2 className="text-xl font-semibold mb-2 text-stone-200">Search for ambience videos</h2>
            <p className="text-stone-500">
              Try &ldquo;Hogwarts window rain&rdquo;, &ldquo;cosy autumn cabin&rdquo;, or &ldquo;LOTR Shire&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-video bg-stone-800/50 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
