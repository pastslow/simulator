createjs.Sound.registerSound("audio/singleRocket.mp3", "rocket");
function playRocketSound(){
    createjs.Sound.play("rocket")
}

function checkIfWeaponIsRocketType(weapon){
    if(weapon == "ABOMINATION_L" ||
    weapon == "BUNKER_SHELLL" ||
    weapon == "MAGMA_BLAST_L"){
        return true;
    }else{
        return false;
    }
}

function attackWithRocketWeapon(weapon, divBulletId){
    if(checkIfWeaponIsRocketType(weapon) && weapon != "BUNKER_SHELLL"){
        rocketWeapon (divBulletId);
    }else if (checkIfWeaponIsRocketType(weapon) && weapon == "BUNKER_SHELLL"){
        rocketWeaponBlue (divBulletId);
    }
}

function rocketWeaponBlue (divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.width = "45px";
    divBulletId.style.transition = "1s";
    divBulletId.style.background = "transparent";
    divBulletId.style.backgroundImage = "url('css/rocket.png')";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";
    
    setTimeout(function(){divBulletId.style.left = "418px";}, 100)
    setTimeout(function(){
        divBulletId.style.transition = "0.1s";
        divBulletId.style.backgroundImage =  "radial-gradient(white, darkblue)";     
        divBulletId.style.boxShadow = "0px 0px 50px rgba(0,0,255,1)";
        divBulletId.style.width = "92px";
        divBulletId.style.height = "67px";}, 800);
        playRocketSound()
    setTimeout(player2HasBeenHit, 700);
    setTimeout(function() {$("#bulletsContainer").empty();}, 1500);
}

function rocketWeapon (divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.display = "block";
    divBulletId.style.width = "45px";
    divBulletId.style.transition = "1s";
    divBulletId.style.background = "transparent";
    divBulletId.style.backgroundImage = "url('css/rocket.png')";
    divBulletId.style.backgroundSize = "cover";
    divBulletId.style.backgroundRepeat = "no-repeat";

    setTimeout(function(){divBulletId.style.left = "418px";}, 100)
    setTimeout(function(){
    divBulletId.style.transition = "0.1s";
        divBulletId.style.width = "92px";
        divBulletId.style.height = "67px";
        divBulletId.style.backgroundImage = "";}, 800);
        playRocketSound()
    setTimeout(player2HasBeenHit, 700);
    setTimeout(function() {$("#bulletsContainer").empty();}, 1500);
}