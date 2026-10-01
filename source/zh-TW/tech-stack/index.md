---
date: '2026-06-30T19:12:17+08:00'
title: 技術棧
updated: '2026-07-26T15:37:23.606+08:00'
---
本頁統計了筆者在開發&維護本站時涉及的主要技術棧，涵蓋前/後端等多方面。

## 一、前端

### 1.開發環境&編輯器

- **Windows 11 25H2** - 本機開發作業系統環境
- **Microsoft Visual Studio Code** - 主力程式碼編輯器
- **Node.js 22.17.1** - JavaScript 執行環境，Hexo 及其外掛的執行基礎
- **NPM** - Node.js 套件管理器，用以安裝&管理專案相依
- **Typora（已棄用）** - 曾用於 Markdown 寫作，由於主題相容性問題棄用~~其實主要是因為這軟體要錢~~
- **DeepSeek** - 程式碼諮詢&輔助生成
- **GitHub Copilot** - 整合於 VSCode 中的程式碼補全&輔助 AI

### 2.部落格框架&主題

- **Hexo 8.1.2** - 基於 Node.js 的靜態部落格框架
- **hexo-theme-redefine v2.9.0** - 當前使用的主題
- **EJS** - 主題模板引擎
- **Tailwind CSS** - 主題樣式框架
- **Stylus** - CSS 預處理器
- **Font Awesome** - 為部落格提供向量圖示的開源圖示庫

### 3.核心外掛&功能擴充

- **hexo-blog-encrypt** - 文章加密外掛
- **MathJax** - LaTeX 數學公式渲染引擎
- **hexo-generator-searchdb** - 生成搜尋索引資料庫，配合前端實現站內全文搜尋
- **hexo-wordcount** - 文章字數統計
- **nodejieba** - 用於文章推薦的中文分詞庫
- **aplayer** - 音樂播放器
- **hexo-all-minifier** - 資源壓縮外掛，可透過壓縮 HTML / CSS / JS / 圖片等資源最佳化載入速度
- **Open Graph** - 社交分享標籤最佳化，提升連結在 Facebook、Twitter 等平台的預覽效果
- **Swup** - 實現無重新整理頁面切換，提供類單頁應用的流暢瀏覽體驗

## 二、後端

### 1.部署&代管服務

- **GitHub** - 提供原始碼代管服務
- **Cloudflare** - 提供 CDN 加速、安全防護、網域管理& DNS 解析服務
- **Vercel** - 部署 Waline 留言系統& Qexo 部落格管理後台的無伺服器平台
- **DigitalPlat** - 提供dpdns.org免費二級網域
- **GitHub Repository** - 原始碼倉庫，代管部落格全部原始碼&站點檔案
- **GitHub Secrets** - 儲存 CI/CD 流程所需的如 API 金鑰等機密變數
- **GitHub Pages** - 備用 Pages 服務，透過 GitHub Actions 自動建置原始碼&發布
- **Cloudflare Pages** - 主站靜態代管服務

### 2.資料庫

- **Neon** - 用於 Waline 留言資料持久化儲存的 PostgreSQL 雲端資料庫
- **MongoDB** - 用於 Qexo 部落格管理資料儲存的 NoSQL 雲端資料庫

### 3. CI/CD 自動化& CDN

- **GitHub Actions** - 執行建置、測試、部署&同步等任務的自動化工作流程
- **NPM Mirror** - NPM 映像站CDN

## 三、參考文件

- **Redefine Docs** - Redefine 主題官方文件
- **Hexo 官方文件** - Hexo 部落格框架文件
