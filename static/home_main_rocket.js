var div_rocket = document.getElementsByClassName("home_main_rocket")[0];
var rocket = div_rocket.getElementsByTagName("img");
rocket[0].style.display = "block";
rocket[4].style.display = "block";
var time = 0;


setInterval(function(){
    time=time+1;
    var tmp = time % 6+1;
    document.getElementById("flame1").src="image/Flame/stage1/"+tmp+".png";
    document.getElementById("flame2").src="image/Flame/stage2/"+tmp+".png";
    if (time%2 === 0){
        tmp = (time/2)%4+1;
        document.getElementById("flame3").src="image/Flame/stage3/"+tmp+".png";
    }
},50);

window.onscroll = function () {
    var dis=document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(dis);
    if (dis < 200){
        rocket[0].style.display = "block";
        rocket[1].style.display = "none";
        rocket[2].style.display = "none";
        rocket[3].style.display = "none";
        rocket[4].style.display = "block";
        rocket[5].style.display = "none";
        rocket[6].style.display = "none";
        rocket[7].style.display = "none";
        rocket[8].style.display = "none";
    }
    else if (dis >= 200 && dis < 400){
        rocket[0].style.display = "block";
        rocket[1].style.display = "none";
        rocket[2].style.display = "none";
        rocket[3].style.display = "none";
        rocket[4].style.display = "none";
        rocket[5].style.display = "block";
        rocket[6].style.display = "none";
        rocket[7].style.display = "none";
        rocket[8].style.display = "none";
    }
    else if (dis >= 400 && dis < 600){
        rocket[0].style.display = "none";
        rocket[1].style.display = "block";
        rocket[2].style.display = "block";
        rocket[3].style.display = "block";
        rocket[4].style.display = "none";
        rocket[5].style.display = "none";
        rocket[6].style.display = "block";
        rocket[7].style.display = "block";
        rocket[8].style.display = "block";
        rocket[1].style.animation = "rocket_wobble 0.1s linear 0s infinite";
        rocket[6].style.animation = "fire_flame 1s linear 0s forwards";
        rocket[2].style.animation = "rocket_up 3s ease forwards";
        rocket[3].style.animation = "rocket_low 3s ease forwards";
    }
    else {
        rocket[0].style.display = "none";
        rocket[1].style.display = "block";
        rocket[2].style.display = "none";
        rocket[3].style.display = "none";
        rocket[4].style.display = "none";
        rocket[5].style.display = "none";
        rocket[6].style.display = "block";
        rocket[7].style.display = "none";
        rocket[8].style.display = "none";
        rocket[1].style.animation = "rocket_to_land 3s ease forwards";
        rocket[6].style.animation = "rocket_to_land_flame 3s ease forwards";
    }
}