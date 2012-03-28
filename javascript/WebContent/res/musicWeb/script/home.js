/**
 * @author yu
 */
function moveElement(elementID, fianl_x, final_y, interval){
	  
    if (!document.getElementById) 
        return false;
    if (!document.getElementById(elementID)) 
        return false;
    var elem = document.getElementById(elementID);
      
    
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == fianl_x && ypos == final_y) {
        return true;
    }
    
    if (xpos < fianl_x) {
        var dist = Math.ceil((fianl_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > fianl_x) {
        var dist = Math.ceil((xpos - fianl_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = ypos(Math.ceil((ypos - final_y) / 10));
		ypos=yops-dist;
    }
    
    
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    
    var repeat = "moveElement('" + elementID + "'," + fianl_x + "," + final_y + "," + interval + ")";
    
    elem.movement = setTimeout(repeat, interval);
 
    
}



function prepareSildeshow(){
     

    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    	if(!document.getElementById("intro")) return  false;
    
       
    
    
    var intro = document.getElementById("intro");
	    

    var sildeshow = document.createElement("div");
	 
    sildeshow.setAttribute("id", "slideshow");
	
	
	var frame=document.createElement("img");
	frame.setAttribute("src","images/frame.gif");
	frame.setAttribute("alt","");
	frame.setAttribute("id","frame");
	sildeshow.appendChild(frame);
    
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a  glimpse  og  what  awaits  you");
    preview.setAttribute("id", "preview");
    sildeshow.appendChild(preview);
    insertAfter(sildeshow, intro);
    
    
    var links = document.getElementsByTagName("a");
    
    for (var i = 0; i < links.length; i++) {

	         links[i].onmouseover = function(){ 
            var destination = this.getAttribute("href");
 
            if (destination.indexOf("index.html") != -1) {
                moveElement("preview", 0, 0, 5);
            }
            if (destination.indexOf("about.html") != -1) {
                moveElement("preview", -150, 0, 5);
            }
            if (destination.indexOf("photos.html") != -1) {
		        moveElement("preview", -300, 0, 5);
            }
            if (destination.indexOf("live.html") != -1) {
				moveElement("preview", -450, 0, 5);
            }
            if (destination.indexOf("contact.html") != -1) {
				moveElement("preview", -600, 0, 5);
            }
			
        }
    }
    
}

function  insertAfter(newElement,targetElement){
	var  parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(targetElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


 

addLoadEvent(prepareSildeshow);














