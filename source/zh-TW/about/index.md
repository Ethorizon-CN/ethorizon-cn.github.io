---
comment: true
date: '2026-06-30T19:12:29+08:00'
title: 關於
updated: '2026-08-09T21:32:50.407+08:00'
---
## 簡介

本站是 EtherformTM 的個人部落格站，使用 [Hexo](https://hexo.io) 主題 [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) 設定並生成頁面，同時透過提供的 HTML 注入功能加入了一些自己的內容。
{% callout type="info" title="存取說明" %}
由於本站涉及 GitHub、Cloudflare 相關內容，故存取速度較慢為正常現象。[GitHub 倉庫](https://github.com/Ethorizon-CN/ethorizon-cn.github.io)
{% endcallout %}

{% callout type="info" title="致版權方" %}

本站所有內容均已開源於 GitHub 且無商業性質或潛在商業價值，也不會用於商業用途。本人不會從中牟取任何商業利益。如確有侵權，請第一時間[聯繫本人刪除](/)，聯絡方式見本站主頁第一屏右下角。

{% endcallout %}

## 你可能想問的 ~~雖然也不會有人問就是了~~

1. **Q** - 全站字體？
   **A** - 主要字體：由<ruby>[蒙納字庫](https://cn.monotype-asia.com/)<rp>（</rp><rt>[Monotype](https://monotype.com)</rt><rp>）</rp></ruby>為騰訊定製的中文、假名和西文字體<ruby>騰訊體<rp>（<rt>TencentSans</rt><rp>）</rp></ruby>W7 和<ruby>騰訊體<rp>（<rt>TencentSans</rt><rp>）</rp></ruby>W3。
   {% callout type="warn" title="使用說明" %}
   由於該字體為非商用免費字體，故切忌用於商業用途，如若違反後果自負。[字體說明](https://cn.monotype-asia.com/portfolio/tencent-sans)
   {% endcallout %}
   程式碼區塊字體：GitHub 開源字體 Hack。[GitHub 倉庫](https://github.com/source-foundry/Hack)
2. **Q** - 下面的字元畫怎麼做的？
   **A** - 這種字元畫就是 ASCII Art / CLI Banner，網上隨便搜一下就有，找個喜歡的字體複製貼上就可以了。
   {% callout type="info" title="使用說明" %}
   ASCII Art 高度依賴每行字元的一一對應，因而如果你希望在不同裝置上都能呈現良好的效果，請使用<ruby>等寬字體<rp>（</rp><rt>Monospace</rt><rp>）</rp></ruby>或在生成時選擇包含等寬字元的版本。
   {% endcallout %}

...

## 鳴謝

1. [Redefine 主題](https://github.com/EvanNotFound/hexo-theme-redefine)[及其作者](https://ohevan.com/) ~~- ！？強強？！~~
2. [DigitalPlat](https://digitalplat.org/) - 提供了免費二級域名 ~~免費的那還說啥了~~
3. <ruby>[Cloudflare](https://cloudflare.com)<rt>~~克勞德弗萊爾（硬核音譯~~</rt></ruby> - 提供了免費靜態頁面託管服務 ~~克勞德弗萊爾賽博大善人的名號可不是白來的（）~~
4. [MCBLOCK 方塊工坊桌布站](https://mcblock.top/wallpapers) - 提供了極精美的 Minecraft 桌布
5. [DeepSeek](https://deepseek.com/) - 給予了程式碼上的幫助
6. [chengfeng3012](https://cf3012.cn) - 部落格給予了我一定的參考
7. [LightMC](https://lightmc.dpdns.org/) ~~- 有點強，，，~~

...

——致以由衷的感謝，沒有他們也就不會有現在的 [etherform.dpdns.org](/)。

如果你有什麼想對我說的，又或是吐槽本站的<ruby>bug<rt>~~石山程式碼~~</rt></ruby>，可以[聯繫我](/)]或直接在下面評論~

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
