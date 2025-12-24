import { NextRequest, NextResponse } from 'next/server';
import { db, themes } from '@/lib/db';
import { defaultThemes } from '@/lib/themes';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function GET() {
  try {
    const customThemes = await db.select().from(themes).orderBy(themes.createdAt);
    return NextResponse.json({
      defaultThemes,
      customThemes,
    });
  } catch (error) {
    console.error('Error fetching themes:', error);
    return NextResponse.json({
      defaultThemes,
      customThemes: [],
      error: 'Database not configured',
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, searchQuery } = body;

    if (!name || !searchQuery) {
      return NextResponse.json({ error: 'name and searchQuery are required' }, { status: 400 });
    }

    const slug = slugify(name);

    const newTheme = await db.insert(themes).values({
      name,
      slug,
      searchQuery,
    }).returning();

    return NextResponse.json({ theme: newTheme[0] });
  } catch (error) {
    console.error('Error adding theme:', error);
    return NextResponse.json({ error: 'Failed to add theme' }, { status: 500 });
  }
}
