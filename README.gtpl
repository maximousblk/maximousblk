### Maximous Black

> /'mak.si.mus blak/

I'm a Web Developer and occasional UI/UX Designer who loves making high-quality websites and applications. I'm a college
student and I also love Physics, and want to learn more about how the Universe works.

<p align="center">
  <br/>
  <a href="https://gist.github.com/57dc8bfa83121797ac9b5372b3c874d5">
    <img src="https://gist.github.com/raw/57dc8bfa83121797ac9b5372b3c874d5/banner.svg" width="800"/>
  </a>
  <br/>
</p>

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

### 📰 Recent Blog Posts
{{ range rss "https://maximousblk.me/feed" 5 }}
- [{{ .Title }}]({{ .URL }})
{{- end }}

### 📫 How to reach me:

- Website: [maximousblk.me](https://maximousblk.me/)
- Email: [maximousblk@gmail.com](mailto:maximousblk@gmail.com)
- Twitter: [@maximousblk](https://twitter.com/maximousblk)

You can also ask me a question on my [Public AMA](https://github.com/maximousblk/maximousblk/discussions/new?category=ama)

My PGP Public Key: [`EC7B EE3B 0561 BF2F`](https://keybase.io/maximousblk/pgp_keys.asc)
