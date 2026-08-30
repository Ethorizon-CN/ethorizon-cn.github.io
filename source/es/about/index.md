---
comment: true
date: '2026-06-30T19:12:29+08:00'
title: Acerca de
updated: '2026-08-30T15:07:58.374+08:00'
---
## Introducción

Este sitio es el blog personal de EtherformTM, construido con el tema [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) para [Hexo](https://hexo.io), y mejorado con contenido personalizado mediante su función de inyección HTML.
{% callout type="info" title="Notas de acceso" %}
Debido a que este sitio utiliza GitHub y Cloudflare, la velocidad de carga puede ser más lenta de lo normal. [Repositorio de GitHub](https://github.com/Ethorizon-CN/ethorizon-cn.github.io)
{% endcallout %}

{% callout type="info" title="Para los titulares de derechos de autor" %}

Todo el contenido de este sitio es de código abierto en GitHub y no tiene naturaleza comercial ni valor potencial, ni se utilizará con fines comerciales. No obtengo ningún beneficio comercial de ello. Si hay alguna infracción, por favor [contácteme para eliminarlo](/); los detalles de contacto se encuentran en la parte inferior derecha de la primera pantalla de la página principal.

{% endcallout %}

## Preguntas frecuentes (aunque probablemente nadie pregunte)

1. **P** - ¿Qué fuente se usa en todo el sitio?
   **R** - Fuente principal: TencentSans W7 y TencentSans W3, una fuente personalizada china, kana y latina diseñada por [Monotype](https://monotype.com) para Tencent.
   {% callout type="warn" title="Nota de uso" %}
   Esta fuente no es gratuita para uso comercial; no la use con fines comerciales. La violación corre por su cuenta. [Detalles de la fuente](https://cn.monotype-asia.com/portfolio/tencent-sans)
   {% endcallout %}
   Fuente para bloques de código: Hack, una fuente de código abierto de GitHub. [Repositorio de GitHub](https://github.com/source-foundry/Hack)
2. **P** - ¿Cómo se hizo el arte ASCII de abajo?
   **R** - Eso es arte ASCII / CLI Banner. Solo busque en línea, elija una fuente que le guste, cópiela y péguela.
   {% callout type="info" title="Nota de uso" %}
   El arte ASCII depende en gran medida de la alineación de caracteres por línea. Para asegurar una buena visualización en diferentes dispositivos, use una fuente Monospace o elija una versión que incluya caracteres monoespaciados al generarla.
   {% endcallout %}

...

## Agradecimientos

1. [Tema Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) [y su autor](https://ohevan.com/) ~~- ¡¿Increíble?!~~
2. [DigitalPlat](https://digitalplat.org/) - Proporcionó un subdominio gratuito ~~Gratis, qué más se puede pedir~~
3. [Cloudflare](https://cloudflare.com) - Proporcionó alojamiento gratuito de páginas estáticas ~~Cloudflare, el ciber-bienhechor, se gana su fama ()~~
4. [MCBLOCK Wallpaper](https://mcblock.top/wallpapers) - Proporcionó fondos de pantalla de Minecraft exquisitos
5. [DeepSeek](https://deepseek.com/) - Ayudó con el código
6. [chengfeng3012](https://cf3012.cn) - Su blog me dio inspiración
7. [LightMC](https://lightmc.dpdns.org/) ~~- Bastante impresionante,,,~~

...

— Un sincero agradecimiento a todos ellos; sin ellos, [etherform.dpdns.org](/) no existiría.

Si tiene algo que decirme, o quiere quejarse de un <ruby>bug<rp>（</rp><rt>~~código espagueti~~</rt><rp>）</rp></ruby> en este sitio, no dude en [contactarme](/) o dejar un comentario abajo~

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
