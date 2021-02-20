pin=document.getElementsByClassName("pin");
image=document.getElementById("webroad");

function pinlocation(){
    pin[0].style.left="278px";
}

function htmlbuttonclick(){
    if (pin[0].style.left=="95px"){
        image.src="Assets/img/htmlcss.jpg";
        pin[0].style.top='380px';
        pin[0].style.left='113px';
    }
    else{
        pin[0].style.left="95px";
    }
}

function cssbuttonclick(){
    pin[0].style.left="280px";
}

function jsbuttonclick(){
    pin[0].style.left="463px";
}

function framebuttonclick(){
    pin[0].style.left="645px";
}

function bootbuttonclick(){
    pin[0].style.left="828px";
}

function jquerybuttonclick(){
    pin[0].style.left="1013px";
}

function reactbuttonclick(){
    pin[0].style.left="1197px";
}