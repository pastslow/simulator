createjs.Sound.registerSound("audio/terrorcry.mp3", "terrorcry");

function playTerrorCry(){
    createjs.Sound.play("terrorcry");
}

function checkIfWeaponIsBigBulletTopType(weapon){
    if(weapon == "LAST_WORDS" || weapon == "TERROR_CRY"){
        return true;
    } else {
        return false;
    }
}
function attackWithBigBulletWeaponTop(weapon , divBulletId, divBreakWeapon){
    if(checkIfWeaponIsBigBulletTopType(weapon)){
        BigBullet(divBulletId, divBreakWeapon)
    }
}

function BigBullet(divBulletId, divBreakWeapon){
    var divBulletId = document.getElementById(divBulletId);
    var divBreakWeapon = document.getElementById(divBreakWeapon);

    divBulletId.style.display = "block";
    divBulletId.style.width = "36px";
    divBulletId.style.height = "13px";
    divBulletId.style.background = "transparent";
    divBulletId.style.backgroundImage = "url('img/fight/attackType/bullet.png')";
    divBulletId.style.backgroundSize = "contain";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.transform =  "rotate(-17deg)"
    divBulletId.style.transition = "0.8s";
    divBulletId.style.left = "85px";
    divBulletId.style.top = "26px";
    divBreakWeapon.style.transform = "rotate(-16deg)"
    playTerrorCry();
setTimeout(function(){
    divBulletId.style.left = "260px";
    divBulletId.style.top = "-53px";
    divBulletId.style.transform =  "rotate(5deg)"
},50)
setTimeout(function(){
divBreakWeapon.style.transform = "rotate(0deg)"
},300);
setTimeout(function(){
    divBulletId.style.transform =  "rotate(10deg)"
    divBulletId.style.left = "500px";
    divBulletId.style.top = "25px";
},500)
setTimeout(player2HasBeenHit, 800);

setTimeout(function() {$("#bulletsContainer").empty();}, 1000);

}