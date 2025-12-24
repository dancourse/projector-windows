export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration?: string;
}

export interface YouTubeSearchResponse {
  items: {
    id: { videoId: string };
    snippet: {
      title: string;
      channelTitle: string;
      thumbnails: {
        high: { url: string };
        medium: { url: string };
      };
    };
  }[];
}

export async function searchYouTube(query: string, maxResults = 12): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_DATA_SEARCH_API;

  if (!apiKey) {
    console.error('YouTube API key not configured');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(`${query} ambience 4K loop`);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=long&maxResults=${maxResults}&q=${searchQuery}&key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error('YouTube API error:', response.status, await response.text());
      return [];
    }

    const data: YouTubeSearchResponse = await response.json();

    return data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
      channel: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('YouTube search error:', error);
    return [];
  }
}
