<div align="center">
	<h1 align="center">
		&#60;@inksafari/engawa  &#47;&#62;
	</h1>
	<p align="center">
		The codebase of a personal blog developed using SvelteKit, SCSS and hosted freely using Firebase Hosting.
		<!--
		Available rendered at https://example.com.
		<br />
		<br />
		<a href="https://example.com">View Demo</a>
		·
		<a href="https://github.com/inksafari/engawa/issues">Report Bug</a>
		·
		-->
	</p>
</div>

[![GitHub Actions: Build][actions-build]][actions-build-url]
[![framework][framework-badge]][svelte-url]
[![GitHub top language][lang-badge]][repo-url]
[![GitHub commit activity][activity-badge]][activity]
[![GitHub repository size][size-badge]][repo-url]
[![Static website hosting][hosting-badge]][hosting-url]

## Disclaimer

> **Warning**
> Not working at the moment.

## Prerequisites

- [Git](https://git-scm.com/) ( [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) )
- [Node.js](https://nodejs.org) >=16.14 or later
- [pnpm](https://pnpm.io/) ( optional, although strongly recommended )

### for fontSubset.sh

- [ripgrep](https://github.com/BurntSushi/ripgrep) ( Rust )
- [fonttools](https://github.com/fonttools/fonttools) ( Python )

```sh
# for CJK users (macOS/Homebrew)
brew install ripgrep
pip3 install fonttools brotli zopfli unicodedata2
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

To clone it and get started:

```sh
git clone --depth=1 git@github.com:inksafari/engawa.git
cd engawa
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [kit.svelte.dev][svelte-url] for help getting started.

<p align="right">(<a href="#top">back to top</a>)</p>

## Available Scripts

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./build/`     |
| `npm run serve` | Preview your build locally, before deploying |

<p align="right">(<a href="#top">back to top</a>)</p>

## Personalization Configuration

- [.env](sample.env)
- [app.html](src/app.html)
- [site.js](src/lib/site.js)
- [rss.xml.js](src/routes/rss.xml/%2Bserver.js) ( language & description )
- [slug.svelte](src/routes/%5Bslug%5D/%2Bpage.svelte) ( year )
  - [year.svelte](src/lib/components/year.svelte)

### Frontmatter

In `content/slug.md`

```yaml
---
title: Title of the Post
date: 2021-09-07
updatedOn: 2022-07-04
isPrivate: true
prev: foo
next: bar
---
```

`title` and `date` are required for all posts.

<p align="right">(<a href="#top">back to top</a>)</p>

### Environment variables

In `.env`

```ini
PUBLIC_DOMAIN="example.com"
PUBLIC_SITE_URL="https://example.com"

# Sentry
PUBLIC_SENTRY_KEY="123456"
PUBLIC_SENTRY_ORG_ID="9876543"
PUBLIC_SENTRY_PROJECT_ID="01234567891bcdef0123456789abcd"
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Tech Stack

- **Framework**: [SvelteKit][svelte-url] ( [Changelog][SvelteKit-Changelog-url] )
- **Styling**: [Dart Sass](https://sass-lang.com/), [Open Props](https://open-props.style/) and [PostCSS](https://postcss.org/)
- **Content**: Plain text files w/ [MDsveX](https://mdsvex.pngwn.io/docs) (markdown preprocessor)
- **Code syntax highlighter**: [Shiki](https://shikijs.github.io/twoslash/)
- **Deployment**: [Firebase Hosting][hosting-url]
- **Typefaces**:
  - [Gowun Batang(고운바탕)](https://github.com/yangheeryu/Gowun-Batang) by Yanghee Ryu
  - [Iansui](https://github.com/ButTaiwan/iansui) by [Fontworks](https://github.com/fontworks-fonts/Klee) and But Ko
  - [Lotion](https://font.nina.coffee/) by nina belikova
- **Linting & Formatting**:
  - accessibility: [Pa11y CI](https://github.com/pa11y/pa11y-ci) ( [configuration](config/pa11y.json) )
  - credentials: [Secretlint](https://github.com/secretlint/secretlint) ( [configuration](.secretlintrc.js) )
  - plain text files:
    - [Vale](https://vale.sh/) ( [configuration](.vale.ini) )
      - [Alex](https://github.com/get-alex/alex) ( [configuration](.alexrc.yml) )
  - programming languages:
    - [CSpell](https://cspell.org/) ( [configuration](cspell.json) )
    - [dprint](https://dprint.dev/) ( [configuration](dprint.json) )
    - CSS / SCSS: [Stylelint](https://stylelint.io/) ( [configuration](config/stylelint.config.cjs) )
    - JavaScript / TypeScript: [ESLint](https://eslint.org/) ( [configuration](.eslintrc.cjs) )
    - Svelte: [svelte-check](https://www.npmjs.com/package/svelte-check)

<!-- codespell -->

<p align="right">(<a href="#top">back to top</a>)</p>

## 📌 TODOs

- prev/next page
- privacy page
- tab or space
- testing
- rss style
- shelf
- partial hydration

### not in 📝

- Dark mode
- Comments / Webmentions
- SEO
- PWA + Service Worker + Offline

<p align="right">(<a href="#top">back to top</a>)</p>

## Inspiration & Thanks

Props to [mvasigh/sveltekit-mdsvex-blog](https://github.com/mvasigh/sveltekit-mdsvex-blog), which this repo was originally based on.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

This project is licensed under the Beerware License, but all contents copyright (articles, images, videos and visual design) belong to their respective owners or authors.

- error page:
  - img/canvas: [Icecream Cat](https://rive.app/community/2336-4633-icecream-cat/) by [@chococat](https://rive.app/chococat/)

<!-- MARKDOWN LINKS & IMAGES -->

[actions-build]: https://img.shields.io/github/workflow/status/inksafari/engawa/Build?style=for-the-badge&logo=github&labelColor=111b27
[actions-build-url]: https://github.com/inksafari/engawa/actions/workflows/build.yml
[framework-badge]: https://img.shields.io/badge/framework-SvelteKit-orange.svg?style=for-the-badge&logo=svelte&labelColor=111b27&logoColor=white
[svelte-url]: https://kit.svelte.dev
[SvelteKit-Changelog-url]: https://github.com/sveltejs/kit#packages
[activity-badge]: https://img.shields.io/github/commit-activity/m/inksafari/engawa.svg?style=for-the-badge&logo=github&labelColor=111b27&color=%2300a8ff
[activity]: https://github.com/inksafari/engawa/graphs/commit-activity
[last-commit-badge]: https://img.shields.io/github/last-commit/inksafari/engawa/main.svg?style=for-the-badge&logo=github&labelColor=111b27
[size-badge]: https://img.shields.io/github/repo-size/inksafari/engawa.svg?style=for-the-badge&logo=files&labelColor=111b27&logoColor=white&color=ff69b4
[repo-url]: https://github.com/inksafari/engawa
[repo-issues]: https://github.com/inksafari/engawa/issues
[repo-owner]: https://twitter.com/inksafari
[lang-badge]: https://img.shields.io/github/languages/top/inksafari/engawa.svg?style=for-the-badge&logo=javascript&labelColor=111b27&color=8372f3
[tloc-badge]: https://tokei.rs/b1/github/inksafari/engawa
[hosting-badge]: https://img.shields.io/badge/Cloud-Firebase_Hosting-informational?style=for-the-badge&logo=firebase&labelColor=111b27&logoColor=white&color=ffcb2b
[hosting-url]: https://firebase.google.com/

<!--
&logoColor=ff3860 ff859d

Unit Testing with [Vitest], E2E Testing with [Playwright] on GitHub Actions

[Vitest]: https://vitest.dev/
[Playwright]: https://playwright.dev/

[Histoire]: https://histoire.dev/

https://img.shields.io/badge/DEMO-example.com-informational?style=for-the-badge&logo=firebase&labelColor=111b27&logoColor=ffcb2b&color=d0dae7

## Have an idea? Notice a bug?
We'd love to hear your feedback! Feel free to log an issue on our [GitHub issues page][repo-issues]. If your question is more personal, [our Twitter DMs][repo-owner] are always open as well.
-->
