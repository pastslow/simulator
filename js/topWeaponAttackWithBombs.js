var armour = localStorage.getItem("armour");

createjs.Sound.registerSound("audio/bombTop2.mp3", "bombTop");
function playBombTop() {
    createjs.Sound.play("bombTop");
}
createjs.Sound.registerSound("audio/explosion.mp3", "explosion");
function playExplosion() {
    createjs.Sound.play("explosion");
}
function checkIfTopWeaponIsBombType(weapon) {
    if (weapon == "DESERT_SNAKE_L" || weapon == "MIGHTY_CANNON_L" || weapon == "SPINEFALL_L") {
        return true;
    } else {
        return false;
    }
}
function attackWithTopBomb(weapon, divBulletId) {
    if (checkIfTopWeaponIsBombType(weapon)) {
        topBomb(weapon, divBulletId);
    }
}
function topBomb(weapon, divBulletId) {
        
    changeBackgroundOfBomb(weapon, divBulletId);
    var divBulletId = document.getElementById(divBulletId)
    if(armour == "ARCHIMOND_L" || armour == "AVENGER" || armour == "GRIMREAPER" || armour == "INTERCEPTOR" 
    || armour == "NAGA" || armour == "NIGHTMARE" || armour == "SITH" || armour == "ZARKARES"){
        divBulletId.style.top = "-12px";
        divBulletId.style.marginLeft = "15px";
    }
    if(armour == "BRUTALITY") {
        divBulletId.style.marginLeft = "15px";
        divBulletId.style.top = "8px";
    }
    if(armour == "WINDIGO"){
        divBulletId.style.top = "5px";
        divBulletId.style.marginLeft = "15px";
    }
    if(armour == "Lightning_Platinum_Vest" || armour == "Molten_platinum_vest"){
        divBulletId.style.marginLeft = "15px";
        divBulletId.style.top = "-14px";
    }
    divBulletId.style.display = "block";
    divBulletId.style.transition = "1.2s";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.width = "26px";
    divBulletId.style.height = "20px";

    setTimeout(function () {
        divBulletId.style.left = "250px";
        setTimeout(function () { divBulletId.style.top = "116px"; }, 200)
    }, 200)
    setTimeout(function () {
        $(divBulletId).addClass("changeSize")
        divBulletId.style.left = "450px";
    }, 1000)
    setTimeout(function () {
        playExplosion()
        playerGotHitByBomb();
    }, 1200);
    setTimeout(playerGetToNormalAfterBomb, 1800);
    playBombTop();
    setTimeout(function () { $("#bulletsContainer").empty(); }, 2000);
}

function playerGotHitByBomb() {
    var player2 = document.getElementById("player2");
    player2.style.opacity = 0.5;
}

function playerGetToNormalAfterBomb() {
    var player2 = document.getElementById("player2");
    player2.style.opacity = 1;
}

function changeBackgroundOfBomb(weapon, divBulletId) {
    var divBulletId = document.getElementById(divBulletId);
    if (weapon == "DESERT_SNAKE_L") {
        divBulletId.style.boxShadow = "0px 0px 50px rgba(255,0,0,1)";
        divBulletId.style.backgroundImage = "radial-gradient(white, red)";
    }
    if (weapon == "MIGHTY_CANNON_L") {
        divBulletId.style.boxShadow = "0px 0px 50px rgba(255,0,0,1)";
        divBulletId.style.backgroundImage = "radial-gradient(white, yellow)";
    }
    if (weapon == "SPINEFALL_L") {
        divBulletId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
        divBulletId.style.backgroundImage = "radial-gradient(white, blue)";
    }
}