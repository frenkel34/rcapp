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

var ref = window.open(login_url, '_blank', 'location=no');
ref.addEventListener('loadstop', function(event) { 
	console.log(event.url); 
	var sIdToken = event.url.hash.substr(1);
	console.log('TOKEN: '+sIdToken);
});
ref.close();
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
