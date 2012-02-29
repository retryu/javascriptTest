function addLoadEvent(func) {
	alert("s");
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
		alert("add  method()");
	  oldonload();
      func();
    }
  }
}