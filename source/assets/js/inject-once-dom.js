// dom-dependent scripts here run only once after the page loads
(function() {
    const preloaderCharacterCount = theme.global.preloader.custom_message.split('').length;
    const preloaderAnimationDelay = 2500 + 35*preloaderCharacterCount;
    setTimeout(() => {
        ElementPlus.ElNotification({
        message:"<strong>欢迎来到 EtherformTM 的个人博客！</strong><br>Powered by Hexo & Redefine.",
        position:"top-right",
        offset:50,
        duration: 2000,
        dangerouslyUseHTMLString: true
        });
    }, preloaderAnimationDelay);
})();