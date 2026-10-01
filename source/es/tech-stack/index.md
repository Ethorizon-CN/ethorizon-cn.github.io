---
date: '2026-06-30T19:12:17+08:00'
title: Stack tecnológico
updated: '2026-07-26T15:37:23.606+08:00'
---
Esta página recoge el stack tecnológico principal que interviene en el desarrollo y el mantenimiento de este sitio, abarcando tanto el frontend como el backend y otros aspectos.

## I. Frontend

### 1. Entorno de desarrollo y editor

- **Windows 11 25H2** - Sistema operativo del entorno de desarrollo local
- **Microsoft Visual Studio Code** - Editor de código principal
- **Node.js 22.17.1** - Entorno de ejecución de JavaScript, la base sobre la que funcionan Hexo y sus plugins
- **NPM** - Gestor de paquetes de Node.js, usado para instalar y gestionar las dependencias del proyecto
- **Typora (en desuso)** - Se usaba para escribir en Markdown; se abandonó por problemas de compatibilidad con el tema~~en realidad sobre todo porque este programa es de pago~~
- **DeepSeek** - Consulta de código y generación asistida
- **GitHub Copilot** - IA de autocompletado y asistencia de código integrada en VSCode

### 2. Framework y tema del blog

- **Hexo 8.1.2** - Framework de blog estático basado en Node.js
- **hexo-theme-redefine v2.9.0** - El tema que utilizo actualmente
- **EJS** - Motor de plantillas del tema
- **Tailwind CSS** - Framework de estilos del tema
- **Stylus** - Preprocesador de CSS
- **Font Awesome** - Biblioteca de iconos de código abierto que aporta iconos vectoriales al blog

### 3. Plugins principales y extensiones de funciones

- **hexo-blog-encrypt** - Plugin de cifrado de artículos
- **MathJax** - Motor de renderizado de fórmulas matemáticas LaTeX
- **hexo-generator-searchdb** - Genera la base de datos del índice de búsqueda y, junto con el frontend, habilita la búsqueda de texto completo dentro del sitio
- **hexo-wordcount** - Recuento de palabras de los artículos
- **nodejieba** - Biblioteca de segmentación de texto chino usada para recomendar artículos
- **aplayer** - Reproductor de música
- **hexo-all-minifier** - Plugin de minificación de recursos que optimiza la velocidad de carga comprimiendo HTML / CSS / JS / imágenes y otros recursos
- **Open Graph** - Optimización de las etiquetas de compartición social, mejora la vista previa de los enlaces en plataformas como Facebook y Twitter
- **Swup** - Permite cambiar de página sin recargarla y ofrece una experiencia de navegación fluida propia de una aplicación de página única

## II. Backend

### 1. Servicios de despliegue y alojamiento

- **GitHub** - Ofrece alojamiento del código fuente
- **Cloudflare** - Ofrece aceleración mediante CDN, protección de seguridad, gestión de dominios y resolución DNS
- **Vercel** - Plataforma sin servidor donde se despliegan el sistema de comentarios Waline y el panel de administración del blog Qexo
- **DigitalPlat** - Proporciona el subdominio gratuito dpdns.org
- **GitHub Repository** - Repositorio de código fuente, aloja todo el código del blog y los archivos del sitio
- **GitHub Secrets** - Almacena variables sensibles, como las claves API que necesita el flujo de CI/CD
- **GitHub Pages** - Servicio de Pages de reserva; compila el código fuente y lo publica automáticamente mediante GitHub Actions
- **Cloudflare Pages** - Servicio de alojamiento estático del sitio principal

### 2. Bases de datos

- **Neon** - Base de datos PostgreSQL en la nube usada para el almacenamiento persistente de los datos de los comentarios de Waline
- **MongoDB** - Base de datos NoSQL en la nube usada para almacenar los datos de gestión del blog de Qexo

### 3. Automatización CI/CD y CDN

- **GitHub Actions** - Flujos de trabajo automatizados que ejecutan tareas de compilación, pruebas, despliegue y sincronización
- **NPM Mirror** - CDN de espejo de NPM

## III. Documentación de referencia

- **Redefine Docs** - Documentación oficial del tema Redefine
- **Documentación oficial de Hexo** - Documentación del framework de blog Hexo
