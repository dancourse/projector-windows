'use client';

import { useState, useEffect } from 'react';

export function AddToHomeScreen() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const wasDismissed = localStorage.getItem('aths-dismissed');
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    // Check if on iOS and not already in standalone mode
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isIOS && !isStandalone) {
      // Delay showing the prompt
      const timer = setTimeout(() => setShowPrompt(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('aths-dismissed', 'true');
  };

  if (!showPrompt || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-md mx-auto bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-5 shadow-2xl border border-amber-900/30">
        <div className="flex items-start gap-4">
          <div className="text-4xl">🪟</div>
          <div className="flex-1">
            <h3 className="text-amber-100 font-semibold text-lg mb-1">
              Add to Home Screen
            </h3>
            <p className="text-stone-400 text-sm mb-3">
              Install Projector Windows for quick access to your cosy ambience videos
            </p>
            <div className="flex items-center gap-2 text-stone-300 text-sm bg-stone-700/50 rounded-lg p-3">
              <span>Tap</span>
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L12 14M12 14L8 10M12 14L16 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 12 8)"/>
                <rect x="4" y="16" width="16" height="4" rx="1" fill="currentColor" opacity="0.3"/>
              </svg>
              <span>then</span>
              <span className="font-medium text-amber-200">&ldquo;Add to Home Screen&rdquo;</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-stone-500 hover:text-stone-300 transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
