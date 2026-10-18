const fs = require('node:fs/promises');
const path = require('node:path');

const recentActivity = require('./recent-activity');
const recentRepositories = require('./recent-repositories');
const recentPullRequests = require('./recent-pull-requests');
const recentReleases = require('./recent-releases');
const recentStars = require('./recent-stars');
const followers = require('./followers');
const blogPosts = require('./blog-posts');
const render = require('./render');

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const username = process.env.GITHUB_USERNAME || 'maximousblk';

function replaceSection(markdown, name, content) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const startIndex = markdown.indexOf(start);
  const endIndex = markdown.indexOf(end, startIndex + start.length);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Missing or invalid markers for ${name}`);
  }

  return `${markdown.slice(0, startIndex + start.length)}\n${content}\n${markdown.slice(endIndex)}`;
}

async function generate({ github, fetch }) {
  const input = path.join(root, 'README.template.md');
  const output = path.join(root, 'README.md');
  let markdown = await fs.readFile(input, 'utf8');
  const options = { github, fetch, username, limit: 5 };

  const sections = [
    ['recent-public-activity', recentActivity, render.activity],
    ['recent-projects', recentRepositories, render.repositories],
    ['recent-pull-requests', recentPullRequests, render.pullRequests],
    ['recent-releases', recentReleases, render.releases],
    ['recent-stars', recentStars, render.stars],
    ['recent-followers', followers, render.followers],
    ['recent-blog-posts', (args) => blogPosts({ ...args, url: 'https://maximousblk.me/feed' }), render.blogPosts],
  ];

  for (const [name, load, format] of sections) {
    const items = await load(options);
    markdown = replaceSection(markdown, name, format(items));
  }

  await fs.writeFile(output, markdown);
}

if (require.main === module) {
  throw new Error('Run this module through actions/github-script');
}

module.exports = { generate, replaceSection };
