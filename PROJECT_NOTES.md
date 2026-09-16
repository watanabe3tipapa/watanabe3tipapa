# PROJECT_NOTES

このリポジトリの開発・保守の手引きと、バージョン別の変更履歴をまとめた資料です。公開プロフィールとして表示される README から分離した内部向けドキュメントです。

## 概要

このリポジトリは個人としての活動・制作・連絡先を案内する入口としてのポータル実装を含みます。公開サイト、本サイト（ポータル）、および設計・運用に関する記録を分離した3つのリポジトリ群のうちの1つです。

## サイト群における役割

| リポジトリ | 公開先 | 役割 |
| --- | --- | --- |
| `watanabe3tipapa` | https://watanabe3tipapa.github.io/watanabe3tipapa/ | Bricoleur & Toolsmithとしての活動、制作物、連絡先への入口 |
| `watanabe3tipapa.github.io` | https://watanabe3tipapa.github.io/index/ | 現在公開しているサイト、サービス、記事、プロジェクトの正本 |
| `next` | https://next.watanabe3ti.com/ | 主サイトの体験設計、構築方法、公開経路、運用判断の記録 |

## 変更履歴

### v0.3.0

GitHub プロフィールに Neo-Brutalism デザインの統計カードを導入しました。Stats / Top Languages は自前の Vercel インスタンスから、Profile Summary Cards の5枚はリポジトリ内で毎日自動生成されます。

### v0.2.1

3つの関連リポジトリの役割と導線を整理しました。本リポジトリは個人としての活動、制作物、連絡先への入口を担います。公開資産は「公開サイト・サービス一覧」へ、設計・運用の背景は「next」へ導きます。

## 開発（ローカルでの確認）

このプロジェクトは Astro を用いており、package.json の定義により Node.js 22系以上を前提としています。依存関係のインストールとローカルプレビュー、本番ビルドは次のコマンドで行えます。

```bash
npm ci
npm run dev
npm run build
```

- ビルド結果はリポジトリ内のビルド設定に従い出力されます（既存READMEでは `dist/` に出力される旨が記載されています）。
- `main` ブランチへのプッシュ時に、リポジトリ内の GitHub Actions 定義（.github/workflows/deploy.yml）による GitHub Pages 向けのビルドとデプロイが設定されています。

## 構成（主なファイルと役割）

| パス | 役割 |
| --- | --- |
| `src/pages/index.astro` | 個人ポータルのトップ。公開サイト一覧・next・制作物・GitHubへの導線を提供 |
| `src/pages/about.astro` | 活動方針と公開先を紹介するページ |
| `src/components/` | ヘッダー、フッター、共有メタデータなどのコンポーネント |
| `src/styles/global.css` | ポータル共通の配色・タイポグラフィ |
| `ECOSYSTEM.md` | 3リポジトリの役割分担と運用上の関係 |
| `DEV-MEMO.md` | 実装判断と検証記録 |
| `profile-summary-card-output/` | Summary Cards の生成結果（毎日自動更新、`default` テーマのみ） |
| `.github/workflows/profile-summary-cards.yml` | Summary Cards の生成ワークフロー |
| `.github/workflows/deploy.yml` | GitHub Pagesへのデプロイ定義 |
| `package.json` | プロジェクト情報、Nodeエンジン要件、スクリプト定義（dev/build等） |

## 関連資料

- ECOSYSTEM.md — サイト群の役割分担と導線に関する説明
- DEV-MEMO.md — 実装上の判断や検証記録
- v0.3.0-repository-update.pptx — 当該バージョンの更新内容をまとめた資料（リポジトリ内）※準備中
- v0.2.1-repository-update.pptx — 前バージョンの更新内容をまとめた資料（リポジトリ内）

## 開発・保守状態

- 現行バージョンは v0.3.0 です。
- リポジトリはアーカイブされていません（非アーカイブ状態）。