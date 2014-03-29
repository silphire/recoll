console.log("browser action");
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "chrome/index.html"});
});

