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
//	window.location.href = window.location.pathname
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstart', function(event) { alert(event.url); });

});

$('#btn_openbrowser').click(function() {
//	log('Open browser');
//	$.ajax({
//	  url: "ttps://platformdemo-admin.oktapreview.com/login/signout",
//	  context: document.body
//	}).done(function() {
//	  window.location.href = window.location.pathname
//	});	
	
	
	window.open('https://www.randomcompany.nl/rcapp/');
	
	
});

$('#btn_inapplogin').click(function() {
var auth_url = 'https://platformdemo-admin.oktapreview.com/oauth2/v1/authorize';
var client_id = 'ZjHH7CYE8VKqjhoC7dAI';
var redirect_uri = location.protocol + '//' + location.host + location.pathname;
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
