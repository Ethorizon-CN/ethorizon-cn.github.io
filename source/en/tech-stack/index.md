---
date: '2026-06-30T19:12:17+08:00'
title: Tech Stack
updated: '2026-07-26T15:37:23.606+08:00'
---
This page lists the main tech stack involved in developing & maintaining this site, covering both frontend and backend and more.

## I. Frontend

### 1. Development Environment & Editor

- **Windows 11 25H2** - Local development operating system environment
- **Microsoft Visual Studio Code** - Primary code editor
- **Node.js 22.17.1** - JavaScript runtime, the foundation on which Hexo and its plugins run
- **NPM** - Node.js package manager, used to install & manage project dependencies
- **Typora (deprecated)** - Once used for Markdown writing, deprecated due to theme compatibility issues~~mainly because this software costs money, actually~~
- **DeepSeek** - Code consulting & assisted generation
- **GitHub Copilot** - Code completion & assistive AI integrated into VSCode

### 2. Blog Framework & Theme

- **Hexo 8.1.2** - A Node.js-based static blog framework
- **hexo-theme-redefine v2.9.0** - The theme currently in use
- **EJS** - Theme template engine
- **Tailwind CSS** - Theme styling framework
- **Stylus** - CSS preprocessor
- **Font Awesome** - Open-source icon library providing vector icons for the blog

### 3. Core Plugins & Feature Extensions

- **hexo-blog-encrypt** - Post encryption plugin
- **MathJax** - LaTeX math formula rendering engine
- **hexo-generator-searchdb** - Generates the search index database, working with the frontend to provide full-text site search
- **hexo-wordcount** - Post word count
- **nodejieba** - Chinese word segmentation library used for post recommendations
- **aplayer** - Music player
- **hexo-all-minifier** - Asset minification plugin that optimizes loading speed by minifying HTML / CSS / JS / images and other assets
- **Open Graph** - Social sharing tag optimization, improving how links preview on platforms such as Facebook and Twitter
- **Swup** - Enables refresh-free page transitions, providing a smooth single-page-application-like browsing experience

## II. Backend

### 1. Deployment & Hosting Services

- **GitHub** - Provides source code hosting services
- **Cloudflare** - Provides CDN acceleration, security protection, domain management & DNS resolution services
- **Vercel** - The serverless platform hosting the Waline comment system & the Qexo blog admin backend
- **DigitalPlat** - Provides the free dpdns.org subdomain
- **GitHub Repository** - Source code repository, hosting all of the blog's source code & site files
- **GitHub Secrets** - Stores sensitive variables such as API keys required by the CI/CD pipeline
- **GitHub Pages** - Backup Pages service, automatically building the source & publishing via GitHub Actions
- **Cloudflare Pages** - Static hosting service for the main site

### 2. Databases

- **Neon** - The PostgreSQL cloud database used for persistent storage of Waline comment data
- **MongoDB** - The NoSQL cloud database used for Qexo blog management data storage

### 3. CI/CD Automation & CDN

- **GitHub Actions** - Automated workflows that run tasks such as building, testing, deploying & syncing
- **NPM Mirror** - NPM mirror source CDN

## III. Reference Documentation

- **Redefine Docs** - Official documentation for the Redefine theme
- **Hexo Official Docs** - Documentation for the Hexo blog framework
