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
    <div className="fixed inset-0 bg-stone-950/90 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 w-full max-w-md border border-amber-900/30 shadow-2xl">
        <h2 className="text-amber-100 font-serif text-xl font-semibold mb-4">Add New Theme</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-stone-400 text-sm mb-2">Theme Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Studio Ghibli"
              className="w-full px-4 py-3 rounded-lg bg-stone-900/80 border border-amber-900/20 text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="mb-6">
            <label className="block text-stone-400 text-sm mb-2">Search Query</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Studio Ghibli ambience rain cosy"
              className="w-full px-4 py-3 rounded-lg bg-stone-900/80 border border-amber-900/20 text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
            <p className="text-stone-600 text-xs mt-2">
              This is what will be searched on YouTube
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg bg-stone-700 text-stone-200 font-medium hover:bg-stone-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-amber-600 text-stone-950 font-medium hover:bg-amber-500 transition-colors"
            >
              Add Theme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
