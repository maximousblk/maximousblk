function text(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

module.exports = async function blogPosts({ fetch, url, limit = 5 }) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);
  const xml = await response.text();
  const entries = [...xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)];
  const posts = entries.map((match) => {
    const entry = match[0];
    const title = entry.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
    const link = entry.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*\/?\s*>/)?.[1]
      || entry.match(/<link[^>]*>([\s\S]*?)<\/link>/)?.[1];
    return title && link ? { title: text(title), url: text(link) } : null;
  }).filter(Boolean);
  return posts.slice(0, limit);
};
