function checkIfWeaponIsRocketUpType(weapon){
    if(weapon == "DESOLATION"){
        return true;
    }else{
        return false;
    }
}
function attackWithRocketUpWeapon(weapon, divBulletId){
    if(checkIfWeaponIsRocketUpType(weapon)){
        RocketUp(divBulletId);
    }
}
function RocketUp(divBulletId){
    var divBulletId = document.getElementById(divBulletId);

    divBulletId.style.display = "block";
    divBulletId.style.transition = "1s";
    divBulletId.style.top = "0px";
    divBulletId.style.background = "url('img/fight/attackType/rocketUp.png')";
    divBulletId.style.backgroundSize = "contain";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.width = "20px";
    divBulletId.style.height = "28px";
    divBulletId.style.boxShadow = "0px 0px 50px rgba(255,0,0,1)";
    setTimeout(function(){
        divBulletId.style.top = "-54px";
        playRocketSound();
    },100);
    setTimeout(function(){
        divBulletId.style.display = "none";
        divBulletId.style.left = "430px";
        divBulletId.style.transform= "rotate(180deg)";
    },500);
    setTimeout(function(){
        divBulletId.style.display = "block";
    },1050);
    setTimeout(function(){
        divBulletId.style.top = "50px";
        player2HasBeenHit();
    },1100);
    setTimeout(function() {$("#bulletsContainer").empty();}, 1800);
}