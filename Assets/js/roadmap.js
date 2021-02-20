webdev = document.getElementsByClassName("webdev");
ai = document.getElementsByClassName("ai");
appdev = document.getElementsByClassName("appdev");
datsci = document.getElementsByClassName("datsci");
ml = document.getElementsByClassName("ml");
cyber = document.getElementsByClassName("cyber");

function onwebdev(){
    ai[0].classList.add("hide");
    datsci[0].classList.add("hide");
    ml[0].classList.add("hide");
    cyber[0].classList.add("hide");
    appdev[0].classList.add("box");
}

function outwebdev(){
    ai[0].classList.remove("hide");
    datsci[0].classList.remove("hide");
    ml[0].classList.remove("hide");
    cyber[0].classList.remove("hide");
    appdev[0].classList.remove("box");
}
function onappdev(){
    ai[0].classList.add("hide");
    datsci[0].classList.add("hide");
    ml[0].classList.add("hide");
    cyber[0].classList.add("hide");
    webdev[0].classList.add("box");
}

function outappdev(){
    ai[0].classList.remove("hide");
    datsci[0].classList.remove("hide");
    ml[0].classList.remove("hide");
    cyber[0].classList.remove("hide");
    webdev[0].classList.remove("box");
}

function ondatsci(){
    appdev[0].classList.add("hide");
    webdev[0].classList.add("hide");
    cyber[0].classList.add("hide");
    ml[0].classList.add("box");
    ai[0].classList.add("box");
}

function outdatsci(){
    appdev[0].classList.remove("hide");
    webdev[0].classList.remove("hide");
    cyber[0].classList.remove("hide");
    ml[0].classList.remove("box");
    ai[0].classList.remove("box");
}

function onml(){
    appdev[0].classList.add("hide");
    webdev[0].classList.add("hide");
    cyber[0].classList.add("hide");
    datsci[0].classList.add("box");
    ai[0].classList.add("box");
}

function outml(){
    appdev[0].classList.remove("hide");
    webdev[0].classList.remove("hide");
    cyber[0].classList.remove("hide");
    datsci[0].classList.remove("box");
    ai[0].classList.remove("box");
}

function onai(){
    appdev[0].classList.add("hide");
    webdev[0].classList.add("hide");
    cyber[0].classList.add("hide");
    ml[0].classList.add("box");
    datsci[0].classList.add("box");
}

function outai(){
    appdev[0].classList.remove("hide");
    webdev[0].classList.remove("hide");
    cyber[0].classList.remove("hide");
    ml[0].classList.remove("box");
    datsci[0].classList.remove("box");
}

function oncyber(){
    ai[0].classList.add("hide");
    datsci[0].classList.add("hide");
    ml[0].classList.add("hide");
    webdev[0].classList.add("hide");
    appdev[0].classList.add("hide");
}

function outcyber(){
    ai[0].classList.remove("hide");
    datsci[0].classList.remove("hide");
    ml[0].classList.remove("hide");
    webdev[0].classList.remove("hide");
    appdev[0].classList.remove("hide");
}