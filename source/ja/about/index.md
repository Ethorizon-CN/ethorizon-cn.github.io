---
comment: true
date: '2026-06-30T19:12:29+08:00'
title: このサイトについて
updated: '2026-08-30T15:07:36.741+08:00'
---
## 概要

このサイトは EtherformTM の個人ブログです。[Hexo](https://hexo.io) テーマ [Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) を使用してページを生成し、提供されている HTML インジェクション機能で独自のコンテンツを追加しています。
{% callout type="info" title="アクセスについて" %}
GitHub や Cloudflare に関連するため、読み込みが遅くなる場合があります。[GitHub リポジトリ](https://github.com/Ethorizon-CN/ethorizon-cn.github.io)
{% endcallout %}

{% callout type="info" title="著作権者の皆様へ" %}

本サイトのすべてのコンテンツは GitHub 上でオープンソースとして公開されており、商業的な性質や潜在的価値はなく、商業目的で使用されることもありません。私はいかなる商業的利益も得ていません。もし著作権侵害が確認された場合は、速やかに[私に連絡して削除してください](/)。連絡先はトップページの最初の画面右下に記載されています。

{% endcallout %}

## よくある質問~~とは言っても誰も聞かないでしょうが~~

1. **Q** - サイト全体のフォントは？
   **A** - メインフォント：<ruby>TencentSans<rt>テンセントサンズ</rt></ruby> W7 および <ruby>TencentSans<rt>テンセントサンズ</rt></ruby> W3。これらは<ruby>[Monotype](https://monotype.com)<rt>モノタイプ</rt></ruby>が Tencent 向けにカスタムデザインした中国語・仮名・欧文フォントです。
   {% callout type="warn" title="使用上の注意" %}
   このフォントは商用利用が許可されていません。商業目的での使用は固くお断りします。違反した場合の責任は負いかねます。[フォント詳細](https://cn.monotype-asia.com/portfolio/tencent-sans)
   {% endcallout %}
   コードブロックフォント：GitHub のオープンソースフォント <ruby>Hack<rt>ハック</rt></ruby>。[GitHub リポジトリ](https://github.com/source-foundry/Hack)
2. **Q** - 下にあるアスキーアートはどうやって作ったの？
   **A** - これは ASCII Art / CLI Banner です。ネットで適当に検索すれば出てきます。好きなフォントを選んでコピペするだけです。
   {% callout type="info" title="使用上の注意" %}
   ASCII Art は各行の文字の対応が重要です。異なる端末でも綺麗に表示させたい場合は、<ruby>Monospace<rt>モノスペース</rt></ruby>フォントを使用するか、等幅文字を含むバージョンを選択してください。
   {% endcallout %}

...

## 謝辞

1. [テーマ Redefine](https://github.com/EvanNotFound/hexo-theme-redefine) [とその作者](https://ohevan.com/) ~~- ！？すごい？！~~
2. [DigitalPlat](https://digitalplat.org/) - 無料のサブドメインを提供 ~~無料なら言うことなし~~
3. <ruby>[Cloudflare](https://cloudflare.com)<rt>クラウドフレア</rt></ruby> - 無料の静的ページホスティングを提供 ~~クラウドフレア、サイバーな大善人の名は伊達じゃない（）~~
4. [MCBLOCK ブロック工房壁紙サイト](https://mcblock.top/wallpapers) - 非常に美しい Minecraft の壁紙を提供
5. [DeepSeek](https://deepseek.com/) - コード作成の助け
6. [chengfeng3012](https://cf3012.cn) - ブログの参考にさせていただきました
7. [LightMC](https://lightmc.dpdns.org/) ~~- ちょっとすごい、、、~~

...

——心から感謝します。彼らがいなければ、今の [etherform.dpdns.org](/) は存在しませんでした。

何か伝えたいことや、このサイトの<ruby>バグ<rp>（</rp><rt>スパゲッティ コード</rt><rp>）</rp></ruby>について愚痴があれば、[私に連絡する](/)か、下のコメント欄にお書きください。

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
