
function checkIfWeaponIsShowerType(weapon) {
    if (weapon == "BURNING_SHOWER") {
        return true;
    } else {
        return false;
    }
}

function attackWithWeaponShower(weapon, divBulletId) {
    if (checkIfWeaponIsShowerType(weapon)) {
        weaponShower(divBulletId);
    }
}

function weaponShower(divBulletId) {
    var divBulletId = document.getElementById(divBulletId);
    $("#bulletsContainer").addClass("containerBulletSecondClass");
    divBulletId.style.display = "block";
    divBulletId.style.top = "9px";
    divBulletId.style.marginLeft = "-52px";
    divBulletId.style.transform = "rotate(90deg)";
    divBulletId.style.transition = "2s";
    divBulletId.style.background = "url('img/fight/attackType/rocketUp.png')";
    divBulletId.style.backgroundSize = "contain";
    divBulletId.style.backgroundRepeat = "no-repeat";
    bulletsContainer.style.top = "100px";
    bulletsContainer.style.left = "95px";
    divBulletId.style.width = "20px";
    divBulletId.style.height = "28px";
    
    if(divBulletId.id == "topDivBulletId2"){
    bulletsContainer.style.zIndex = -1;
    }else{
    bulletsContainer.style.zIndex = 1;

    }
    setTimeout(function () {
        playMultipleRockets();
        divBulletId.style.top = "50px";
        divBulletId.style.left = "800px";
    }, 100)
    setTimeout(function(){
        $(divBulletId).append("<div class='rocket1'></div>");
        playMultipleRockets();
    },200);
    setTimeout(function(){
        $(divBulletId).append("<div class='rocket1 posRocket'></div>");
    },200);
    setTimeout(function(){
        $(divBulletId).append("<div class='rocket1 posRocket2'></div>");
    },200);
    setTimeout(playMultipleRockets,500);
    setTimeout(function(){
        $(divBulletId).append("<div class='rocket1 posRocket3'></div>");
    },200);
    setTimeout(function(){
        $(divBulletId).append("<div class='rocket1 posRocket4'></div>");
    },200);
    setTimeout(playerGotHitByBomb, 800);
    setTimeout(playerGetToNormalAfterBomb, 1800);

    setTimeout(function(){
        $("#bulletsContainer").removeClass("containerBulletSecondClass");
        bulletsContainer.style.top = "-217px";
        bulletsContainer.style.left = "";
    bulletsContainer.style.zIndex = 1;

    },2000);

    setTimeout(function(){$("#bulletsContainer").empty()},2000);
}