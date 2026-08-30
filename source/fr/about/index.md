---
comment: true
date: '2026-06-30T19:12:29+08:00'
title: À propos
updated: '2026-08-30T15:08:16.811+08:00'
---
## Introduction

Ce site est le blog personnel d'EtherformTM, construit avec le thème [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) pour [Hexo](https://hexo.io), et enrichi de contenu personnalisé via sa fonction d'injection HTML.
{% callout type="info" title="Notes d'accès" %}
Étant donné que ce site utilise GitHub et Cloudflare, des temps de chargement plus lents sont normaux. [Dépôt GitHub](https://github.com/Ethorizon-CN/ethorizon-cn.github.io)
{% endcallout %}

{% callout type="info" title="Aux détenteurs de droits d'auteur" %}

Tout le contenu de ce site est open source sur GitHub et n'a aucune nature commerciale ni valeur potentielle, et ne sera pas utilisé à des fins commerciales. Je n'en tire aucun bénéfice commercial. En cas d'infraction avérée, veuillez [me contacter pour le supprimer](/); les coordonnées figurent en bas à droite du premier écran de la page d'accueil.

{% endcallout %}

## Foire aux questions (même si personne ne demandera probablement)

1. **Q** - Quelle police est utilisée sur tout le site ?
   **R** - Police principale : TencentSans W7 et TencentSans W3, une police chinoise, kana et latine personnalisée conçue par [Monotype](https://monotype.com) pour Tencent.
   {% callout type="warn" title="Note d'utilisation" %}
   Cette police n'est pas libre de droits pour un usage commercial ; ne l'utilisez pas à des fins commerciales. Toute violation est sous votre responsabilité. [Détails de la police](https://cn.monotype-asia.com/portfolio/tencent-sans)
   {% endcallout %}
   Police pour les blocs de code : Hack, une police open source de GitHub. [Dépôt GitHub](https://github.com/source-foundry/Hack)
2. **Q** - Comment a été réalisé l'art ASCII ci-dessous ?
   **R** - C'est de l'art ASCII / CLI Banner. Il suffit de chercher en ligne, choisir une police qui vous plaît, copier et coller.
   {% callout type="info" title="Note d'utilisation" %}
   L'art ASCII dépend fortement de l'alignement des caractères par ligne. Pour garantir un bon affichage sur différents appareils, utilisez une police Monospace ou choisissez une version incluant des caractères à chasse fixe lors de la génération.
   {% endcallout %}

...

## Remerciements

1. [Thème Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) [et son auteur](https://ohevan.com/) ~~- !? Incroyable?!~~
2. [DigitalPlat](https://digitalplat.org/) - A fourni un sous-domaine gratuit ~~Gratuit, que demander de plus~~
3. [Cloudflare](https://cloudflare.com) - A fourni un hébergement gratuit de pages statiques ~~Cloudflare, le cyber-bienfaiteur, mérite bien sa réputation ()~~
4. [MCBLOCK Wallpaper](https://mcblock.top/wallpapers) - A fourni de magnifiques fonds d'écran Minecraft
5. [DeepSeek](https://deepseek.com/) - A aidé pour le code
6. [chengfeng3012](https://cf3012.cn) - Son blog m'a inspiré
7. [LightMC](https://lightmc.dpdns.org/) ~~- Plutôt impressionnant,,,~~

...

— Un sincère merci à tous ; sans eux, [etherform.dpdns.org](/) n'existerait pas.

Si vous avez quelque chose à me dire, ou si vous voulez vous plaindre d'un <ruby>bug<rp>（</rp><rt>~~code spaghetti~~</rt><rp>）</rp></ruby> sur ce site, n'hésitez pas à [me contacter](/) ou à laisser un commentaire ci-dessous~

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
