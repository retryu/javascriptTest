/**
 * @author yu
 */
function findImg(){
	
	 
	var  pic=document.getElementsByClassName("out");
	 
	alert("test");
	pic[0].style.left=0;
	pic[0].style.top=0;
	alert("   left:"+pic[0].style.left);
 //	pic.style.position="absolute";
	pic[0].style.left="100px";
 	pic[0].style.top="204px";
//	pic.style.left="350px";
// 	pic.style.top="444px";
//	alert("top:"+pic.style.top+"   left:"+pic.style.left);
//	
}


function  watertest(){
	var  items =document.getElementsByTagName("img");
	var  columnCount=4;
	var  columnWidth=200;
	var  padding=8;
	
	for(var  j=0;j<items.length;j++){
		if (!items[j].top) {
			items[j].top = 0;
		}
	}
	
	for(var  i=0;i<items.length; i++){
		var  currentItem=items[i];
		var currentColumn=i%4;
		var  currentLevel=parseInt(i/4);
		var left=currentColumn*columnWidth+(i%4)*8;
		
		 
		
		if (i > 3) {
			var top = parseInt(items[i-4].style.top) + items[i-4].clientHeight+padding;///!!!!!
//			alert("i:"+i+"  top:"+top+"   items"+items[i-4].top+"  clientHeight:"+items[i-4].clientHeight); 
//			for(var  j=4;j<i;j++){
//				var  s;
//				s+="j:"+j+"  i-4:"+(j-4)+  "top:"+items[j-4].top+"   clientheight:"+items[j-4].clientHeight+"\n";
//			}
//			alert(s);
//			s="";
//			alert("i:"+i+"  top"+items[i-4].top+" clientHeight:"+items[i-4].clientHeight);
		}
		else {
			var top = 0;
			 
			 t="";
		}
			
		items[i].style.top=top+"px";
		items[i].style.left=left+"px";
	   
		
	}
	for (var k = 0; k < items.length; k++) {
		//	alert("i:"+k+" top:"+items[k].top);
	}
 
}




function  watertestdiv(){
	var  items =document.getElementsByClassName("out");
	var  columnCount=4;
	var  columnWidth=200;
	var  padding=12;
	
	for(var  j=0;j<items.length;j++){
		if (!items[j].top) {
			items[j].top =0;
			items[j].left=0;
		}
		var img=items[j].getElementsByTagName("img");
		 items[j].style.height=parseInt(img[0].clientHeight)+"px";
		 items[j].style.width=parseInt(img[0].clientWidth)+"px";
	}
	
	
	
	
	
	for(var  m=0;m<items.length;m++){
	//alert("m"+m+"   height: "+items[m].clientHeight+"  style.height"+items[m].style.height);
	}
	
	for(var  i=0;i<items.length; i++){
		
		var  currentItem=items[i];
		var currentColumn=i%4;
		var  currentLevel=parseInt(i/4);
		var left=currentColumn*columnWidth+(i%4)*30;
	 
		
		if (i > 3) {
			var top = parseInt(items[i-4].style.top) + items[i-4].clientHeight+padding;///!!!!!
		}
		else {
			var top = 0;
		}
			
		items[i].style.top=top+"px";
		items[i].style.left=left+"px";
	   
		
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
addLoadEvent(watertestdiv);
