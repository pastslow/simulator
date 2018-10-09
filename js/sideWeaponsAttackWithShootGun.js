createjs.Sound.registerSound("audio/shootgun.mp3", "shootgun");

function playShootGun(){
    createjs.Sound.play("shootgun");
}

function checkIfWeaponIsShootGunType(weapon){
    if(weapon == "ARMOR_ANNIHILATOR_L"||
    weapon == "ARMOR_DISSOLVER_L"||
    weapon == "BLOODWEEP_L"||
    weapon == "BULLDOG_L"||
    weapon == "MERCY_L"||
    weapon == "RECKONING_L"||
    weapon == "PURIFIER_L"||
    weapon == "SWEETIE_L"||
    weapon == "SORROW_L"){
        return true;
    } else {
        return false;
    }
}

function attackWithShootGun(weapon, divBulletId){
    if(checkIfWeaponIsShootGunType(weapon)){
        ShootGun(divBulletId);
    }
}

function ShootGun(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.transition = "0.6s";
    setTimeout(function(){
        divBulletId.style.background = "url('img/fight/attackType/shootgunBullet.png')";
        divBulletId.style.backgroundSize = "cover";
        divBulletId.style.backgroundRepeat = "no-repeat";
        divBulletId.style.boxShadow = "0px 0px";
        divBulletId.style.left = "425px";
        playShootGun();
    }, 100)
    setTimeout(player2HasBeenHit, 600);
    setTimeout(function() {$("#bulletsContainer").empty();}, 900);
}