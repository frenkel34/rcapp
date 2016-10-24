// Okta JS lib

function log(oPayload) {
//	console.log(oPayload);
	var sDebug = $('#dbg_log').html()
  $('#dbg_log').html('');
  $('#dbg_log').html('log message: <br>'+ oPayload + '<br><br>' + sDebug +'');
  console.log(oPayload);

}

function openBrowser(url) {
	window.open(url, '_blank', 'location=no');
};

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


function getSession() {
	console.log('getting the session');
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://platformdemo.oktapreview.com/api/v1/sessions/me",
	  "method": "GET",
	  "headers": {
	    "accept": "application/json",
	    "content-type": "application/json",
	    "cache-control": "no-cache"
	  	},
	  "xhrFields" : {
	  	"withCredentials": "true" 
	  	} 
	}
	$.ajax(settings)
		.done(function (response) {
		  log(response);
			log('done getting the sessions');
		})
		.fail(function (response) {
			log('There was an error while getting the session');
		})
	
}

function closeSession() {
	console.log('getting the session');
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://platformdemo.oktapreview.com/api/v1/sessions/me",
	  "method": "DELETE",
	  "headers": {
	    "accept": "application/json",
	    "content-type": "application/json",
	    "cache-control": "no-cache"
	  	},
	  "xhrFields" : {
	  	"withCredentials": "true" 
	  	} 
	}
		$.ajax(settings).done(function (response) {
		  log(response);
			log('done closing the session');
		})
		.fail(function (response) {
			log('There was an error while closing the session');
		})
	
}

function getToken(){
    log('getToken initiated');
		var options = {
		  responseType: 'id_token',
		  scopes: ['openid', 'email']
		};
		authClient.token.getWithRedirect(options);
		log('getToken finished');
}

function decodeToken(){
    log('decodeToken initiated');
	// If the token is in the url after the redirect
	authClient.token.parseFromUrl()
	.then(function(idToken) {
	  // Manage token or tokens
		log(JSON.stringify(idToken));
		log(idToken.claims.email);
	})
	.catch(function(err) {
	  // Handle OAuthError
		log('Error processing token: '+err);
	});
	log('decodeToken finished');
}