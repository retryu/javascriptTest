/**
 * @author yu
 */

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