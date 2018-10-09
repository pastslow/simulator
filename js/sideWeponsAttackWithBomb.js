
createjs.Sound.registerSound("audio/beforeHeatBomb.mp3", "bombShot");
createjs.Sound.registerSound("audio/heat_bomb.mp3", "bombGetTarget");

function playBombShot() {
    createjs.Sound.play("bombShot");
}

function playBombTarget() {
    createjs.Sound.play("bombGetTarget");
}

function checkSideWeaponsForBombs(weapon) {
    if (weapon == "HEAT_BOMB" || weapon == "EMP") {
        return true;
    } else {
        return false;
    }
}

function attackWithHeatBomb(weaponAttack, getBulletDivId) {
    if (checkSideWeaponsForBombs(weaponAttack)) {
        Bomb(getBulletDivId);
        if (weaponAttack == "EMP") {
            var getBulletDivId = document.getElementById(getBulletDivId);
            getBulletDivId.style.background = "blue";
            getBulletDivId.style.backgroundImage =  "radial-gradient(circle, blue, lightblue)";     
            getBulletDivId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
        }
    }
}

function Bomb(getBulletDivId) {
    var getBulletDivId = document.getElementById(getBulletDivId);
    getBulletDivId.style.display = "block";
    playBombShot();
    setTimeout(function () { getBulletDivId.style.left = "307px"; }, 500);
    setTimeout(function () { getBulletDivId.style.top = "118px"; }, 1000)
    setTimeout(function () {
        getBulletDivId.style.width = "162px";
        getBulletDivId.style.height = "36px";
        playBombTarget();
    }, 1500)
    setTimeout(player2HasBeenHit, 2000);
    setTimeout(function(){getBulletDivId.style.display = "none";}, 3000);
    setTimeout(function() {$("#bulletsContainer").empty();}, 3500);
}

