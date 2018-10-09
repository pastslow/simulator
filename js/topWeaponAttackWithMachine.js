function checkIfWeaponIsMachineTopType(weapon){
    if(weapon == "SPARTAN_CARNAGEL"){
        return true;
    }else {
        return false;
    }
}

function attackWithMachineTopType(weapon, divBulletId){
    if(checkIfWeaponIsMachineTopType(weapon)){
        machineTop(divBulletId);
    }
}

function machineTop(divBulletId){
    var divBulletId = document.getElementById(divBulletId);
    divBulletId.style.transition = "1s";
    divBulletId.style.display = "block";
    divBulletId.style.background = "transparent";
    divBulletId.style.left = "468px";
    setTimeout(function(){$(divBulletId).append("<div class='bul1'></div>")},200);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos1'></div>")},400);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos2'></div>")},600);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos3'></div>")},800);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos4'></div>")},1000);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos5'></div>")},1200);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos6'></div>")},400);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos7'></div>")},600);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos8'></div>")},800);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos9'></div>")},1000);
    setTimeout(function(){$(divBulletId).append("<div class='bul1 pos10'></div>")},1200);
    playSoundBullet()
    setTimeout(player2HasBeenHit, 800);
    setTimeout(function() {$("#bulletsContainer").empty();}, 1500);
}