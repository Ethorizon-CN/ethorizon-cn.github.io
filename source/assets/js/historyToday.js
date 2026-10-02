(function() {
  let htOptions = {
    "api": "https://tmini.net/api/today?type=json",
    "container":"",
    "title":"",
    "failMessage":"获取往昔今日数据失败"
  }
  if (htContent && htOptions.title && htOptions.api && htOptions.container) {
    writeHtContent(htContent, htTitle, container);
  } else {
    window.htContent = fetch(htOptions.api).then(r => r.json());
    writeHtContent(htContent, htTitle, container);
  }
  function writeHtContent(htc, htt, con) {
    htc.then(({code, date, events}) => {
      if (code === 200) {
        return htOptions.failMessage;
      } else {
        // con.innerHTML = 
      }
    });
  }
})();