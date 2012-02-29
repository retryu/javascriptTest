/**
 * @author yu
 */
var movent;
function stripeTables(){
    if (!document.getElementsByTagName) 
        return false;
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                //rows[j].style.background="#CBD9E8";
                addClass(rows[j], "odd");//通过设置class属性选用  css;
                odd = false;
            }
            else {
                odd = true;
            }
        }
    }
}

function highlightRows(){
    if (!document.getElementsByTagName) 
        return false;
    var odd = true;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
    
        rows[i].onmousemove = function(){
            this.style.fontWeight = "bold";
            //	this.style.backgroundColor = "#367EFB";
        
        }
        rows[i].onmouseout = function(){
        
            this.style.fontWeight = "normal";
            //this.style.backgroundColor = "#FFFFFF"
        
        
        }
    }
    
}

function styleHeaderSiblings(){//unkown!!
    if (!document.getElementsByTagName) 
        return false;
    var headers = document.getElementsByName("h1");
    for (var i = 0; i < headers.length; i++) {
        var elem = getNextElement(headers[i].nextSibling);
        elem.className = "intor";
    }
}




function addClass(element, value){
    if (element.className) {
        element.className = value;
    }
    else {
        newClassName = element.className;
        newClassName += " ", newClassName += value;
        element.className = newClassName;
    }
}

function positionMessage(){
    if (!document.getElementById) 
        return false;
    if (!document.getElementById("message")) 
        return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    moveElement("message",300, 0,20);
}

function moveElement(elementID, final_x, final_y, interval){
    if (!document.getElementById) 
        return false;
    if (!document.getElementById(elementID)) 
        return false;
    var elem = document.getElementById(elementID);
    
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	
	if(elem.movent){//判断在队列里
		clearTimeout(elem.movent);
	}
	
	var xpos = parseInt(elem.style.left);     //parseInt();!
    var ypos = parseInt(elem.style.top);
    
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    
    if (xpos < final_x) {
		var  dist=Math.ceil((final_x-xpos)/10);
        xpos+=dist;
    }
	//等于的时候就不移动  如果不对xpos==final_x做return处理;是否就会产生无限递归
    if (xpos > final_x) {
		var  dist=Math.ceil((xpos-final_x)/10);
        xpos-=dist;
    }
    if (ypos < final_y) {
		var  dist=Math.ceil((final_y-ypos)/10);
        ypos+=dist;
    }
    if (ypos > final_y) {
		var  dist=Math.ceil((ypos-final_y)/10);
        ypos-=dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
	var   repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movent = setTimeout(repeat, interval);//添加变量
    
}

function   prepareSildshow(){
	if(!document.getElementsByTagName)return  false;
	if(!document.getElementById)return   false;
	if(!document.getElementById("linkslist"))return  false;
	
	
	var sildshow=document.createElement("div");
	sildshow.setAttribute("id","sildeshow");

	var preview=document.createElement("img");
	preview.setAttribute("src","topics.gif");
	preview.setAttribute("alt","building  blocks  of  web desing");
	preview.setAttribute("id","preview");
		
	sildshow.appendChild(preview);
	
	
 
	
	var  list=document.getElementById("linkslist");
	
	//insertAfter(sildshow,list);//??!!!
	
	var  links=document.getElementsByTagName("a");
	
	links[0].onmouseover=function(){
		moveElement("preview",-100,0,10);
	}	
	links[1].onmouseover=function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-300,0,10);
	}
}

function insertAfter(newElement, targetElement){/*??*/
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}












addLoadEvent(prepareSildshow);
addLoadEvent(positionMessage);
addLoadEvent(styleHeaderSiblings);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
