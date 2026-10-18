function lines(items, render) {
  return items.map(render).join('\n');
}

module.exports = {
  activity: (items) => lines(items, (item) => `- [${item.name}](${item.url}) - ${item.description}`),
  repositories: (items) => lines(items, (item) => `- [${item.name}](${item.url}) - ${item.description}`),
  pullRequests: (items) => lines(items, (item) => `- [${item.title}](${item.url}) on [${item.repoName}](${item.repoUrl})`),
  releases: (items) => lines(items, (item) => `- [${item.name}](${item.url}) [\`${item.tagName}\`](${item.releaseUrl}) - ${item.description}`),
  stars: (items) => lines(items, (item) => `- [${item.name}](${item.url}) - ${item.description}`),
  followers: (items) => lines(items, (item) => `- [**@${item.login}**](${item.url})`),
  blogPosts: (items) => lines(items, (item) => `- [${item.title}](${item.url})`),
};
