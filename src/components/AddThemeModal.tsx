'use client';

import { useState } from 'react';

interface AddThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, searchQuery: string) => void;
}

export function AddThemeModal({ isOpen, onClose, onAdd }: AddThemeModalProps) {
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && searchQuery.trim()) {
      onAdd(name.trim(), searchQuery.trim());
      setName('');
      setSearchQuery('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md border border-zinc-700">
        <h2 className="text-white text-xl font-semibold mb-4">Add New Theme</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-400 text-sm mb-2">Theme Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Studio Ghibli"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-zinc-400 text-sm mb-2">Search Query</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Studio Ghibli ambience rain cosy"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <p className="text-zinc-500 text-xs mt-2">
              This is what will be searched on YouTube
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg bg-zinc-700 text-white font-medium hover:bg-zinc-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-600 transition-colors"
            >
              Add Theme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
