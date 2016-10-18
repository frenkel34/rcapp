// Okta APP lib

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

};

// A $( document ).ready() block.
$( document ).ready(function() {
  $('#lbl_currenturl').text(window.location.href);
});

$('#btn_authorize').click(function() {
	log('start init');
	var authClient = new OktaAuth({
	  url: 'https://randomcompany.okta-emea.com',
	  clientId: 'ZjHH7CYE8VKqjhoC7dAI',
	  redirectUri: 'file:///android_asset/www/index.html';
	});
	log('start options');
	var options = {
	  responseType: 'id_token',
	  scopes: ['openid', 'email']
	};
	authClient.token.getWithRedirect(options);
	
	// If the token is in the url after the redirect
	authClient.token.parseFromUrl()
	.then(function(tokenOrTokens) {
	  // Manage token or tokens
		log('then (Y)');
	})
	.catch(function(err) {
	  // Handle OAuthError
		log('catch (N)');
	});


});

$('#btn_openbrowser').click(function() {
	log('Open browser');
	openBrowser('http://www.aap.nl');
});