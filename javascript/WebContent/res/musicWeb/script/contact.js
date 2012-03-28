function focusLables(){
    alert("test");
    if (!document.getElementsByTagName) 
        return false;
    var labes = document.getElementsByTagName("lable");
    for (var i = 0; i < labes.length; i++) {
        if (!labes[i].getAttribute("for")) 
            continue;
        var id = this.getAttribute("for");
        if (document.getElementById("for")) 
            return false;
        var element = document.getElementById(id);
        element.focus();
    }
}


function isFilled(field){
    if (field.value.length < 1 || field.value == field.defaultValue) {
        return false;
    }
    else {
        return true;
    }
}

function isEmail(filed){
    if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
        return false;
    }
    else {
        return true;
    }
}

function validateForm(whichform){

    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.className.indexOf("required") != -1) {
            if (!isFilled(element)) {
                alert("Please fill in the " + element.name + " field.");
                return false;
            }
        }
        if (element.className.indexOf("email") != -1) {
            if (!isEmail(element)) {
                alert("The " + element.name + " field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}


function resetfiled(whichfrom){
	//	alert(whichfrom.length);
    for (var i = 0; i < whichfrom.length; i++) {
   // alert(whichfrom.elements[i]);
        var element = whichfrom.elements[i];
        if (element.type == "submit") 
            continue;
        if (!element.defaultValue) 
            continue;
        element.onclick = function(){
            if (this.value == this.defaultValue) 
                this.value = "";
        }
        element.onblur = function(){
            if (this.value == "") 
                this.value = this.defaultValue;
        }
    }
}



function prepareForms(){

    for (var i = 0; i < document.forms.length; i++) {
        var thisfrom = document.forms[i]
        resetfiled(thisfrom);
        thisfrom.onsubmit = function(){
            return validateForm(this);
        }
    }
}



addLoadEvent(prepareForms);
