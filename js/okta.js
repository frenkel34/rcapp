// Okta JS lib

function log(oPayload) {
	alert(oPayload);
}

function openBrowser() {
   log('starting to open browser');
   var url = 'https://cordova.apache.org';
   var target = '_blank';
   var options = "location=yes"
   var ref = cordova.InAppBrowser.open(url, target, options);
   log('starting to set event listeners');

   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loadloaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

  log('waiting for it...');

   function loadstartCallback(event) {
      log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      log('Loading error: ' + error.message)
   }

   function exitCallback() {
      log('Browser is closed...')
   }
}
