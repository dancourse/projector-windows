import type { Metadata } from 'next';
import { ThemePageContent } from '@/components/ThemePageContent';
import { defaultThemes } from '@/lib/themes';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for social sharing
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = defaultThemes.find((t) => t.slug === slug);

  const themeName = theme?.name || 'Theme';
  const themeIcon = theme?.icon || '🪟';

  const title = `${themeName} - Projector Windows`;
  const description = `${themeIcon} Discover cosy ${themeName} ambience videos perfect for your projector. Transform your wall into a magical window!`;

  // Base URL - update this to your production domain
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://projector-windows.vercel.app';
  const pageUrl = `${baseUrl}/theme/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Projector Windows',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${themeName} - Cosy ambience videos`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

// Generate static params for default themes
export async function generateStaticParams() {
  return defaultThemes.map((theme) => ({
    slug: theme.slug,
  }));
}

export default async function ThemePage({ params }: PageProps) {
  const { slug } = await params;

  return <ThemePageContent slug={slug} />;
}
