const publicOnly = (repo) => repo && repo.private === false;

module.exports = async function recentActivity({ github, username, limit = 5 }) {
  const events = await github.paginate(github.rest.activity.listPublicEventsForUser, {
    username,
    per_page: 100,
  });

  const names = [];
  for (const event of events) {
    if (event.type !== 'PushEvent' || !event.repo?.name || names.includes(event.repo.name)) continue;
    names.push(event.repo.name);
    if (names.length >= limit) break;
  }

  const repositories = [];
  for (const fullName of names) {
    const [owner, repo] = fullName.split('/');
    if (!owner || !repo) continue;
    const { data } = await github.rest.repos.get({ owner, repo });
    if (publicOnly(data)) repositories.push(data);
  }

  return repositories.map((repo) => ({
    name: repo.full_name,
    url: repo.html_url,
    description: repo.description || '',
  }));
};
