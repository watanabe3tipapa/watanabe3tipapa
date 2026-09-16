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

## 2026-08-22 : v0.2.1 サイト群の役割整理

### 実装内容

3つの関連リポジトリの役割を、個人ポータル、現行の公開サイト・サービス一覧、構築・運用ノートとして整理した。トップページの主要導線を「公開サイト一覧」「next」「Projects」「GitHub」の4つへ再構成し、現在の公開資産と設計・運用記録を混同しない構造に変更した。

| 参照先 | 役割 |
| --- | --- |
| `watanabe3tipapa.github.io/index/` | 公開中のサイト・サービス・制作物の最新一覧 |
| `next.watanabe3ti.com` | 主サイトの体験設計、構築方法、公開経路、運用判断の記録 |
| `watanabe3tipapa` | 個人の活動、制作、連絡先への入口 |

`ECOSYSTEM.md` を追加し、3リポジトリの関係、導線、更新時の確認順序を明文化した。パッケージ版とREADMEを **v0.2.1** に更新した。

### 検証予定

`npm ci`、`npm run build`、GitHub Pagesデプロイ、公開トップページの導線を順に確認する。

## 2026-09-16 : Neo-Brutalism プロフィール統計導入

### 目的

GitHub プロフィール README に統計カードを組み込み、Neo-Brutalism デザイン（淡黄 `#FFFAD7` 背景、黒文字、赤アクセント `#FF6B6B`）に合わせて一体感のある自己紹介へ刷新した。

### 実装内容

| 区分 | 変更内容 |
| --- | --- |
| README | 「GitHub プロフィール」セクションを追加し、Stats / Top Languages の2枚を自前 Vercel、Summary Cards の5枚を `profile-summary-card-output/default/` から表示する構成とした。 |
| ワークフロー | `.github/workflows/profile-summary-cards.yml` を追加。毎日 0:00 実行 + 手動実行で `vn7n24fzkq/github-profile-summary-cards@release` を動かし `SUMMARY_CARDS_TOKEN` でカードを生成・コミットする。`THEME: default`・`UTC_OFFSET: +9` を指定。 |
| Vercel インスタンス | オリジナル `github-readme-stats` の共有インスタンスが `DEPLOYMENT_PAUSED` のため、後継 `stats-organization/github-stats-extended`（release v2.2.0）を**フォークせず**ローカルビルドして `https://github-stats-extended.vercel.app` へ直接デプロイした。Vercel の production env `PAT_1` に GitHub PAT を設定。 |

### 検証結果

自前 Vercel の `/api?username=watanabe3tipapa...` と `/api/top-langs?...` は HTTP 200 かつ実データ表示。Summary Cards は `default/` の5枚（`0-profile-details` / `1-repos-per-language` / `2-most-commit-language` / `3-stats` / `4-productive-time`）が生成され、raw.githubusercontent.com が HTTP 200 で配信することを確認した。

### リリース

| 項目 | 内容 |
| --- | --- |
| コミット | `7172393` — 導入、`5615ff5` — THEME 制限、`e9eb1c6` — release: v0.3.0 |
| 生成コミット | `13565af`（全テーマ）→ 削除 → `08252d0`（default 5枚） |
| Gitタグ | `v0.3.0` |
| GitHub Release | [v0.3.0](https://github.com/watanabe3tipapa/watanabe3tipapa/releases/tag/v0.3.0) |
| 公開URL | <https://github.com/watanabe3tipapa/watanabe3tipapa> |

### プロフィール特化と資料分離

このリポジトリは特別リポジトリであり README が公開プロフィールとして表示されるため、README を統計グリッドとクイックリンク中心のプロフィール表示へ整理した。開発手順・構成表・変更履歴などの内部向け資料は `PROJECT_NOTES.md` へ分離した。あわせてリポジトリの topics と About の説明文も Neo-Brutalism プロフィールに合わせて更新した。

### よもやま・注意点

- **トークースコープ**: Summary Cards の `0-profile-details` は `email` フィールドを含むため、トークンに `read:user`（または `user:email`）が必要。`repo` のみでは毎回失敗してワークフローが赤くなる。`SUMMARY_CARDS_TOKEN`（および Vercel の `PAT_1`）には `public_repo` + `read:user` を付与すること。
- **THEME 未指定の破滅**: `THEME` を渡さないと全90テーマのカード（約260ファイル）が生成されリポジトリが肥大化した。必ず `THEME: default` を指定する。
- **デプロイの罠**: `github-stats-extended` のビルドは Node 24 必須（システム Node が v25 だと engines エラー）。`~/.local/node24/bin` を PATH 先頭に置く。アップストリームのビルドバグ対策として `apps/backend/vercel.json` の `git clean ./apps -fx` を `git clean ./apps -fdx` にパッチ済み（リポジトリルートで実行しないと "Not a git repository" になる）。env var を変更したら再デプロイが要る。
