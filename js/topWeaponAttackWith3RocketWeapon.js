createjs.Sound.registerSound("audio/rocket.mp3", "multipleRockets");

function playMultipleRockets(){
    createjs.Sound.play("multipleRockets");
}

function checkIfWeaponIs3RocketsType(weapon) {
    if (weapon == "SUPREME_CANNON") {
        return true;
    } else {
        return false;
    }
}

function attackWithWeapon3Rockets(weapon, divBulletId) {
    if (checkIfWeaponIs3RocketsType(weapon)) {
        weapon3Rockets(divBulletId);
    }
}

function weapon3Rockets(divBulletId) {
    var divBulletId = document.getElementById(divBulletId);
    $("#bulletsContainer").addClass("containerBulletSecondClass");
    divBulletId.style.display = "block";
    divBulletId.style.top = "9px";
    divBulletId.style.marginLeft = "-52px";
    divBulletId.style.transform = "rotate(105deg)";
    divBulletId.style.transition = "2s";
    divBulletId.style.background = "url('img/fight/attackType/rocketUp.png')";
    divBulletId.style.backgroundSize = "contain";
    divBulletId.style.backgroundRepeat = "no-repeat";
    divBulletId.style.width = "20px";
    divBulletId.style.height = "28px";
    bulletsContainer.style.left = "148px";
    setTimeout(function () {
        playMultipleRockets();
        divBulletId.style.top = "150px";
        divBulletId.style.left = "600px";
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
    bulletsContainer.style.left = "";

    },2000);

     setTimeout(function(){$("#bulletsContainer").empty()},2000);
}