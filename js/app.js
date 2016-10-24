// Okta APP lib

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

};

// A $( document ).ready() block.
$( document ).ready(function() {
	var sDebug = $('#dbg_log').html()
  $('#dbg_log').html('');
  $('#dbg_log').html('current url: <br>'+ window.location.href + '<br>' + sDebug);
  
  var url=document.URL.split('#')[1];
    if(url == undefined){
        url = '';
    }

    if(url != ''){
 			log('Status: id_token found in url');
 			decodeToken();
    } else {
 			log('Status: no id_token found in url');
   };
});

$('#btn_authorize').click(function() {
	getToken();
});

$('#btn_home').click(function() {
	window.location.href = window.location.pathname
});

$('#btn_inapp2').click(function() {

console.log('start test inapp2');

var auth_url = 'https://randomcompany.okta-emea.com/oauth2/v1/authorize';
var client_id = 'ZjHH7CYE8VKqjhoC7dAI';
var redirect_uri = 'file:///android_asset/www/index.html';
var response_type = 'id_token'
var scope = 'openid profile';
var nonce = 'someNonce';
var state = 'someState';
var login_url = auth_url + '?' + $.param({ client_id: client_id, redirect_uri: redirect_uri, response_type: response_type, scope: scope, nonce: nonce, state: state});


var ref2 = window.open(login_url, '_self', 'location=no');
ref2.addEventListener('loaderror', function(event2) { alert('error on '+event2.url); });


var ref = window.open(login_url, '_self', 'location=no');
	ref.addEventListener('loadstop', function(event) { 
		console.log('addEventListener triggered');
		console.log(event);
		if(typeof event.url != 'undefined') {
			console.log('callback says there is a loginscreen');
		} else {
			console.log('callback says there was already a token available');
			console.log(event.url);
			var sIdToken = getTokenFromUrl(event.url);
			ref.close;
		}
		console.log('TOKEN: '+sIdToken);
	});
	ref.addEventListener('loaderror', function(event) { 
		console.log('An error occured in the inapp browser');
	});
		console.log('end test inapp2');
	});

$('#btn_openbrowser').click(function() {
//	log('Open browser');
//	$.ajax({
//	  url: "https://randomcompany.okta-emea.com/login/signout",
//	  context: document.body
//	}).done(function() {
//	  window.location.href = window.location.pathname
//	});	
	
	
	window.location.replace('https://randomcompany.okta-emea.com/login/signout?fromURI=https://randomcompany.nl/rcapp/');
	
	
});

$('#btn_inapp3').click(function() {
	var ref2 = window.open('https://randomcompany.okta-emea.com/oauth2/v1/authorize?idp=0oacy8jkfxWnxwgPn0i6&client_id=eiXCFnbZE1LzT7ahtOwH&response_type=id_token&scope=openid%20email%20profile&redirect_uri=file:///android_asset/www/index.html&state=someState&nonce=someNonce', '_black', 'location=no');
	ref2.addEventListener('loadstop', function(event) { 
		console.log('aap geladen');	
	})
});


$('#btn_inapplogin').click(function() {
var auth_url = 'https://randomcompany.okta-emea.com/oauth2/v1/authorize';
var client_id = 'ZjHH7CYE8VKqjhoC7dAI';
var redirect_uri = 'file:///android_asset/www/index.html';
var response_type = 'id_token'
var scope = 'openid profile';
var nonce = 'someNonce';
var state = 'someState';
var login_url = auth_url + '?' + $.param({ client_id: client_id, redirect_uri: redirect_uri, response_type: response_type, scope: scope, nonce: nonce, state: state});

var loginWindow = window.open(login_url, '_blank', 'location=no');


});



$('#btn_closesession').click(function() {
	closeSession()
});

$('#btn_getsession').click(function() {
	getSession()
});
