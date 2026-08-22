# watanabe3tipapa

> **v0.2.1** · Bricoleur & Toolsmithとしての活動を案内する個人ポータル。

[公開サイト](https://watanabe3tipapa.github.io/watanabe3tipapa/) · [公開サイト・サービス一覧](https://watanabe3tipapa.github.io/index/) · [構築・運用ノート](https://next.watanabe3ti.com/) · [GitHubプロフィール](https://github.com/watanabe3tipapa)

## v0.2.1

3つの関連リポジトリの役割と導線を整理しました。このリポジトリは個人としての活動・制作・連絡先を案内する入口です。現在公開している資産は公開サイト・サービス一覧へ、設計・公開・運用の背景はnextへつなぎます。

## サイト群における役割

| リポジトリ | 公開先 | 役割 |
| --- | --- | --- |
| `watanabe3tipapa` | [個人ポータル](https://watanabe3tipapa.github.io/watanabe3tipapa/) | Bricoleur & Toolsmithとしての活動、制作物、連絡先への入口 |
| `watanabe3tipapa.github.io` | [公開サイト・サービス一覧](https://watanabe3tipapa.github.io/index/) | 現在公開しているサイト、サービス、記事、プロジェクトの正本 |
| `next` | [next.watanabe3ti.com](https://next.watanabe3ti.com/) | 主サイトの体験設計、構築方法、公開経路、運用判断の記録 |

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
| `src/pages/index.astro` | 個人ポータルのトップ。公開サイト一覧・next・制作物・GitHubへの導線を提供 |
| `src/pages/about.astro` | 活動方針と公開先を紹介するページ |
| `src/components/` | ヘッダー、フッター、共有メタデータ |
| `src/styles/global.css` | ポータル共通の配色・タイポグラフィ |
| `ECOSYSTEM.md` | 3リポジトリの役割分担と運用上の関係 |
| `DEV-MEMO.md` | 実装判断と検証記録 |
| `.github/workflows/deploy.yml` | GitHub Pagesへのデプロイ定義 |

## ライセンス

コンテンツおよびライセンス条件については、リポジトリ所有者の方針に従ってください。
