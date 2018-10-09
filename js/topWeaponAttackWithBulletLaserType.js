function checkIfTopWeaponIsLaserBulletType(weapon){
    if(weapon == "DELERIUM_L" || weapon == "IRON_FRENZY_L" || weapon == "VANDAL_RAGE"){
        return true;
    }else{
        return false;
    }
}
function attackWithTopBulletLaserType(weapon, divBulletId){
    if(checkIfTopWeaponIsLaserBulletType(weapon) && weapon == "DELERIUM_L"){
        topBulletLaserTypeBlue(divBulletId);
    }else if(checkIfTopWeaponIsLaserBulletType(weapon) && weapon == "IRON_FRENZY_L" || weapon == "VANDAL_RAGE"){
        topBulletLaserTypeRed(divBulletId);
    }
}
function topBulletLaserTypeBlue(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.background = "url('css/laserbullet.png')";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.boxShadow = "0px 0px";
    divBulletId.style.display = "block";
    divBulletId.style.transition = "0.3s"
    divBulletId.style.top = "-10px";
    $(divBulletId).append("<div class='laserblue'></div>");
    setTimeout(function(){divBulletId.style.left = "470px";
    setTimeout(function(){divBulletId.style.top = "55px";},50);   
},100)
playLaserBullet()
setTimeout(player2HasBeenHit, 350);
setTimeout(function() {$("#bulletsContainer").empty();}, 400);
}


function topBulletLaserTypeRed(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.background = "url('css/laserbulletred.png')";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.boxShadow = "0px 0px";
    divBulletId.style.display = "block";
    divBulletId.style.transition = "0.3s";
    divBulletId.style.top = "-10px";

    $(divBulletId).append("<div class='laser'></div>");
    setTimeout(function(){divBulletId.style.left = "470px";
    setTimeout(function(){divBulletId.style.top = "55px";},50);   
},100)
playLaserBullet()
setTimeout(player2HasBeenHit, 350);
setTimeout(function() {$("#bulletsContainer").empty();}, 400);
}
