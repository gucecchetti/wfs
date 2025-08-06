if (!document.getElementById('wfsSSOLoginManager')) {
  var script = document.createElement('script');
  script.id = 'wfsSSOLoginManager';
  script.type = 'text/javascript';
  script.src = 'https://iguatemi-test.wta-us8.wfs.cloud/workforce/SuccessFactors.do?action=wfsSSOLoginManager';
  document.head.appendChild(script);
} else if (typeof WfsSSOLoginManager != 'undefined' && WfsSSOLoginManager.isTilePollingComplete()) {
  WfsSSOLoginManager.restartTilePolling();
}

var serverUnavailableCheck = function() {
  if (typeof WfsSSOLoginManager == 'undefined') {
    var style = window.getComputedStyle(document.body);
    var serverDownMessage = 'The server could not be reached';
    var messageDiv = document.createElement('div');
    messageDiv.width = '100%';
    messageDiv.style.margin = '8px';
    messageDiv.style.fontFamily = style.fontFamily;
    messageDiv.style.fontSize = style.fontSize;
    messageDiv.innerHTML = serverDownMessage;

    var parent = document.querySelector('.sfLoadingContainer')?.parentElement;
    if (parent) {
      parent.replaceChild(messageDiv, document.querySelector('.sfLoadingContainer'));
    }
  }
};

setTimeout(serverUnavailableCheck, 10000);