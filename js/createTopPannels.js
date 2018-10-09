var elem = "";
var elem2 = "";

var armourImageValue = localStorage.getItem("armour");
var robotCreate = document.getElementById("robotCreate");
var prepareFightDiv = document.getElementById("prepareFightDiv");


function createTopPannels() {
    // create fight stats 
    elem += "<div class='col-xs-6 col-sm-6 framestats'>";
    // container hp (border 1px solid black)
    elem += "<div class ='containerHp'>";
    elem += "</div>";
    //span that indicate your total hp
    elem += "<span id='spanHpFight' class ='spanHp'>1000</span>";
    // container Heat (border 1px solid black)
    elem += "<div class='maxHeatWidth'>";
    elem += "<div id= 'containerHeatId' class ='containerHeat'>";
    elem += "</div>";
    elem += "</div>";
    // a container that storage both spans for heat
    elem += "<div class ='spanHeatContainer'>";
    //spans that indicate your curent and your total heat
    elem += "<span id='spanHeatFightCurrent' class='spanHeat'>1000</span>";
    elem += "<span>/</span>";
    elem += "<span id='spanHeatFightTotal' class=''>1000</span>";
    elem += "</div>";
    //container Energy (border 1px solid black)
    elem += "<div class='energyConsumption'>";
    elem += "<div id='containerEnergyId' class= 'containerEnergy'>";
    elem += "</div>";
    elem += "</div>";
    // eng container for spans
    elem += "<div class='spanEnergyContainer'>";
    //spans that indicate your curent and your total energy
    elem += "<span id='spanEnergyFightCurrent' class='spanEnergy'>1000</span>";
    elem += "<span>/</span>";
    elem += "<span id='spanEnergyFightTotal' class=''>1000</span>";
    elem += "</div>";
    // defence container
    elem += "<span id='spanPysFight' class='pysResSpan'>22</span>";
    elem += "<span id='spanExpFight' class='expResSpan'>22</span>";
    elem += "<span id='spanEleRes' class='eleResSpan'>22</span>";

    // uses container
    elem += "<div class='useContainer'>";
    elem += "<img id='use1IcoId' class='icoUse' src='img/fight/icons/uses.png'/>"
    elem += "<img id='use2IcoId' class='icoUse' src='img/fight/icons/uses.png'/>"
    elem += "</div>";
    elem += "</div>";
                            // create fight stats  player 2
    elem += "<div class='col-xs-6 col-sm-6 framestatsReverse'>";
    // container hp (border 1px solid black)
    elem += "<div class='maxHealthWitdh'>";
    elem += "<div id='containerHpPlayer2Id' class ='containerHpP2'>";
    elem += "</div>";
    elem += "</div>";
    //span that indicate your total hp
    elem += "<span id='spanHpFight2' class ='spanHpP2'>1000</span>";
    // container Heat (border 1px solid black)
    elem += "<div class='maxHeatWidth'>"
    elem += "<div id='containerHeatP2Id' class ='containerHeatP2'>";
    elem += "</div>";
    elem += "</div>"

    // a container that storage both spans for heat
    elem += "<div class ='spanHeatContainerP2'>";
    //spans that indicate your curent and your total heat
    elem += "<span id='spanHeatFightCurrent2' class='spanHeatP2'>1000</span>";
    elem += "<span>/</span>";
    elem += "<span id='spanHeatFightTotal2' class=''>1000</span>";
    elem += "</div>";
    //container Energy (border 1px solid black)
    elem += "<div class='energyConsumption'>";
    elem += "<div id='containerEnergyP2' class= 'containerEnergyP2'>";
    elem += "</div>";
    elem += "</div>";
    // eng container for spans
    elem += "<div class='spanEnergyContainerP2'>";
    //spans that indicate your curent and your total energy
    elem += "<span id='spanEnergyFightCurrent2' class='spanEnergyP2'>1000</span>";
    elem += "<span>/</span>";
    elem += "<span id='spanEnergyFightTotal2' class=''>1000</span>";
    elem += "</div>";
    // defence container
    elem += "<div class='p2Res'>";
    elem += "<span id='eleResSpanP2' class='eleResSpanP2'>22</span>";
    elem += "<span id='expResSpanP2' class='expResSpanP2'>22</span>";
    elem += "<span id='pysResSpanP2' class='pysResSpanP2'>22</span>";
    elem += "</div>";
    elem += "<span id='indicateSpecificDmg' class='posRelative'></span>";
    elem += "</div>";


    prepareFightDiv.style.display = "none";
    robotCreate.innerHTML = elem;
}
