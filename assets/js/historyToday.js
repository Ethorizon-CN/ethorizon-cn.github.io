(function() {
  window.historyToday = {
    options: {
      "api": "https://tmini.net/api/today?type=json",
      "container":"",
      "title":"",
      "failMessage":"获取往昔今日数据失败"
    },
    content: ""
    write: writeHtContent;
  }
  if (historyToday.content && historyToday.options.title && historyToday.options.api && historyToday.options.container) {
    writeHtContent(historyToday.content, htTitle, container);
  } else {
    window.historyToday.content = fetch(historyToday.options.api).then(r => r.json());
    writeHtContent(historyToday.content, htTitle, container);
  }
  function writeHtContent() {
    historyToday.content.then(({code, date, events}) => {
      if (code === 200) {
        return historyToday.options.failMessage;
      } else {
        historyToday.options.title.innerHTML = '<small>(' + date + ')</small>';
      }
    });
  }
})();