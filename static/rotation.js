var planet = document.getElementsByClassName("rotation_loc")[0].getElementsByTagName("div");
var planet_img = [
    planet[1].getElementsByTagName("img")[0],
    planet[2].getElementsByTagName("img")[0]
];

function getMousePos(event) {
    var e = event || window.event;
    return {'x':e.screenX,'y':e.screenY}
}


for (var i = 0; i < planet_img.length; i++) {
    planet_img[i].addEventListener('click', function () {
        console.log(this)
    })
}
for (var i = 0; i < planet_img.length; i++) {
    planet_img[i].addEventListener('mouseover', function () {
        this.style.animationPlayState = "paused";
        this.parentNode.style.animationPlayState = "paused";
        var coord = getMousePos();
        if (this === planet_img[0]){
            planet[3].style.animation = "none";
            planet[3].style.animation = "ZeroToOne 1.5s 0s forwards";
        }
        else{
            planet[4].style.animation = "none";
            planet[4].style.animation = "ZeroToOne 1.5s 0s forwards";
        }
    })

    planet_img[i].addEventListener('mouseout', function () {
        this.style.animationPlayState = "running";
        this.parentNode.style.animationPlayState = "running";
        if (this === planet_img[0]){
            planet[3].style.animation = "OneToZero 1.5s 0s forwards";
        }
        else{
            planet[4].style.animation = "OneToZero 1.5s 0s forwards";
        }
    })
}