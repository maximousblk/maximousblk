module.exports = async function recentReleases({ github, username, limit = 5 }) {
  const repositories = await github.paginate(github.rest.repos.listForUser, {
    username,
    type: 'owner',
    sort: 'updated',
    direction: 'desc',
    per_page: 100,
  });

  const releases = [];
  for (const repo of repositories.filter((item) => item.private === false)) {
    const response = await github.rest.repos.listReleases({
      owner: repo.owner.login,
      repo: repo.name,
      per_page: 1,
    });
    if (response.data[0]) {
      releases.push({ repo, release: response.data[0] });
    }
    if (releases.length >= limit) break;
  }

  return releases.slice(0, limit).map(({ repo, release }) => ({
    name: repo.full_name,
    url: repo.html_url,
    tagName: release.tag_name,
    releaseUrl: release.html_url,
    description: repo.description || '',
  }));
};
