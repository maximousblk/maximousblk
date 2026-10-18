module.exports = async function recentPullRequests({ github, username, limit = 5 }) {
  const result = await github.rest.search.issuesAndPullRequests({
    q: `author:${username} type:pr`,
    sort: 'created',
    order: 'desc',
    per_page: limit,
  });

  const pullRequests = [];
  for (const item of result.data.items) {
    const [owner, repo] = item.repository_url.split('/').slice(-2);
    if (!owner || !repo) continue;

    const repository = await github.rest.repos.get({ owner, repo });
    if (repository.data.private) continue;

    pullRequests.push({
      title: item.title,
      url: item.html_url,
      repoName: repository.data.full_name,
      repoUrl: repository.data.html_url,
    });
    if (pullRequests.length >= limit) break;
  }

  return pullRequests;
};
