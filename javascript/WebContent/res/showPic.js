/**
 * @author yu
 *
 */
function showPic(whichpic){
    if (!document.getElementById("placeholder")) 
        return true;
    var sourse = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") 
        return true;
    placeholder.setAttribute("src", sourse);
    if (!document.getElementById("description")) 
        return false;
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {//文本节点是3
        description.firstChild.nodeValue = text;
    }
    return false;
    
}
 

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function prepareGallery(){
    if (!document.getElementsByTagName) 
        return false;
    if (!document.getElementById) 
        return false;
    if (!document.getElementById("imagegallery")) 
        return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(){
            return showPic(this);
        }
    }
    
}

function addLoadEvent(func){

    var oldonload = window.onload;
    if (typeof window.onload != "function") {//如果没有新函数
        window.onload = func;
    }
    else {
        window.onload = function(){
            oldonload();
            func();
        }
        
    }
}


function test(){

    var para = document.createElement("p");
    var txt = document.createTextNode("Hello  World");
    para.appendChild(txt);
    
    var testdiv = document.getElementById("testdiv");
    
    testdiv.appendChild(para);
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


function   preparePlaceholder(){
	if(!document.createElement)  return  false;
	if(!document.createTextNode)return  false;
	if(!document.getElementById)return  false;
	if(!document.getElementById("imagegallery"))  return false;
	
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","a.jpg");
	placeholder.setAttribute("alt","my image galelry");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var  desctxt=document.createTextNode("Chose  an  image");
	description.appendChild(desctxt);
	var  gallery =document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,gallery);
	
	
	//test  
	var  p2=document.createElement("h1");
	p2.appendChild(document.createTextNode("fuck you"));
	insertAfter(p2,placeholder);
	
	
}








addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);




