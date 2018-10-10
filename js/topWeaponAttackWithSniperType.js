createjs.Sound.registerSound("audio/sniper.mp3", "sniper");
function playSniper() {
    createjs.Sound.play("sniper");
}

function checkIfWeaponIsSniperType(weapon) {
    if (weapon == "DESERT_FURY_L" || weapon == "FLAMING_SCOPE_L" || weapon == "FALCON" ||
        weapon == "LIGHTNING_SCOPE" || weapon == "VALIANT_SNIPER_L") {
        return true;
    } else {
        return false;
    }
}

function attackWithSniperWeapon(weapon, divBulletId) {
    if (checkIfWeaponIsSniperType(weapon)) {
        weaponSniper(weapon, divBulletId);
    }
}

function weaponSniper(weapon, divBulletId) {
    changeBackgroundSniper(weapon, divBulletId);
    var divBulletId = document.getElementById(divBulletId);
    if(armour == "ARCHIMOND_L" || armour == "AVENGER" || armour == "GRIMREAPER" || armour == "INTERCEPTOR" 
    || armour == "NAGA" || armour == "NIGHTMARE" || armour == "SITH" || armour == "ZARKARES"){
        divBulletId.style.top = "-7px";
        divBulletId.style.marginLeft = "18px";
    }
    if(armour == "BRUTALITY") {
        divBulletId.style.top = "0px";
        divBulletId.style.marginLeft = "19px";
    }
    if(armour == "WINDIGO"){
        divBulletId.style.top = "8px";
        divBulletId.style.marginLeft = "28px";
    }
    if(armour == "Lightning_Platinum_Vest" || armour == "Molten_platinum_vest"){
        divBulletId.style.top = "-7px";
        divBulletId.style.marginLeft = "26px";
    }
    divBulletId.style.display = "block";
    divBulletId.style.transition = "0.3s";
    divBulletId.style.backgroundSize = "contain";
    divBulletId.style.backgroundRepeat = "no-repeat";
    setTimeout(function () { divBulletId.style.left = "460px"; }, 100)
    playSniper();
    setTimeout(player2HasBeenHit, 380);
    setTimeout(function () { $("#bulletsContainer").empty(); }, 460);
}

function changeBackgroundSniper(weapon, divBulletId) {
    var divBulletId = document.getElementById(divBulletId);
    if (weapon == "DESERT_FURY_L" || weapon == "FALCON") {
        divBulletId.style.background = "url('img/fight/attackType/sniperPys.png')";
    } 
    if (weapon == "LIGHTNING_SCOPE" || weapon == "VALIANT_SNIPER_L") {
        divBulletId.style.background = "url('img/fight/attackType/sniperEle.png')";
    } 
    if (weapon == "FLAMING_SCOPE_L") {
        divBulletId.style.background = "url('img/fight/attackType/sniperHot.png')";
    }
}