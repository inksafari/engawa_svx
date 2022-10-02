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

[![framework][framework-badge]][svelte-url]
[![GitHub top language][lang-badge]][repo-url]
[![GitHub commit activity][activity-badge]][activity]
[![GitHub repository size][size-badge]][repo-url]
[![Static website hosting][hosting-badge]][hosting-url]

## Disclaimer

> **Warning**
> Not working at the moment.

## Prerequisites

- [Node.js](https://nodejs.org) >=16.9 or later
- [pnpm](https://pnpm.io/)(optional, although strongly recommended)

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

- [ripgrep](https://github.com/BurntSushi/ripgrep) (Rust) & [fonttools](https://github.com/fonttools/fonttools) (Python)

```
# for CJK users (macOS/Homebrew)
brew install ripgrep
pip3 install fonttools brotli zopfli unicodedata2
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Available Scripts

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./build/`     |
| `pnpm serve`   | Preview your build locally, before deploying |

<p align="right">(<a href="#top">back to top</a>)</p>

## Customize configuration

- [app.html](https://github.com/inksafari/engawa/blob/main/src/app.html)
- [site.js](https://github.com/inksafari/engawa/blob/main/src/site.js)
- [rss.xml.js](https://github.com/inksafari/engawa/blob/main/src/routes/rss.xml.js)( language & description )
- [slug.svelte](https://github.com/inksafari/engawa/blob/main/src/routes/%5Bslug%5D.svelte)( year )

### Frontmatter

In `content/slug.md`

```md
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

## Tech stack

- **Framework**: [SvelteKit][svelte-url]
- **Styling**: [Dart Sass](https://sass-lang.com/), [Open Props](https://open-props.style/) and [PostCSS](https://postcss.org/)
- **Content**: Plain text files w/ [MDsveX](https://mdsvex.pngwn.io/docs)(markdown preprocessor)
- **Code syntax highlighter**: [Shiki](https://shikijs.github.io/twoslash/)
- **Deployment**: [Firebase Hosting][hosting-url]
- **Typefaces**:
  - [Gowun Batang(고운바탕)](https://github.com/yangheeryu/Gowun-Batang) by Yanghee Ryu
  - [Iansui](https://github.com/ButTaiwan/iansui)
  - [Lotion](https://font.nina.coffee/) by nina belikova
- **Linting & Formatting**:
  - accessibility: [Pa11y CI](https://github.com/pa11y/pa11y-ci)( [configuration](config/pa11y.json) )
  - credentials: [Secretlint](https://github.com/secretlint/secretlint)( [configuration](.secretlintrc.js) )
  - plain text files:
    - [Vale](https://vale.sh/)( [configuration](.vale.ini) )
      - [Alex](https://github.com/get-alex/alex)( [configuration](.alexrc.yml) )
  - programming languages:
    - [CSpell](https://cspell.org/)( [configuration](cspell.json) )
    - [dprint](https://dprint.dev/)( [configuration](config/dprint.json) )
    - CSS / SCSS: [Stylelint](https://stylelint.io/)( [configuration](config/stylelint.config.cjs) )
    - JavaScript / TypeScript: [ESLint](https://eslint.org/)( [configuration](.eslintrc.cjs) )
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
- hydration

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

<!--
> **Warning**
> 網站樣式從各處抄抄縫補，我不知道為什麼可以動，哪裡有問題也看不出來，更不知道要怎麼修。
> 請不要直接複製，斟酌參考，謝謝。
-->

<!-- MARKDOWN LINKS & IMAGES -->

[framework-badge]: https://img.shields.io/badge/framework-SvelteKit-orange.svg?style=for-the-badge&logo=svelte&labelColor=111b27&logoColor=white
[svelte-url]: https://kit.svelte.dev
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

https://img.shields.io/badge/DEMO-example.com-informational?style=for-the-badge&logo=firebase&labelColor=111b27&logoColor=ffcb2b&color=d0dae7

## Have an idea? Notice a bug?
We'd love to hear your feedback! Feel free to log an issue on our [GitHub issues page][repo-issues]. If your question is more personal, [our Twitter DMs][repo-owner] are always open as well.
-->
