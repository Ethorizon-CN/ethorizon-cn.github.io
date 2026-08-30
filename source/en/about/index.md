---
comment: true
date: '2026-06-30T19:12:29+08:00'
title: About
updated: '2026-08-30T20:28:56.025+08:00'
---
## Introduction

This site is the personal blog website of EtherformTM, built with [Hexo](https://hexo.io) theme [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine), and enhanced with custom content via its HTML injection feature.
{% callout type="info" title="Access-Notes" %}
Since this site involves GitHub and Cloudflare, slower loading speeds are normal. [GitHub Repository](https://github.com/Ethorizon-CN/ethorizon-cn.github.io)
{% endcallout %}

{% callout type="info" title="To-Copyright-Holders" %}

All content on this site is open-sourced on GitHub and has no commercial nature or potential value, nor will it be used for commercial purposes. I do not seek any commercial gain from it. If there is indeed infringement, please [contact me to remove it](/); contact details can be found at the bottom right of the first screen on the homepage.

{% endcallout %}

## You Might Want to Ask ~~though probably nobody will~~

1. **Q** - What font is used across the site?
   **A** - Main font: A custom Chinese, Kana, and Latin font TencentSans W7 and TencentSans W3, designed by <ruby>[Monotype](https://monotype.com)<rp>（</rp><rt>[Monotype Asia](https://cn.monotype-asia.com/)</rt><rp>）</rp></ruby> for Tencent.
   {% callout type="warn" title="Usage Note" %}
   This font is not free for commercial use; do not use it commercially. Violation is at your own risk. [Font Details](https://cn.monotype-asia.com/portfolio/tencent-sans)
   {% endcallout %}
   Code block font: The open-source GitHub font Hack. [GitHub Repository](https://github.com/source-foundry/Hack)
2. **Q** - How was the ASCII art below made?
   **A** - That's ASCII Art / CLI Banner. Just search online, pick a font you like, copy and paste.
   {% callout type="info" title="Usage Note" %}
   ASCII Art relies heavily on character alignment per line. To ensure good display across devices, please use a monospace font or choose a version that includes monospace characters when generating.
   {% endcallout %}

...

## Acknowledgements

1. [Theme Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) [and its author](https://ohevan.com/) ~~- !? Amazing?!~~
2. [DigitalPlat](https://digitalplat.org/) - Provided a free subdomain ~~Free stuff, what else can I say~~
3. [Cloudflare](https://cloudflare.com)<!-- ~~Cloudflare (hardcore transliteration)~~ --> - Provided free static page hosting ~~Cloudflare, the cyber-good Samaritan, lives up to its name ()~~
4. [MCBLOCK Wallpaper](https://mcblock.top/wallpapers) - Provided exquisite Minecraft wallpapers
5. [DeepSeek](https://deepseek.com/) - Helped with code
6. [chengfeng3012](https://cf3012.cn) - His blog gave me some inspiration
7. [LightMC](https://lightmc.dpdns.org/) ~~- Kinda impressive,,,~~

...

— Sincere thanks to all of them; without them, [etherform.dpdns.org](/) would not exist.

If you have something to say to me, or want to complain about <ruby>bugs<rp>（</rp><rt>~~spaghetti code~~</rt><rp>）</rp></ruby> of this site, feel free to [contact me](/) or leave a comment below~

<link rel="stylesheet" href="/assets/fonts/Consolas/Consolas.css" />
<style>
  #asciiArt {
    padding-left: var(--left-right-edge-fade-region);
    padding-right: var(--left-right-edge-fade-region);
    background: linear-gradient(to left, #008fff 0%, #ff2333 100%);
    font-size: 0.7rem;
    white-space:pre;
    font-family: "Consolas", "SF Mono", "Noto Sans Mono", monospace;
    text-align:center;
    overflow-x:scroll;
  }
  #asciiArt::-webkit-scrollbar {
    width: 0px;
  }
</style>

<div>
  <div style='color: #55aaff'>Powered by</div>
  <div id='asciiArt' class='left-right-edge-fade'></div>
  </div>
  <div style='color: #55aaff'>and more.See <a href="https://etherform.dpdns.org/about">https://etherform.dpdns.org/about</a>.</div>
</div>
<script data-swup-reload-script type="text/javascript">
  document.getElementById('asciiArt').innerHTML = `
 ██████████  █████    █████                            ██████                                      ███████████ ██████   ██████ 
░░███░░░░░█ ░░███    ░░███                            ███░░███                                    ░█░░░███░░░█░░██████ ██████  
 ░███  █ ░  ███████   ░███████    ██████  ████████   ░███ ░░░   ██████   ████████  █████████████  ░   ░███  ░  ░███░█████░███  
 ░██████   ░░░███░    ░███░░███  ███░░███░░███░░███ ███████    ███░░███ ░░███░░███░░███░░███░░███     ░███     ░███░░███ ░███  
 ░███░░█     ░███     ░███ ░███ ░███████  ░███ ░░░ ░░░███░    ░███ ░███  ░███ ░░░  ░███ ░███ ░███     ░███     ░███ ░░░  ░███  
 ░███ ░   █  ░███ ███ ░███ ░███ ░███░░░   ░███       ░███     ░███ ░███  ░███      ░███ ░███ ░███     ░███     ░███      ░███  
 ██████████  ░░█████  ████ █████░░██████  █████      █████    ░░██████   █████     █████░███ █████    █████    █████     █████ 
 ░░░░░░░░░░    ░░░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░      ░░░░░      ░░░░░░   ░░░░░     ░░░░░ ░░░ ░░░░░    ░░░░░    ░░░░░     ░░░░░ 
`
</script>
