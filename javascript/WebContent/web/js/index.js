// Global

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}


function highlightPage() {
  if (!document.getElementsByClassName) return false;
  if (!document.getElementById) return false;  
  var headers = document.getElementById('navigation');
  if (headers.length == 0) return false;
  var navs = headers.getElementsByClassName('main');
  if (navs.length == 0) return false;
  var links = navs[0].getElementsByTagName("a");
  var linkurl;
  for (var i=0; i<links.length; i++) {
	  	linkurl = links[i].getAttribute("href");
		if (window.location.href.indexOf(linkurl) != -1) {
	      links[i].className = "here";
	      var linktext = links[i].lastChild.nodeValue.toLowerCase();
	      document.body.setAttribute("id",linktext);
	    }
	  }
 
}



addLoadEvent(highlightPage);

