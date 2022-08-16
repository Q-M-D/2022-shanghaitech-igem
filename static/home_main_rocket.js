var div_rocket = document.getElementsByClassName("home_main_rocket")[0];
var rocket = div_rocket.getElementsByTagName("img");
rocket[0].style.display = "block";
rocket[4].style.display = "block";
var foot_img = document.getElementById("foot-img");
var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var time = 0;
var landing_lock = false;

var rocket_flame_timer = setInterval(function () {
    time = time + 1;
    var tmp = time % 6 + 1;
    document.getElementById("flame1").src = "image/Flame/stage1/" + tmp + ".png";
    document.getElementById("flame2").src = "image/Flame/stage2/" + tmp + ".png";
    if (time % 2 === 0) {
        tmp = (time / 2) % 4 + 1;
        document.getElementById("flame3").src = "image/Flame/stage3/" + tmp + ".png";
    }
}, 50);


window.onscroll = function () {
    var dis = document.documentElement.scrollTop || document.body.scrollTop;
    var foot_dis = foot_img.getBoundingClientRect().top;
    var index_foot_dis = document.getElementsByClassName("index-foot")[0].offsetTop ;
    // console.log(window.innerHeight);
    // console.log(index_foot_dis,dis);

    bg1.style.backgroundPositionY = -0.04 * dis + "px";
    bg2.style.backgroundPositionY = -0.1 * dis + "px";
    bg1.style.backgroundPositionX = -0.01 * dis + "px";
    bg2.style.backgroundPositionX = -0.01 * dis + "px";

    foot_img.style.top = -0.3 * foot_dis + "px";

    bg1.style.backgroundPositionY = -0.04 * dis + "px";
    bg2.style.backgroundPositionY = -0.1 * dis + "px";
    bg1.style.backgroundPositionX = -0.01 * dis + "px";
    bg2.style.backgroundPositionX = -0.01 * dis + "px";
    
    if (dis < 2 * window.innerHeight) {
        landing_lock = false;
        rocket[1].style.position = "fixed";
        rocket[6].style.position = "fixed";
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
    else if (dis >= 2 * window.innerHeight && dis < 4 * window.innerHeight) {
        landing_lock = false;
        rocket[1].style.position = "fixed";
        rocket[6].style.position = "fixed";
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
    else if (dis >= 4 * window.innerHeight && dis < index_foot_dis) {
        landing_lock = false;
        rocket[1].style.position = "fixed";
        rocket[6].style.position = "fixed";
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
        landing_lock = true;
        rocket[1].style.position = "absolute";
        rocket[6].style.position = "absolute";
        rocket[0].style.display = "none";
        rocket[1].style.display = "block";
        rocket[2].style.display = "none";
        rocket[3].style.display = "none";
        rocket[4].style.display = "none";
        rocket[5].style.display = "none";
        rocket[6].style.display = "block";
        rocket[7].style.display = "none";
        rocket[8].style.display = "none";
        rocket[1].style.animation = "rocket_to_land 0.1s ease forwards";
        rocket[6].style.animation = "rocket_to_land_flame 3s ease forwards";
    }

}