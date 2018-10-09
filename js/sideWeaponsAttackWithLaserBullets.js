createjs.Sound.registerSound("audio/laserbullet.mp3", "laserbullet");
function playLaserBullet(){
    createjs.Sound.play("laserbullet");
}

function checkIfWeaponIsLaserBulletType(weapon){
    if(weapon == "BIGDADDY_L"||
    weapon == "CHAOS_BRINGER_L"||
    weapon == "DAWNBLAZE"||
    weapon == "FLAMINATOR"||
    weapon == "HOT_FLASH"||
    weapon == "MORTAL_BULLET_L"||
    weapon == "ULTRABRIGHT"){
        return true;
    }else{
        return false;
    }
}

function attackWithLaserBulletWeapons(weapon, divBulletId){
    if(checkIfWeaponIsLaserBulletType(weapon) && weapon != "BIGDADDY_L" 
    && weapon != "FLAMINATOR" 
    && weapon != "ULTRABRIGHT"
    && weapon != "MORTAL_BULLET_L"){
        laserBulletWeaponsRed(divBulletId);
    }else if (checkIfWeaponIsLaserBulletType(weapon) && weapon == "BIGDADDY_L" 
    || weapon == "FLAMINATOR" 
    || weapon == "ULTRABRIGHT"
    || weapon == "MORTAL_BULLET_L"){
        laserBulletWeaponsBlue(divBulletId);
    }
}

function laserBulletWeaponsRed(divBulletId){
var divBulletId = document.getElementById(divBulletId);
divBulletId.style.display = "block";
divBulletId.style.transition = "0.5s";

setTimeout(function(){
    $(divBulletId).append("<div class='laser'></div>");
    divBulletId.style.left = "435px";
    divBulletId.style.background = "url('css/laserbulletred.png')";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.boxShadow = "0px 0px";
    playLaserBullet()
}, 100)
setTimeout(player2HasBeenHit, 500);
setTimeout(function() {$("#bulletsContainer").empty();}, 700);

}

function laserBulletWeaponsBlue(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.transition = "0.5s";
    divBulletId.style.background = "blue";
    divBulletId.style.backgroundImage =  "radial-gradient(circle, blue, lightblue)";     
    divBulletId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
    setTimeout(function(){
        $(divBulletId).append("<div class='laserblue'></div>");
        divBulletId.style.left = "435px";
        divBulletId.style.background = "url('css/laserbullet.png')";
        divBulletId.style.backgroundSize = "cover";
        divBulletId.style.backgroundRepeat = "no-repeat";
        divBulletId.style.boxShadow = "0px 0px";
        playLaserBullet()
    }, 100)
    setTimeout(player2HasBeenHit, 500);
    setTimeout(function() {$("#bulletsContainer").empty();}, 700);
    
    }