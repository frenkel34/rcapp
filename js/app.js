// Okta APP lib

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    log("window.open works well");
}

$('#btn_authorize').click(function() {
	log('Click');
});

$('#btn_openbrowser').click(function() {
	log('Open browser');
	cordova.InAppBrowser.open('http://www.aap.nl', '_blank', 'location=no');
});