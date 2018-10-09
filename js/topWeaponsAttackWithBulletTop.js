function checkIfTopWeaponIsBulletTopType(weapon) {
    if (weapon == "NIGHT_EAGLE" || weapon == "GRIM_COBRA") {
        return true;
    } else {
        return false;
    }
}
function attackWithTopWeaponBulletFromTop(weapon, divBulletId, divBreakId) {
    if (checkIfTopWeaponIsBulletTopType(weapon)) {
        weaponTopBulletFromTop(weapon, divBulletId, divBreakId);
    }
}
function weaponTopBulletFromTop(weapon, divBulletId, divBreakId) {
    changeBackground(weapon, divBulletId);
    var divBreakId = document.getElementById(divBreakId);
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.transform = "rotate(-17deg)"
    divBulletId.style.display = "block";
    divBulletId.style.top = "-8px";
    divBulletId.style.transition = "0.5s";
    divBreakId.style.transform = "rotate(-25deg)";
    setTimeout(function () {
        playTerrorCry()
        divBulletId.style.top = "-38px";
        divBulletId.style.left = "260px";
        divBulletId.style.transform = "rotate(5deg)"
    }, 100);
    setTimeout(function () {
        divBreakId.style.transform = "rotate(0deg)";
        divBulletId.style.top = "10px";
        divBulletId.style.left = "444px";
    }, 400);
    setTimeout(player2HasBeenHit, 800);
setTimeout(function() {$("#bulletsContainer").empty();}, 1000);
}

function changeBackground(weapon, divBulletId) {
    var divBulletId = document.getElementById(divBulletId);
    if (weapon == "NIGHT_EAGLE") {
        divBulletId.style.backgroundImage = "url('img/fight/attackType/bullet.png')";
        divBulletId.style.width = "24px";
        divBulletId.style.backgroundColor = "transparent";
        divBulletId.style.backgroundSize = "contain";
        divBulletId.style.backgroundRepeat = "no-repeat";
    }
    if (weapon == "GRIM_COBRA") {
        divBulletId.style.backgroundImage = "url('img/fight/attackType/bulletEle.png')";
        divBulletId.style.width = "24px";
        divBulletId.style.backgroundColor = "transparent";
        divBulletId.style.backgroundSize = "contain";
        divBulletId.style.backgroundRepeat = "no-repeat";
    }
}