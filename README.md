# IchigoJam print / IchigoJamプリント

- Japanese / 日本語 [HTML](https://ichigojam.github.io/print/ja/) [PDF](https://ichigojam.github.io/print/ichigojam_print_ja.pdf)
- English / 英語 [HTML](https://ichigojam.github.io/print/en/) [PDF](https://ichigojam.github.io/print/ichigojam_print_en.pdf)
- French / フランス語 [HTML](https://ichigojam.github.io/print/fr/) [PDF](https://ichigojam.github.io/print/ichigojam_print_fr.pdf)
- Rwandan Kinyarwanda / ルワンダ語 [HTML](https://ichigojam.github.io/print/rw/) [PDF](https://ichigojam.github.io/print/ichigojam_print_rw.pdf)
- Swahili / スワヒリ語 [HTML](https://ichigojam.github.io/print/sw/) [PDF](https://ichigojam.github.io/print/ichigojam_print_sw.pdf)

- v2 Japanese / 日本語 [HTML](https://ichigojam.github.io/print/v2/) [PDF](https://ichigojam.github.io/print/ichigojam_print_v2.pdf)

## How to contribute

[33ステップで解説、GitHubオープンソース貢献入門、IchigoJamプリントをつくってみよう！「もじのしょうたい CHR$/ASC」](https://fukuno.jig.jp/2929)

## How to make PDFs

install [Deno](https://deno.land/) and Java runtime ([AdoptOpenJDK - Open source, prebuilt OpenJDK binaries](https://adoptopenjdk.net/))

run these command for making PDFs from https://ichigojam.github.io/print 

```bash
PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
deno run -A --unstable makepdf.js
```
