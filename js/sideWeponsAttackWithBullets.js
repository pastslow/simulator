createjs.Sound.registerSound("audio/anihilation.mp3", "anihilation")
function playSoundBullet() {
    createjs.Sound.play("anihilation");
}
function checkIfWeaponIsBulletType(weapon) {
    if(weapon == "ANNIHILATION"||
    weapon == "NIGHTFALL"){
        return true;
    } else {
        return false;
    }
}

function attackWithBuletWeapons(weapon, divBulletId){
    if(checkIfWeaponIsBulletType(weapon)){
        bulletWeapos(divBulletId);
    }
}

var left = Math.round(Math.random()*30);
var top = Math.round(Math.random()*30);
var totalLeft = left + "px";

function bulletWeapos(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.transition = "1s";
    divBulletId.style.display = "block";
    divBulletId.style.background = "transparent";
    divBulletId.style.left = "428px";
    setTimeout(function(){$(divBulletId).append("<div class='bul1'></div>")},200);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos1'></div>")},400);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos2'></div>")},600);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos3'></div>")},800);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos4'></div>")},1000);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos5'></div>")},1200);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos6'></div>")},400);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos7'></div>")},600);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos8'></div>")},800);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos9'></div>")},1000);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos10'></div>")},1200);
    playSoundBullet()
    setTimeout(player2HasBeenHit, 800);
    setTimeout(function() {$("#bulletsContainer").empty();}, 1500);
}

