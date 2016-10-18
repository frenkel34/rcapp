// Okta JS lib

function log(oPayload) {
//	console.log(oPayload);
	var sDebug = $('#dbg_log').html()
  $('#dbg_log').html('');
  $('#dbg_log').html('log message: <br>'+ oPayload + '<br><br>' + sDebug +'');

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

function DumpObject(obj)
{
  var od = new Object;
  var result = "";
  var len = 0;

  for (var property in obj)
  {
    var value = obj[property];
    if (typeof value == 'string')
      value = "'" + value + "'";
    else if (typeof value == 'object')
    {
      if (value instanceof Array)
      {
        value = "[ " + value + " ]";
      }
      else
      {
        var ood = DumpObject(value);
        value = "{ " + ood.dump + " }";
      }
    }
    result += "'" + property + "' : " + value + ", ";
    len++;
  }
  od.dump = result.replace(/, $/, "");
  od.len = len;

  return od;
}



function getToken(){
    log('getting a token');
		log('start options');
		var options = {
		  responseType: 'id_token',
		  scopes: ['openid', 'email']
		};
	
		log('get the token');
		authClient.token.getWithPopup(options);
		log('have the token');
}

function decodeToken(){
 	log('start decoding');
	// If the token is in the url after the redirect
	authClient.token.parseFromUrl()
	.then(function(idToken) {
	  // Manage token or tokens
		log('then (Y)');
		log(JSON.stringify(idToken));
		log(idToken.claims.email);
	})
	.catch(function(err) {
	  // Handle OAuthError
		log('Error processing token: '+err);
	});
}