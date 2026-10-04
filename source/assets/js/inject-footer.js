// functions here must be IIFEs for they'll be reloaded after DOMs are loaded every time the page refreshes


// load count
if (!window.loadCount) {
    window.loadCount = 1;
} else {
    window.loadCount ++;
}


// first-load notification
(function() {
    const preloaderCharacterCount = theme.global.preloader.custom_message.length;
    const preloaderAnimationDelay = 2500 + 35*preloaderCharacterCount;
    if (window.loadCount === 1) {
        setTimeout(() => {
            ElementPlus.ElNotification({
            message:"<strong>欢迎来到 EtherformTM 的个人博客！</strong><br>Powered by Hexo & Redefine.",
            position:"top-right",
            offset:50,
            duration: 2000,
            dangerouslyUseHTMLString: true
            });
        }, preloaderAnimationDelay);
    }
})();


// Right Mouse Button (RMB) Menu
// (function () {
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
// })();


// Full Screen
// (function () {
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
// })();


// history today
(function () {
    const htName = document.getElementsByClassName('site-name')[0];
    const htList = document.getElementsByClassName('announcement-outside')[0];
    const htToday = document.createElement('div');
    if (htName && htList) {
        htName.innerText = '历史上的今天';
        htName.appendChild(htToday);
        htList.classList.add('up-down-edge-fade');
        if (!window.htContent) {
            console.log('[History Today]Data does not exist, fetching.');
            window.htContent = fetch('https://tmini.net/api/today?type=json')
            .then(r => r.json())
            .catch((err) => {
                console.error('[History Today]Data fetching failed: ' , err);
                throw err;
            })
        }
        (async function() {
            window.htContent.then(({ code, date, events }) => {
                if (code !== 200) {
                    console.error('[History Today]Data fetching failed with code ' + code + '.');
                } else {
                    const escapeHTML = (str) => String(str ?? '')
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;');
                    console.log('[History Today]Data fetched successfully.');
                    htToday.innerHTML = '<small>(' + escapeHTML(date) + ')</small>';
                    htList.innerHTML = events.map(e => `
                    <div class="ht-list-item">
                        <a href="${escapeHTML(e.link)}" target="_blank" title="点击跳转百度百科条目">
                        <b>${escapeHTML(e.year)}年</b> - ${escapeHTML(e.title)}<br>
                        </a>
                        <small>${escapeHTML(e.desc).slice(0, 50)}...</small><br>
                    </div>
                    `).join('');
                    const htListItem = document.getElementsByClassName('ht-list-item');
                    if(htListItem.length >= 1) htListItem[htListItem.length - 1].style.borderBottom = 'none';
                }
            })
        })
    }
})();


// language switcher
(function () {
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
})();