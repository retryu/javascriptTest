/**
 * @author yu
 */


function  test(){
	var  topContent=document.getElementsByClassName("topContent");
	alert(topContent[0].clientHeight);
	topContent[0].clientHeight="1000px";
	alert(topContent[0].clientHeight);
}
addLoadEvent(test);