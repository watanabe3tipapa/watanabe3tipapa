# watanabe3tipapa

> **v0.2.0** · Bricoleur & Toolsmith の制作・研究・ドキュメントをつなぐ個人ポータル。

[公開サイト](https://watanabe3tipapa.github.io/watanabe3tipapa/) · [メインポータル](https://watanabe3tipapa.github.io/) · [GitHubプロフィール](https://github.com/watanabe3tipapa)

このリポジトリには、`watanabe3tipapa` のプロフィール／導線サイトを収録しています。Astroによる静的サイトとしてビルドし、GitHub Pagesへ公開します。

## v0.2.0

Astro Blogの雛形を撤去し、個人ポータルとして再構成しました。実際の活動内容に合わせたトップページとAboutページを設け、メインサイト、プロジェクト、記事、GitHubへ一貫した導線を用意しています。また、公開パスに対応したメタデータ、サイトマップ、現行のGitHub Pagesデプロイ設定へ更新し、依存関係を整理しました。

## 開発

Node.js 22以降を前提とします。依存関係を再現可能な形でインストールし、ローカルプレビューまたは本番ビルドを実行します。

```bash
npm ci
npm run dev
npm run build
```

ビルド結果は `dist/` に出力されます。`main` ブランチへのプッシュ時には、GitHub ActionsがGitHub Pages向けのビルドとデプロイを実行します。

## 構成

| パス | 役割 |
| --- | --- |
| `src/pages/index.astro` | 制作・記録への入口となるトップページ |
| `src/pages/about.astro` | 活動方針と公開先を紹介するページ |
| `src/components/` | ヘッダー、フッター、共有メタデータ |
| `src/styles/global.css` | ポータル共通の配色・タイポグラフィ |
| `.github/workflows/deploy.yml` | GitHub Pagesへのデプロイ定義 |

## ライセンス

コンテンツおよびライセンス条件については、リポジトリ所有者の方針に従ってください。
