---
date: '2026-06-30T19:12:17+08:00'
title: 技术栈
updated: '2026-07-26T15:37:23.606+08:00'
---
本页统计了笔者在开发&维护本站时涉及的主要技术栈，涵盖前/后端等多方面。

## 一、前端

### 1.开发环境&编辑器

- **Windows 11 25H2** - 本地开发操作系统环境
- **Microsoft Visual Studio Code** - 主力代码编辑器
- **Node.js 22.17.1** - JavaScript 运行时，Hexo 及其插件的运行基础
- **NPM** - Node.js 包管理器，用以安装&管理项目依赖
- **Typora（已弃用）** - 曾用于 Markdown 写作，由于主题兼容性问题弃用~~其实主要是因为这软件要钱~~
- **DeepSeek** - 代码咨询&辅助生成
- **GitHub Copilot** - 集成于 VSCode 中的代码补全&辅助 AI

### 2.博客框架&主题

- **Hexo 8.1.2** - 基于 Node.js 的静态博客框架
- **hexo-theme-redefine v2.9.0** - 当前使用的主题
- **EJS** - 主题模板引擎
- **Tailwind CSS** - 主题样式框架
- **Stylus** - CSS 预处理器
- **Font Awesome** - 为博客提供矢量图标的开源图标库

### 3.核心插件&功能扩展

- **hexo-blog-encrypt** - 文章加密插件
- **MathJax** - LaTeX 数学公式渲染引擎
- **hexo-generator-searchdb** - 生成搜索索引数据库，配合前端实现站内全文搜索
- **hexo-wordcount** - 文章字数统计
- **nodejieba** - 用于文章推荐的中文分词库
- **aplayer** - 音乐播放器
- **hexo-all-minifier** - 资源压缩插件，可通过压缩 HTML / CSS / JS / 图片等资源优化加载速度
- **Open Graph** - 社交分享标签优化，提升链接在 Facebook、Twitter 等平台的预览效果
- **Swup** - 实现无刷新页面切换，提供类单页应用的流畅浏览体验

## 二、后端

### 1.部署&托管服务

- **GitHub** - 提供源代码托管服务
- **Cloudflare** - 提供 CDN 加速、安全防护、域名管理& DNS 解析服务
- **Vercel** - 部署 Waline 评论系统& Qexo 博客管理后台的无服务器平台
- **DigitalPlat** - 提供dpdns.org免费二级域名
- **GitHub Repository** - 源代码仓库，托管博客全部源码&站点文件
- **GitHub Secrets** - 存储 CI/CD 流程所需的如 API 密钥等敏感变量
- **GitHub Pages** - 备用 Pages 服务，通过 GitHub Actions 自动构建源码&发布
- **Cloudflare Pages** - 主站静态托管服务

### 2.数据库

- **Neon** - 用于 Waline 评论数据持久化存储的 PostgreSQL 云数据库
- **MongoDB** - 用于 Qexo 博客管理数据存储的 NoSQL 云数据库

### 3. CI/CD 自动化& CDN

- **GitHub Actions** - 执行构建、测试、部署&同步等任务的自动化工作流
- **NPM Mirror** - NPM 镜像源CDN

## 三、参考文档

- **Redefine Docs** - Redefine 主题官方文档
- **Hexo 官方文档** - Hexo 博客框架文档
