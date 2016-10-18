// Okta APP lib

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	log('start init');
	var authClient = new OktaAuth({
	  url: 'https://randomcompany.okta-emea.com',
	  clientId: 'ZjHH7CYE8VKqjhoC7dAI'
	});
		log('end init');
};

$('#btn_authorize').click(function() {
	log('Click');
});

$('#btn_openbrowser').click(function() {
	log('Open browser');
	openBrowser('http://www.aap.nl');
});