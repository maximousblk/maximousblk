function text(value) {
  return value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim();
}

module.exports = async function blogPosts({ fetch, url, limit = 5 }) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`RSS request failed: ${response.status}`);
  const xml = await response.text();
  const posts = [...xml.matchAll(/<item>[\s\S]*?<\/item>/g)].map((match) => {
    const item = match[0];
    const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1];
    return title && link ? { title: text(title), url: text(link) } : null;
  }).filter(Boolean);
  return posts.slice(0, limit);
};
