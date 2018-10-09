createjs.Sound.registerSound("audio/laser.mp3", "laser");
function playLaser(){
    createjs.Sound.play("laser");
}


function checkWeaponIfIsLaserType(weapon){
    if(weapon == "CORRUPT_LIGHT" || weapon == "MALICE_BEAM"){
        return true;
    }else{
        return false;
    }
}

function attackWithLaserWeapon(weapon, divBulletId){
    if(checkWeaponIfIsLaserType(weapon)){
        Laser(divBulletId);
        if(weapon == "MALICE_BEAM"){
            var divBulletId = document.getElementById(divBulletId);
            divBulletId.style.backgroundImage =  "radial-gradient(white, darkblue)";     
            divBulletId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
        }
    }
}
function Laser(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.borderRadius = "10px 10px";
    divBulletId.style.backgroundImage =  "radial-gradient(white, red)";     
    divBulletId.style.transition = "0.3s";
    setTimeout(function(){divBulletId.style.width = "368px";
    divBulletId.style.height = "21px";},100);
    playLaser();
    setTimeout(player2HasBeenHit, 300);
    setTimeout(function() {$("#bulletsContainer").empty();}, 700);
}