// 此处写入只在页面加载后执行一次的代码
const EtherformTM = `
                                                                                                                               
 ██████████  █████    █████                            ██████                                      ███████████ ██████   ██████ 
░░███░░░░░█ ░░███    ░░███                            ███░░███                                    ░█░░░███░░░█░░██████ ██████  
 ░███  █ ░  ███████   ░███████    ██████  ████████   ░███ ░░░   ██████   ████████  █████████████  ░   ░███  ░  ░███░█████░███  
 ░██████   ░░░███░    ░███░░███  ███░░███░░███░░███ ███████    ███░░███ ░░███░░███░░███░░███░░███     ░███     ░███░░███ ░███  
 ░███░░█     ░███     ░███ ░███ ░███████  ░███ ░░░ ░░░███░    ░███ ░███  ░███ ░░░  ░███ ░███ ░███     ░███     ░███ ░░░  ░███  
 ░███ ░   █  ░███ ███ ░███ ░███ ░███░░░   ░███       ░███     ░███ ░███  ░███      ░███ ░███ ░███     ░███     ░███      ░███  
 ██████████  ░░█████  ████ █████░░██████  █████      █████    ░░██████   █████     █████░███ █████    █████    █████     █████ 
░░░░░░░░░░    ░░░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░      ░░░░░      ░░░░░░   ░░░░░     ░░░░░ ░░░ ░░░░░    ░░░░░    ░░░░░     ░░░░░  
`;


console.log(`%c欢迎来到EtherformTM的个人博客！\nPowered by%c${EtherformTM}\n%cand more.
\nSee https://etherform.dpdns.org/about.`,
  'color: #55ffff',
  'background: #008fff; background: linear-gradient(to left, #008fff 0%, #ff2333 100%);',
  'color: #55ffff'
);


function welcome() {
  const preloaderCharacterCount = theme.global.preloader.custom_message.split('').length;
  const preloaderAnimationDelay = 2500 + 35*preloaderCharacterCount;
  setTimeout(() => {
    ElementPlus.ElNotification({
      message:"<strong>欢迎来到EtherformTM的个人博客！</strong><br>Powered by Hexo & Redefine.",
      position:"top-right",
      offset:50,
      dangerouslyUseHTMLString: true
    });
  }, preloaderAnimationDelay);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded',welcome);
} else {
  welcome();
}