<h1 align="center">
  @inksafari/engawa
</h1>
<!-- Live at example.com -->

[![framework][framework-badge]][svelte-url]
[![GitHub top language][lang-badge]][repo-url]
[![GitHub commit activity][activity-badge]][activity]
[![GitHub last commit][last-commit-badge]][activity]
[![GitHub repository size][size-badge]][repo-url]
[![TLOC][tloc-badge]][repo-url]
[![Static website hosting][hosting-badge]][hosting-url]

## Disclaimer
> **Note**
> Not working at the moment.

## Prerequisites
- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/)(optional, although strongly recommended)

## Installation
- [ripgrep](https://github.com/BurntSushi/ripgrep) (Rust) & [fonttools](https://github.com/fonttools/fonttools) (Python)

```
# for CJK users (macOS/Homebrew)
brew install ripgrep
pip3 install fonttools brotli zopfli unicodedata2
```

## Available Scripts
All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:-------------------------------------------- |
| `pnpm install`  | Installs dependencies                        |
| `pnpm dev`      | Starts local dev server at `localhost:3000`  |
| `pnpm build`    | Build your production site to `./build/`     |
| `pnpm serve`    | Preview your build locally, before deploying |

## Attributions
Built with:
- [SvelteKit](https://kit.svelte.dev/)
- [Dart Sass](https://sass-lang.com/) & [Open Props](https://open-props.style/)
- [MDsveX](https://mdsvex.pngwn.io/docs)( Markdown preprocessor )
- [Shiki](https://shikijs.github.io/twoslash/)( code highlighting )

### Typefaces
- [Gowun Batang(고운바탕)](https://github.com/yangheeryu/Gowun-Batang) by Yanghee Ryu
- [Iansui](https://github.com/ButTaiwan/iansui)
- [Lotion](https://font.nina.coffee/) by nina belikova

## TODOs
- prev/next page
- privacy page
- tab or space

### not in 📝
- Dark mode
- Comments / Webmentions
- SEO
- PWA + Service Worker + Offline

## Issues
> Port 9000 is already in use

```
sudo lsof -i:9000
sudo kill -9 <pid>
```

## Inspiration & Thanks
Props to [mvasigh/sveltekit-mdsvex-blog](https://github.com/mvasigh/sveltekit-mdsvex-blog), which this repo was originally based on.

## License
This project is licensed under the Beerware License, but all content copyright (articles, images, videos and visual design) remains with the author.

<!-- TODO: FOSSA -->
[framework-badge]: https://img.shields.io/badge/framework-SvelteKit-orange.svg?style=flat-square&logo=svelte&logoColor=white
[svelte-url]: https://kit.svelte.dev
[activity-badge]: https://img.shields.io/github/commit-activity/m/inksafari/engawa.svg?style=flat-square&color=%2300a8ff
[activity]: https://github.com/inksafari/engawa/graphs/commit-activity
[last-commit-badge]: https://img.shields.io/github/last-commit/inksafari/engawa/main.svg?style=flat-square
[size-badge]: https://img.shields.io/github/repo-size/inksafari/engawa.svg?style=flat-square&color=ff69b4
[repo-url]: https://github.com/inksafari/engawa
[lang-badge]: https://img.shields.io/github/languages/top/inksafari/engawa.svg?style=flat-square&logoColor=white&color=654FF0
[tloc-badge]: https://tokei.rs/b1/github/inksafari/engawa
[hosting-badge]: https://img.shields.io/badge/Cloud-Google_Firebase-informational?style=flat-square&logo=firebase&logoColor=white&color=FFCB2B
[hosting-url]: https://firebase.google.com/
