
createjs.Sound.registerSound("audio/flame.mp3", "flame");
function playFlamesSound(){
    createjs.Sound.play("flame");
}

function checkIfWeaponIsFlameType(weapon){
    if(weapon == "ASH_CREATOR_L" || weapon == "CRIMSON_RAPTURE_L"){
        return true;
    } else{
        return false;
    }
}

function attackWithFlameWeapons(weapon, divBulletId){
    if(checkIfWeaponIsFlameType(weapon)){
        flameWeapons(divBulletId);
        if(weapon == "ASH_CREATOR_L" ){
            var divBulletId = document.getElementById(divBulletId);
            divBulletId.style.backgroundImage =  "radial-gradient(lightblue, darkblue)";     
            divBulletId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
        }
    }
}

function flameWeapons(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.transition = "1.2s";

    var width = 393;
    if(window.innerWidth < 500) {
        width = 150;
    }
    setTimeout(function(){ 
        divBulletId.style.width = width + "px";
        divBulletId.style.height = "36px";
        divBulletId.style.borderRadius = "13px 160%";
        playFlamesSound()}, 200)
        divBulletId.style.backgroundImage =  "radial-gradient(red, orange)";     
    setTimeout(player2HasBeenHit, 1000);
    setTimeout(function() {$("#bulletsContainer").empty();}, 2000);
}