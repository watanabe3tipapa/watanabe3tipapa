# DEV-MEMO

このファイルは `watanabe3tipapa` の実装判断、検証結果、保守時の注意点を記録する内部向けメモです。公開サイトの本文には含めません。

## 2026-08-22 : v0.2.0 ポータル再構成

### 目的

Astro Blog Starter由来のサンプル記事、雛形ナビゲーション、汎用のSNS導線を整理し、**Bricoleur & Toolsmith** としての活動を案内する個人ポータルへ置き換えた。メインサイト、プロジェクト、記事、GitHubへの導線を一本化し、GitHub Pagesのサブパス配信でも安定して表示されることを重視した。

### 実装内容

| 区分 | 変更内容 |
| --- | --- |
| ページ | `src/pages/index.astro` を制作・記録の入口となるポータルへ刷新し、`src/pages/about.astro` に活動方針と活動領域を実装した。 |
| UI | ヘッダー、フッター、共通スタイルを再設計し、淡いグレー・ブルーを基調とする落ち着いた視覚言語へ統一した。 |
| 導線 | メインポータル、Projects、Articles、GitHub、Gist、Emailを実在の公開先へ接続した。 |
| メタデータ | canonical URL、OG/Twitterメタデータ、faviconをサブパス対応に修正し、`@astrojs/sitemap` を有効化した。 |
| 整理 | サンプル記事、MDX/RSS設定、未使用ライブラリ、雛形画像、不要コンポーネントを削除した。 |
| CI/CD | `withastro/action@v6` と `actions/deploy-pages@v4` を用いたGitHub Pagesデプロイへ更新し、Node.js 22系を指定した。 |
| 依存関係 | Astro 7系、`@astrojs/check`、`@astrojs/sitemap`、TypeScriptを現行構成へ更新した。 |

### 検証結果

`npm ci` 後に `npm run build` を実行し、`astro check` は **0 errors / 0 warnings / 0 hints** で完了した。生成対象はトップページとAboutページの2ページであり、`/watanabe3tipapa/` 配下の内部リンク、favicon、canonical URLが正しく出力されることを確認した。production依存関係に対する `npm audit --omit=dev --audit-level=moderate` の結果は **0 vulnerabilities** だった。

GitHub Actions の `Deploy portal to GitHub Pages` はコミット `d8f8dc8` で成功した。公開環境 `https://watanabe3tipapa.github.io/watanabe3tipapa/` において、トップページ、Aboutページ、主要導線の表示を確認した。

### リリース

| 項目 | 内容 |
| --- | --- |
| コミット | `d8f8dc8` — `release: v0.2.0 portal refresh` |
| Gitタグ | `v0.2.0` |
| GitHub Release | [v0.2.0](https://github.com/watanabe3tipapa/watanabe3tipapa/releases/tag/v0.2.0) |
| 公開URL | <https://watanabe3tipapa.github.io/watanabe3tipapa/> |

### 今後の運用

ページ内リンクは `import.meta.env.BASE_URL` を起点にし、文字列連結時には必ず `/` を明示する。GitHub Pagesではこのサイトが `/watanabe3tipapa/` に配置されるため、ルート相対パスを直接書くと公開環境でリンク切れになる。

コンテンツを追加する場合は、本人の活動や成果物に基づく情報だけを記載する。サイトの構造を増やす前に、既存のメインポータルとの役割分担と導線の重複を確認する。依存関係を更新した際は、`npm ci`、`npm run build`、production依存関係監査を続けて実行する。
