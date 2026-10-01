---
date: '2026-06-30T19:12:17+08:00'
title: Stack technique
updated: '2026-07-26T15:37:23.606+08:00'
---
Cette page recense les principales technologies que l'auteur a mobilisées pour développer & maintenir ce site, couvrant aussi bien le front-end que le back-end et bien d'autres aspects.

## I. Front-end

### 1. Environnement de développement & éditeurs

- **Windows 11 25H2** - Environnement d'exploitation pour le développement local
- **Microsoft Visual Studio Code** - Éditeur de code principal
- **Node.js 22.17.1** - Runtime JavaScript, socle d'exécution de Hexo et de ses plugins
- **NPM** - Gestionnaire de paquets Node.js, utilisé pour installer & gérer les dépendances du projet
- **Typora (abandonné)** - Servait autrefois à écrire en Markdown, abandonné pour des problèmes de compatibilité avec le thème ~~en réalité, c'est surtout parce que ce logiciel est payant~~
- **DeepSeek** - Conseil sur le code & génération assistée
- **GitHub Copilot** - IA d'autocomplétion & d'assistance intégrée à VSCode

### 2. Framework de blog & thème

- **Hexo 8.1.2** - Framework de blog statique basé sur Node.js
- **hexo-theme-redefine v2.9.0** - Le thème actuellement utilisé
- **EJS** - Moteur de templates du thème
- **Tailwind CSS** - Framework de styles du thème
- **Stylus** - Préprocesseur CSS
- **Font Awesome** - Bibliothèque d'icônes open source fournissant des icônes vectorielles au blog

### 3. Plugins essentiels & extensions fonctionnelles

- **hexo-blog-encrypt** - Plugin de chiffrement des articles
- **MathJax** - Moteur de rendu des formules mathématiques LaTeX
- **hexo-generator-searchdb** - Génère la base de données d'index de recherche, couplée au front-end pour la recherche plein texte interne au site
- **hexo-wordcount** - Comptage des mots des articles
- **nodejieba** - Bibliothèque de segmentation du chinois utilisée pour les recommandations d'articles
- **aplayer** - Lecteur de musique
- **hexo-all-minifier** - Plugin de minification des ressources, qui optimise la vitesse de chargement en compressant les ressources HTML / CSS / JS / images, etc.
- **Open Graph** - Optimisation des balises de partage social, améliorant l'aperçu des liens sur des plateformes comme Facebook ou Twitter
- **Swup** - Permet des changements de page sans rechargement, offrant une navigation fluide digne d'une single page application

## II. Back-end

### 1. Services de déploiement & d'hébergement

- **GitHub** - Fournit un service d'hébergement du code source
- **Cloudflare** - Fournit l'accélération CDN, la protection de sécurité, la gestion de domaine & la résolution DNS
- **Vercel** - Plateforme serverless hébergeant le système de commentaires Waline & l'interface d'administration de blog Qexo
- **DigitalPlat** - Fournit le sous-domaine gratuit dpdns.org
- **GitHub Repository** - Dépôt du code source, hébergeant tout le code source du blog & les fichiers du site
- **GitHub Secrets** - Stocke les variables sensibles nécessaires au flux CI/CD, comme les clés API
- **GitHub Pages** - Service Pages de secours, qui construit automatiquement le code source & publie via GitHub Actions
- **Cloudflare Pages** - Service d'hébergement statique du site principal

### 2. Bases de données

- **Neon** - Base de données cloud PostgreSQL assurant le stockage persistant des données de commentaires de Waline
- **MongoDB** - Base de données cloud NoSQL assurant le stockage des données d'administration du blog Qexo

### 3. Automatisation CI/CD & CDN

- **GitHub Actions** - Workflows automatisés exécutant les tâches de build, de test, de déploiement & de synchronisation
- **NPM Mirror** - CDN miroir de NPM

## III. Documentation de référence

- **Redefine Docs** - Documentation officielle du thème Redefine
- **Documentation officielle Hexo** - Documentation du framework de blog Hexo
