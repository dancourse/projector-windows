import { NextRequest, NextResponse } from 'next/server';
import { db, favourites } from '@/lib/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allFavourites = await db.select().from(favourites).orderBy(favourites.addedAt);
    return NextResponse.json({ favourites: allFavourites });
  } catch (error) {
    console.error('Error fetching favourites:', error);
    return NextResponse.json({ favourites: [], error: 'Database not configured' });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoId, title, thumbnail, channel } = body;

    if (!videoId) {
      return NextResponse.json({ error: 'videoId is required' }, { status: 400 });
    }

    const existing = await db.select().from(favourites).where(eq(favourites.videoId, videoId));

    if (existing.length > 0) {
      return NextResponse.json({ message: 'Already favourited', favourite: existing[0] });
    }

    const newFavourite = await db.insert(favourites).values({
      videoId,
      title,
      thumbnail,
      channel,
    }).returning();

    return NextResponse.json({ favourite: newFavourite[0] });
  } catch (error) {
    console.error('Error adding favourite:', error);
    return NextResponse.json({ error: 'Failed to add favourite' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const videoId = searchParams.get('videoId');

    if (!videoId) {
      return NextResponse.json({ error: 'videoId is required' }, { status: 400 });
    }

    await db.delete(favourites).where(eq(favourites.videoId, videoId));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing favourite:', error);
    return NextResponse.json({ error: 'Failed to remove favourite' }, { status: 500 });
  }
}
