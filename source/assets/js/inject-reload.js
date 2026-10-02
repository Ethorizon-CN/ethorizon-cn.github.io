// 此处写入每次切页&重新加载时都会执行的代码
(function () {
    function inject() {
    // 右键菜单
    // const RMBMenu = document.getElementById('RMBMenu');

    // document.addEventListener('contextmenu', e=>{
    //     e.preventDefault();
    //     RMBMenu.className = 'home-article-item RMBMenu-visible';
    //     RMBMenu.style.left = e.clientX + 'px';
    //     RMBMenu.style.top = e.clientY + 'px';
    //     RMBMenu.style.opacity = '0.8';
    //     RMBMenu.showPopover();
    // });

    // document.addEventListener('click', e=>{
    //     if (RMBMenu && !RMBMenu.contains(e.target)) {
    //     RMBMenu.className = 'home-article-item RMBMenu-invisible';
    //     RMBMenu.style.opacity = '0';
    //     RMBMenu.hidePopover();
    //     }
    // });


    // 历史上的今天
    const htName = document.getElementsByClassName('site-name')[0];
    const htToday = document.createElement('div');
    const htList = document.getElementsByClassName('announcement-outside')[0];
    if (window.htContent) {
        window.htContent = fetch('https://tmini.net/api/today?type=json').then(r => r.json());
    } else return;
    if (htName && htList) {
        htName.innerHTML = '历史上的今天';
        htName.appendChild(htToday);
        htList.className = 'announcement-outside up-down-edge-fade';
        htContent.then(({ code, date, events }) => {
            if (code !== 200) {
            return;
            }
            htToday.innerHTML = '<small>(' + date + ')</small>';
            htList.innerHTML = events.map(e => `
            <div class="ht-list-item">
                <a href="${e.link}" target="_blank" title="点击跳转百度百科条目">
                <b>${e.year}年</b> - ${e.title}<br>
                </a>
                <small>${e.desc.slice(0, 50)}...</small><br>
            </div>
            `).join('');
            document.getElementsByClassName('ht-list-item')[document.getElementsByClassName('ht-list-item').length - 1].style.borderBottom = 'none';
        })
    };

    // 全屏
    // const documentElement = document.documentElement;
    // let isFullScreen = false;

    // document.addEventListener('fullscreenchange', () => {
    //     isFullScreen = !isFullScreen;
    // });
    // function toggleFullScreen() {
    //     if (isFullScreen == false) {
    //     try {
    //         if (documentElement.requestFullscreen) {
    //         documentElement.requestFullscreen();
    //         } else if (documentElement.mozRequestFullScreen) { // Firefox
    //         documentElement.mozRequestFullScreen();
    //         } else if (documentElement.webkitRequestFullscreen) { // Chrome & Safari
    //         documentElement.webkitRequestFullscreen();
    //         } else if (documentElement.msRequestFullscreen) { // IE
    //         documentElement.msRequestFullscreen();
    //         }
    //     } catch (error) {
    //         console.error("尝试启用全屏模式时出错：", error);
    //     }
    //     } else if (isFullScreen == true) {
    //     try {
    //         if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //         } else if (document.mozCancelFullScreen) { // Firefox
    //         document.mozCancelFullScreen();
    //         } else if (document.webkitExitFullscreen) { // Chrome & Safari
    //         document.webkitExitFullscreen();
    //         } else if (document.msExitFullscreen) { // IE
    //         document.msExitFullscreen();
    //         }
    //     } catch (error) {
    //         console.error("尝试禁用全屏模式时出错：", error);
    //     }
    //     }
    //     RMBMenu.hidePopover();
    // };

    const LANG_MAP = document.querySelector('html').getAttribute('lang').split(',');
    const currentURL = swup.currentPageUrl;

    window.switchLang = function switchLang(lang) {
        function trimURL(url) {
        const escapedItems = LANG_MAP.map(item =>
            item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        const regex = new RegExp(`^/(${escapedItems.join('|')})`);
        return url.replace(regex, '');
        };
        if (lang === LANG_MAP[0]) {
        swup.navigate(trimURL(currentURL));
        } else {
        swup.navigate(`/${lang}${trimURL(currentURL)}`);
        }
    };
    };


    //在切页和页面刚加载时加载inject。如果页面还在加载中，则等待DOMContentLoaded事件触发后再执行inject
    if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',inject);
    } else {
    inject();
    }
})();