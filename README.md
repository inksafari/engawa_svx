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
> **Note**
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

| Command         | Action                                       |
|:----------------|:-------------------------------------------- |
| `pnpm install`  | Installs dependencies                        |
| `pnpm dev`      | Starts local dev server at `localhost:3000`  |
| `pnpm build`    | Build your production site to `./build/`     |
| `pnpm serve`    | Preview your build locally, before deploying |

<p align="right">(<a href="#top">back to top</a>)</p>

## Customization
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
- **Content**: [MDsveX](https://mdsvex.pngwn.io/docs)
- **Code syntax highlighter**: [Shiki](https://shikijs.github.io/twoslash/)
- **Deployment**: [Firebase Hosting][hosting-url]
- **Typefaces**:
  - [Gowun Batang(고운바탕)](https://github.com/yangheeryu/Gowun-Batang) by Yanghee Ryu
  - [Iansui](https://github.com/ButTaiwan/iansui)
  - [Lotion](https://font.nina.coffee/) by nina belikova

<p align="right">(<a href="#top">back to top</a>)</p>

## 📌 TODOs
- prev/next page
- privacy page
- tab or space
- testing
- rss style
- shelf

### not in 📝
- Dark mode
- Comments / Webmentions
- SEO
- PWA + Service Worker + Offline

<p align="right">(<a href="#top">back to top</a>)</p>

## Known Issues
> Port 9000 is already in use

```
sudo lsof -i:9000
sudo kill -9 <pid>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Inspiration & Thanks
Props to [mvasigh/sveltekit-mdsvex-blog](https://github.com/mvasigh/sveltekit-mdsvex-blog), which this repo was originally based on.

<p align="right">(<a href="#top">back to top</a>)</p>

## License
This project is licensed under the Beerware License, but all contents copyright (articles, images, videos and visual design) belong to their respective owners or authors.

<!--
> **Warning**
> 網站樣式從各處抄抄縫補，我不知道為什麼可以動，哪裡有問題也看不出來，更不知道要怎麼修。
> 請不要直接複製，斟酌參考，謝謝。
-->

<!-- MARKDOWN LINKS & IMAGES -->
[framework-badge]: https://img.shields.io/badge/framework-SvelteKit-orange.svg?style=for-the-badge&logo=svelte&logoColor=white&labelColor=111b27
[svelte-url]: https://kit.svelte.dev
[activity-badge]: https://img.shields.io/github/commit-activity/m/inksafari/engawa.svg?style=for-the-badge&logo=github&color=%2300a8ff&labelColor=111b27
[activity]: https://github.com/inksafari/engawa/graphs/commit-activity
[last-commit-badge]: https://img.shields.io/github/last-commit/inksafari/engawa/main.svg?style=for-the-badge&logo=github&labelColor=111b27
[size-badge]: https://img.shields.io/github/repo-size/inksafari/engawa.svg?style=for-the-badge&logo=files&logoColor=FF859D&color=ff69b4&labelColor=111b27
[repo-url]: https://github.com/inksafari/engawa
[lang-badge]: https://img.shields.io/github/languages/top/inksafari/engawa.svg?style=for-the-badge&logo=javascript&color=8372f3&labelColor=111b27
[tloc-badge]: https://tokei.rs/b1/github/inksafari/engawa
[hosting-badge]: https://img.shields.io/badge/Cloud-Firebase_Hosting-informational?style=for-the-badge&logo=firebase&logoColor=white&color=FFCB2B&labelColor=111b27
[hosting-url]: https://firebase.google.com/

<!--
&logoColor=ff3860

https://img.shields.io/badge/Cloud-Firebase_Hosting-informational?style=for-the-badge&logo=firebase&logoColor=FFCB2B&color=d0dae7&labelColor=111b27
 -->
