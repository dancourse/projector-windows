'use client';

import { useState } from 'react';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  isFavourited?: boolean;
  onToggleFavourite?: (id: string, title: string, thumbnail: string, channel: string) => void;
}

export function VideoCard({
  id,
  title,
  thumbnail,
  channel,
  isFavourited = false,
  onToggleFavourite,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [favourited, setFavourited] = useState(isFavourited);

  const handleFavourite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavourited(!favourited);
    onToggleFavourite?.(id, title, thumbnail, channel);
  };

  const handleWatch = () => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  };

  return (
    <div
      className="relative group cursor-pointer rounded-xl overflow-hidden bg-zinc-900 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleWatch}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Watch on YouTube</p>
          </div>
        </div>

        {/* Favourite button */}
        <button
          onClick={handleFavourite}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            favourited
              ? 'bg-red-500 text-white'
              : 'bg-black/50 text-white hover:bg-red-500'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={favourited ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm line-clamp-2 mb-1">{title}</h3>
        <p className="text-zinc-400 text-xs">{channel}</p>
      </div>
    </div>
  );
}
