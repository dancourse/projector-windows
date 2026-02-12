'use client';

export function SupportButton({ variant = 'nav' }: { variant?: 'nav' | 'hero' | 'footer' }) {
  const kofiUsername = 'projectorwindows'; // Update this after Ko-fi signup if different

  if (variant === 'hero') {
    return (
      <a
        href={`https://ko-fi.com/${kofiUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5E5B] hover:bg-[#FF4744] text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
      >
        <span className="text-xl">☕</span>
        <span>Buy Me a Coffee</span>
      </a>
    );
  }

  if (variant === 'footer') {
    return (
      <a
        href={`https://ko-fi.com/${kofiUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5E5B] hover:bg-[#FF4744] text-white font-medium rounded-full transition-colors text-sm"
      >
        <span>☕</span>
        <span>Support</span>
      </a>
    );
  }

  // Nav variant (default)
  return (
    <a
      href={`https://ko-fi.com/${kofiUsername}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5E5B]/10 hover:bg-[#FF5E5B]/20 border border-[#FF5E5B]/30 transition-colors text-sm"
    >
      <span>☕</span>
      <span className="hidden sm:inline text-stone-100">Support</span>
    </a>
  );
}
