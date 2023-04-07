### Maximous Black

> /'mak.si.mus blak/

I'm a Web Developer and occasional UI/UX Designer who loves making high-quality websites and applications. I'm a college
student and I also love Physics, and want to learn more about how the Universe works.

[`🏠 maximousblk.me`](https://maximousblk.me/)
[`📫 maximousblk@gmail.com`](mailto:maximousblk@gmail.com)
[`🐦 @maximousblk`](https://twitter.com/maximousblk)
[`🤓 EC7B EE3B 0561 BF2F`](https://keybase.io/maximousblk/pgp_keys.asc)

### 👷 Check out what I'm currently working on
{{ range recentContributions 5 }}
- [{{ .Repo.Name }}]({{ .Repo.URL }}) - {{ .Repo.Description }}
{{- end }}

### 🌱 My latest projects
{{ range recentRepos 5 }}
- [{{ .Name }}]({{ .URL }}) - {{ .Description }}
{{- end }}

### 🔨 My recent Pull Requests
{{ range recentPullRequests 5 }}
- [{{ .Title }}]({{ .URL }}) on [{{ .Repo.Name }}]({{ .Repo.URL }})
{{- end }}

### 🔭 Latest releases I've contributed to
{{ range recentReleases 5 }}
- [{{ .Name }}]({{ .URL }}) [`{{ .LastRelease.TagName }}`]({{ .LastRelease.URL }}) - {{.Description}}
{{- end }}

### ⭐ Recent Stars
{{ range recentStars 5 }}
- [{{ .Repo.Name }}]({{ .Repo.URL }}) - {{ .Repo.Description }}
{{- end }}

### 💖 Recent followers
{{ range followers 5 }}
- [**@{{ .Login }}**]({{ .URL }})
{{- end }}

### 📰 Recent Blog Posts
{{ range rss "https://maximousblk.me/feed" 5 }}
- [{{ .Title }}]({{ .URL }})
{{- end }}
