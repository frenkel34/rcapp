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


$('#btn_closesession').click(function() {
	closeSession()
});

$('#btn_getsession').click(function() {
	getSession()
});
