// Netlify Serverless Function: Fetch Church 244 YouTube sermons via RSS
// No API key required — uses YouTube's public RSS feed

export default async (req) => {
  const CHANNEL_ID = 'UCsx6xOBAhNqtGU1Aq_NQCdA';
  const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const response = await fetch(RSS_URL);
    if (!response.ok) {
      throw new Error(`YouTube RSS fetch failed: ${response.status}`);
    }

    const xml = await response.text();

    // Parse XML entries manually (no dependencies needed)
    const entries = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xml)) !== null && entries.length < 6) {
      const entry = match[1];

      const videoId = extractTag(entry, 'yt:videoId');
      const title = extractTag(entry, 'title');
      const published = extractTag(entry, 'published');
      const updated = extractTag(entry, 'updated');

      // Extract media:group content
      const descMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);
      const description = descMatch ? descMatch[1].trim().substring(0, 200) : '';

      // Build thumbnail URL from video ID
      const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      entries.push({
        videoId,
        title: decodeXMLEntities(title),
        published,
        updated,
        description: decodeXMLEntities(description),
        thumbnail,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      });
    }

    return new Response(JSON.stringify({ sermons: entries }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch sermons', message: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

function extractTag(xml, tagName) {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`);
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function decodeXMLEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export const config = {
  path: '/.netlify/functions/sermons',
};
