var navbar = document.getElementById("navbar");
var nav = document.getElementsByTagName("nav")[0];
var back = nav.getElementsByClassName("li")[8];
console.log(back);

navbar.onclick=function(){
    // nav.style.display="block";
    nav.style.animation="navbar-show 1s ease forwards"
}

back.onclick=function(){
    nav.style.animation="navbar-hidden 1s ease forwards"
}