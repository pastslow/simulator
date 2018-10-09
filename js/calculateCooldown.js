createjs.Sound.registerSound("audio/cool_down.mp3", "coolDown");
function playCoolDown(){
    createjs.Sound.play("coolDown");
}

function changeMechPositionWhenDoCoolDown(){
    var armourClassDiv = document.getElementById("armourClassDiv");
    var topWep1BreakId = document.getElementById("topWep1BreakId");
    var topWep2BreakId = document.getElementById("topWep2BreakId");
    armourClassDiv.style.transition = "0.8s";
    topWep1BreakId.style.transition = "0.8s";
    topWep2BreakId.style.transition = "0.8s";
    
    playCoolDown();
    armourClassDiv.style.marginTop = "10px";
    topWep1BreakId.style.marginTop = "12px";
    topWep2BreakId.style.marginTop = "12px";

    setTimeout(function(){
        armourClassDiv.style.marginTop = "0px";
        topWep1BreakId.style.marginTop = "0px";
        topWep2BreakId.style.marginTop = "0px";
    },400)

    recalculateHeatConsumption()
}


function recalculateHeatConsumption(){
    
    var spanHeatFightCurrent = document.getElementById("spanHeatFightCurrent");
    var spanHeatFightTotal = document.getElementById("spanHeatFightTotal");
    var coolingSpanFight = document.getElementById("coolingSpanFight");
    var heatCapacity = parseInt(spanHeatFightTotal.innerText)
    spanHeatFightCurrent.innerText = parseInt(spanHeatFightCurrent.innerText) - parseInt(coolingSpanFight.innerText);
  
    if(parseInt(spanHeatFightCurrent.innerText) <= 0){
        spanHeatFightCurrent.innerText = 0;
    }
    // Recalculate HeatConsumption for Player 1
    var procentHeat = ((100 * parseInt(spanHeatFightCurrent.innerText )) / heatCapacity)
    if (procentHeat <= -100) {
        procentHeat = 0;
    }
    if (procentHeat >= 100) {
        procentHeat = 100;
    }
    var totalHeat = procentHeat + "%";
  
    var containerHeatId = document.getElementById("containerHeatId");
    containerHeatId.style.width = totalHeat;

}