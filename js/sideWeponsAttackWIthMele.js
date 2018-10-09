createjs.Sound.registerSound("audio/Hammers.mp3", "mele");
createjs.Sound.registerSound("audio/titanSound2.mp3", "titan")

createjs.Sound.registerSound("audio/walking.mp3", "walking")
var legs = localStorage.getItem("legs");
var sidewep1 = localStorage.getItem("sidewep1");
var sidewep2 = localStorage.getItem("sidewep2");
var sidewep3 = localStorage.getItem("sidewep3");
var sidewep4 = localStorage.getItem("sidewep4");


function playMeleSound() {
    createjs.Sound.play("mele");
}
function playTitanHasBeenHit(){
    createjs.Sound.play("titan");
}
function playWalking(){
    createjs.Sound.play("walking");
}

function checkIfMelleDmg(weapon) {
    if (weapon == "WARHAMMER" ||
        weapon == "BACKBREAKER" ||
        weapon == "BRIGHTROAR_L" ||
        weapon == "Flaming_hammer" ||
        weapon == "HERONMARK_L" ||
        weapon == "SERAPHBLADE_L" ||
        weapon == "TERRORBLADE_L" ||
        weapon == "VIKING_HAMMER") {
        return true;
    } else {
        return false;
    }
}

function attackWithMelle(weaponAttack, elemMoveId) {
    if (checkIfMelleDmg(weaponAttack)) {
        addlegsmove();
        setTimeout(function () {
            strikeWithMeleWepons(elemMoveId);
        }, 1700);
    }
}

function addlegsmove() {
    var leg1BreakId = document.getElementById("leg1BreakId");
    var leg2BreakId = document.getElementById("leg2BreakId");
    var firstPlayerDivId = document.getElementById("firstPlayerDivId");
    if (legs != "THE_CLAW" && legs != "ROLLING_BEASTS" && legs != "SPARKED_RUNNERS") {
        leg1BreakId.classList.add("moveLegs");
        playWalking();
        setTimeout(playWalking,1000);
        leg2BreakId.classList.add("moveLegs2");
        firstPlayerDivId.style.left = "306px";
    } else {
        firstPlayerDivId.style.left = "306px";
    }
    setTimeout(removeAnimationClass, 2200);
    setTimeout(function(){
        playWalking();

        setTimeout(playWalking,1000);

        walkBack();
    }, 2500);
    setTimeout(removeAnimationClass, 4500);
}
function removeAnimationClass() {
    
    leg1BreakId.classList.remove("moveLegs");
    leg2BreakId.classList.remove("moveLegs2");
}
function walkBack() {
    var leg1BreakId = document.getElementById("leg1BreakId");
    var leg2BreakId = document.getElementById("leg2BreakId");
    var firstPlayerDivId = document.getElementById("firstPlayerDivId");
    if (legs != "THE_CLAW" && legs != "ROLLING_BEASTS" && legs != "SPARKED_RUNNERS") {
        
        leg1BreakId.classList.add("moveLegs");
        leg2BreakId.classList.add("moveLegs2");
        firstPlayerDivId.style.left = "0px";
    } else {
        firstPlayerDivId.style.left = "0px";
    }
}
function player2HasBeenHit() {
    var player2 = document.getElementById("player2");
    player2.style.opacity = 0.5;
    playTitanHasBeenHit();
    setTimeout(player2GetBackToNormal,800)
}

function player2GetBackToNormal() {
    var player2 = document.getElementById("player2");
    player2.style.opacity = 1;
}

function strikeWithMeleWepons(elemMoveId) {
    var elemMove = document.getElementById(elemMoveId);
    elemMove.classList.add("strikeByMele");
    setTimeout(playMeleSound, 800);
    setTimeout(player2HasBeenHit, 1000);
    setTimeout(removeStrikeMeleAnimation, 3000);
}
function removeStrikeMeleAnimation() {
    sideWep1BreakId.classList.remove("strikeByMele");
    sideWep2BreakId.classList.remove("strikeByMele");
    sideWep3BreakId.classList.remove("strikeByMele");
    sideWep4BreakId.classList.remove("strikeByMele");
}