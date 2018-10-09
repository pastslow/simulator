var armour = localStorage.getItem("armour");


function checkIfTopWeaponIsLaserType(weapon){
    if(weapon == "RECKLESS_BEAM" || weapon == "SAVAGERY" || weapon == "HYSTERIA"){
        return true;
    }else{
        return false;
    }
}
function attackWithTopLaserWeapon(weapon, divBulletId){
    if(checkIfTopWeaponIsLaserType(weapon)){
        topLaserWeapon(weapon, divBulletId);
    }
}
function topLaserWeapon(weapon, divBulletId){
    changeBackgoundOfLaserTop(weapon, divBulletId);
    var divBulletId = document.getElementById(divBulletId);
    if(armour == "ARCHIMOND_L" || armour == "AVENGER" || armour == "GRIMREAPER" || armour == "INTERCEPTOR" 
    || armour == "NAGA" || armour == "NIGHTMARE" || armour == "SITH" || armour == "ZARKARES"){
        divBulletId.style.top = "-8px";
    }
    if(armour == "BRUTALITY") {
        divBulletId.style.top = "10px";
    }
    if(armour == "WINDIGO"){
        divBulletId.style.top = "5px";
    }
    if(armour == "Lightning_Platinum_Vest" || armour == "Molten_platinum_vest"){
        divBulletId.style.top = "-11px";
    }
    divBulletId.style.marginLeft = "13px";
    divBulletId.style.display = "block";
    divBulletId.style.borderRadius = "10px";
    divBulletId.style.transition = "0.3s";
    setTimeout(function(){
        divBulletId.style.width = "442px";
    playLaser();
    },50)
    setTimeout(player2HasBeenHit, 300);
    setTimeout(function() {$("#bulletsContainer").empty();}, 700);
}
function changeBackgoundOfLaserTop(weapon, divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    if(weapon == "RECKLESS_BEAM"){
        divBulletId.style.backgroundImage =  "radial-gradient(white, orange)";     
    }
    if(weapon == "SAVAGERY"){
        divBulletId.style.backgroundImage =  "radial-gradient(white, red)";     
    }
    if(weapon == "HYSTERIA"){
        divBulletId.style.backgroundImage =  "radial-gradient(white, blue)";     
    }
}