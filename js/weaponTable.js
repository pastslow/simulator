
var weaponStatsFight = document.getElementById("weaponStatsFight");
var indicatorOfDamage = document.getElementById("indicatorOfDamage"); indicatorOfDamage
function createWeaponsTableWithStats() {
    var coolingSpanFight = document.getElementById("coolingSpanFight");
    var engRegenFight = document.getElementById("engRegenFight");
    weaponStatsFight.style.display = "block";
    weaponStatsFight.style.display = "flex";
    indicatorOfDamage.style.display = "block";
    indicatorOfDamage.style.display = "flex";
    coolingSpanFight.innerText = localStorage.getItem("Cooling");
    engRegenFight.innerText = localStorage.getItem("EngRegen");
}
var minimDmgExpFight = document.getElementById("minimDmgExpFight");
var maxDmgExpFight = document.getElementById("maxDmgExpFight");
var coolingDamageSpan = document.getElementById("coolingDamageSpan");
var energyRegenDamageSpan = document.getElementById("energyRegenDamageSpan");
var totalHeatDamageSpan = document.getElementById("totalHeatDamageSpan");
var totalEnergyDamageSpan = document.getElementById("totalEnergyDamageSpan");
var HeatDamageSpan = document.getElementById("HeatDamageSpan");
var EnergyDamageSpan = document.getElementById("EnergyDamageSpan");
var pysResSpan = document.getElementById("pysResSpan");
var explosionRespan = document.getElementById("explosionRespan");
var electricResSpan = document.getElementById("electricResSpan");
var icoFightRandomDmg = document.getElementById("icoFightRandomDmg");
var heatConsumptionSpan = document.getElementById("heatConsumptionSpan");
var energyConsumptionSpan = document.getElementById("energyConsumptionSpan");
var icoFightL = document.getElementById("icoFightL");
var totalDmg = document.getElementById("totalDmg");
var icoFightR = document.getElementById("icoFightR");
var randomDmg = document.getElementById("randomDmg");
var icoFight = document.getElementById("icoFight");
var minimumDmgIndicator = document.getElementById("minimumDmgIndicator");
var randomDmgIndicator = document.getElementById("randomDmgIndicator");
var totalDmgIndicator = document.getElementById("totalDmgIndicator");
var arenaProcent = document.getElementById("arenaProcent");

var arenaExlposionDmg = localStorage.getItem("ArenaExplosionDamage");
var arenaElectricDmg = localStorage.getItem("ArenaElectricDamage");
var arenaPsyhicalDmg = localStorage.getItem("ArenaPsyhicalDamage");
var arenaDmgByProcent = document.getElementById("arenaDmgByProcent");
var spansIndicator = document.getElementsByClassName("colInd");
var resEnemyIndImg = document.getElementById("resEnemyIndImg");
var resIndicator = document.getElementById("resIndicator");
//player 1

var heatCapacity;
var energyCapacity;

// player2
var initialTotalHp;
var heatCapacityP2;
var energyCapacityP2;


function changeStatsFight(weapon) {

    // change colours of spans
    minimDmgExpFight.style.color = (items[weapon].color);
    maxDmgExpFight.style.color = (items[weapon].color);
    randomDmg.style.color = (items[weapon].color);
    totalDmg.style.color = (items[weapon].color);

    // write total damage
    var expResSpanP2 = document.getElementById("expResSpanP2");
    var eleResSpanP2 = document.getElementById("eleResSpanP2");
    var pysResSpanP2 = document.getElementById("pysResSpanP2");
    var indicateSpecificDmg = document.getElementById("indicateSpecificDmg");
    var minDmg = items[weapon].minDamage;
    var maxDmg = items[weapon].maxDamage;

    if (minimDmgExpFight.style.color == "red") {
        // change img of resIndicator 
        resEnemyIndImg.src = 'img/fight/icons/explosionRes.png';
        resIndicator.innerText = expResSpanP2.innerText;
        // write arena procent
        arenaProcent.innerText = arenaStats[arenaExlposionDmg];
        // calculate minimum Damage
        minimDmgExpFight.innerText = minDmg +
            Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate maximum Damage
        maxDmgExpFight.innerText = maxDmg +
            Math.round((maxDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate random Damage
        randomDmg.innerText = Math.round(Math.random() *
            (parseInt(maxDmgExpFight.innerText) - parseInt(minimDmgExpFight.innerText)))
        // calculate total Damage
        totalDmg.innerText = parseInt(minimDmgExpFight.innerText) +
            parseInt(randomDmg.innerText) - parseInt((expResSpanP2.innerText));
        // write Dmg on indicator
        arenaDmgByProcent.innerText = Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        minimumDmgIndicator.innerText = minDmg;
        randomDmgIndicator.innerText = randomDmg.innerText;
        totalDmgIndicator.innerText = totalDmg.innerText;
        //
        indicateSpecificDmg.style.color = "red";
        indicateSpecificDmg.innerText = -totalDmg.innerText;
        setTimeout(function () {
            indicateSpecificDmg.innerText = '';
        }, 1000);

        for (i = 0; i < spansIndicator.length; i++) {
            spansIndicator[i].style.color = "red"
        }
    }
    if (minimDmgExpFight.style.color == "blue") {
        // change img of resIndicator 
        resIndicator.innerText = eleResSpanP2.innerText;
        resEnemyIndImg.src = 'img/fight/icons/electricRes.png';
        // write arena procent
        arenaProcent.innerText = arenaStats[arenaElectricDmg];
        // calculate minimum Damage
        minimDmgExpFight.innerText = minDmg +
            Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate maximum Damage
        maxDmgExpFight.innerText = maxDmg +
            Math.round((maxDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate random Damage
        randomDmg.innerText = Math.round(Math.random() *
            (parseInt(maxDmgExpFight.innerText) - parseInt(minimDmgExpFight.innerText)))
        // calculate total Damage
        totalDmg.innerText = parseInt(minimDmgExpFight.innerText) +
            parseInt(randomDmg.innerText) - parseInt((eleResSpanP2.innerText));
        // write Dmg on indicator
        minimumDmgIndicator.innerText = minDmg;
        arenaDmgByProcent.innerText = Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        randomDmgIndicator.innerText = randomDmg.innerText;
        totalDmgIndicator.innerText = totalDmg.innerText;
        //
        indicateSpecificDmg.style.color = "lightblue";
        indicateSpecificDmg.innerText = -totalDmg.innerText;
        setTimeout(function () {
            indicateSpecificDmg.innerText = '';
        }, 1000);
        for (i = 0; i < spansIndicator.length; i++) {
            spansIndicator[i].style.color = "lightblue"
        }
    }
    if (minimDmgExpFight.style.color == "yellow") {
        // change img of resIndicator 
        resIndicator.innerText = pysResSpanP2.innerText;
        resEnemyIndImg.src = 'img/fight/icons/pysRes.png';
        // write arena procent
        arenaProcent.innerText = arenaStats[arenaPsyhicalDmg];
        // calculate minimum Damage
        minimDmgExpFight.innerText = minDmg +
            Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate maximum Damage
        maxDmgExpFight.innerText = maxDmg +
            Math.round((maxDmg * parseInt(arenaProcent.innerText) / 100));
        // calculate random Damage
        randomDmg.innerText = Math.round(Math.random() *
            (parseInt(maxDmgExpFight.innerText) - parseInt(minimDmgExpFight.innerText)))
        // calculate total Damage
        totalDmg.innerText = parseInt(minimDmgExpFight.innerText) +
            parseInt(randomDmg.innerText) - parseInt((pysResSpanP2.innerText));
        // write Dmg on indicator
        minimumDmgIndicator.innerText = minDmg;
        arenaDmgByProcent.innerText = Math.round((minDmg * parseInt(arenaProcent.innerText) / 100));
        randomDmgIndicator.innerText = randomDmg.innerText;
        totalDmgIndicator.innerText = totalDmg.innerText;
        //
        indicateSpecificDmg.style.color = "yellow";
        indicateSpecificDmg.innerText = -totalDmg.innerText;
        setTimeout(function () {
            indicateSpecificDmg.innerText = '';
        }, 1000);
        for (i = 0; i < spansIndicator.length; i++) {
            spansIndicator[i].style.color = "yellow"
        }
    }
    // calculate Heat Cost
    heatConsumptionSpan.innerText = (items[weapon].heatCost);

    var spanHeatFightCurrent = document.getElementById("spanHeatFightCurrent");

    var heat = parseInt(spanHeatFightCurrent.innerText) + parseInt(heatConsumptionSpan.innerText);
    spanHeatFightCurrent.innerText = heat;

    var procentHeat = (100 * heat) / heatCapacity;
    if (procentHeat >= 100) {
        procentHeat = 100;
    }
    var totalHeat = procentHeat + "%";
    var containerHeatId = document.getElementById("containerHeatId");

    containerHeatId.style.width = totalHeat;
    // calculate Energy Cost    
    energyConsumptionSpan.innerText = (items[weapon].energyCost);

    var spanEnergyFightCurrent = document.getElementById("spanEnergyFightCurrent");

    var energyConsumption = parseInt(spanEnergyFightCurrent.innerText)
     - parseInt(energyConsumptionSpan.innerText);
    var containerEnergyId = document.getElementById("containerEnergyId");
    
    if(parseInt(energyConsumptionSpan.innerText) > parseInt(spanEnergyFightCurrent.innerText)){
    spanEnergyFightCurrent.innerText = 0;
    }else{
        spanEnergyFightCurrent.innerText = energyConsumption;
    }

    var procentEnergy = (((100 * energyConsumption) / energyCapacity) - 100)
    if (procentEnergy <= -100) {
        procentEnergy = 100;
    }
    var totalEnergy = -procentEnergy + "%";
    if (procentEnergy == 100) {
        totalEnergy = procentEnergy + "%";
    }
    var containerEnergyId = document.getElementById("containerEnergyId");
    containerEnergyId.style.width = totalEnergy;

    coolingDamageSpan.innerText = (items[weapon].coolingDamage);
    energyRegenDamageSpan.innerText = (items[weapon].energyRegenDamage);

    totalHeatDamageSpan.innerText = (items[weapon].totalHeatDamage);
    totalEnergyDamageSpan.innerText = (items[weapon].totalEnergyDamage);

    HeatDamageSpan.innerText = (items[weapon].heatDamage);
    EnergyDamageSpan.innerText = (items[weapon].energyDamage);


    pysResSpan.innerText = (items[weapon].psyResistDrain);
    explosionRespan.innerText = (items[weapon].explosionResDrain);
    electricResSpan.innerText = (items[weapon].eleResDrain);

    // change image of attack type
    icoFight.src = `img/fight/icons/${items[weapon].damageIco}.png`;
    icoFightRandomDmg.src = `img/fight/icons/${items[weapon].damageIco}.png`;
    icoFightL.src = `img/fight/icons/${items[weapon].damageIco}.png`;
    icoFightR.src = `img/fight/icons/${items[weapon].damageIco}.png`;

    var iconsIndicator = document.getElementsByClassName("indicatorImg");
    for (i = 0; i < iconsIndicator.length; i++) {
        iconsIndicator[i].src = `img/fight/icons/${items[weapon].damageIco}.png`;
    }

    //                                      PLAYER 2

    var spanHpFight2 = document.getElementById("spanHpFight2");

    var hp = spanHpFight2.value - parseInt(totalDmg.innerText);

    var procent = (100 * hp) / parseInt(initialTotalHp);
    if (procent >= 100) {
        procent = 100;
    }

    var total = procent + "%";

    spanHpFight2.innerText = hp;
    spanHpFight2.value = hp;

    var containerHpPlayer2Id = document.getElementById("containerHpPlayer2Id");
    containerHpPlayer2Id.style.width = total;

    if (containerHpPlayer2Id.style.width <= "50%") {
        containerHpPlayer2Id.style.background = "red";
        spanHpFight2.style.color = "white";
    }
    // Calculate Heat of player  2

    var spanHeatFightCurrent2 = document.getElementById("spanHeatFightCurrent2");
    var heatP2 = parseInt(spanHeatFightCurrent2.innerText) + parseInt(HeatDamageSpan.innerText);
    spanHeatFightCurrent2.innerText = heatP2;

    var procentHeatPlayer2 = (100 * heatP2) / heatCapacityP2;
    if (procentHeatPlayer2 >= 100) {
        procentHeatPlayer2 = 100;
    }
    var totalHeat = procentHeatPlayer2 + "%";

    var containerHeatP2Id = document.getElementById("containerHeatP2Id");
    containerHeatP2Id.style.width = totalHeat;
    //                   Calculate energy damage player2
    //select element from board table
    var spanEnergyFightCurrent2 = document.getElementById("spanEnergyFightCurrent2");
    // create a variabile that calculate energyCOnsumption
    var energyConsumptionP2 = spanEnergyFightCurrent2.innerText - EnergyDamageSpan.innerText
    spanEnergyFightCurrent2.innerText = energyConsumptionP2;

    var procentEnergyP2 = (((100 * energyConsumptionP2) / energyCapacityP2) - 100)
    if (procentEnergyP2 <= -100) {
        procentEnergyP2 = 100;
    }
    var totalEnergyP2 = -procentEnergyP2 + "%";
    if (procentEnergyP2 == 100) {
        totalEnergyP2 = procentEnergyP2 + "%";
    }
    var containerEnergyP2 = document.getElementById("containerEnergyP2");
    containerEnergyP2.style.width = totalEnergyP2;

    // calculate explosion Resist player 2
    var explosionResP2 = parseInt(expResSpanP2.innerText) - parseInt(explosionRespan.innerText);
    expResSpanP2.innerText = explosionResP2;
    // calculate electric resist player 2
    var electricResP2 = parseInt(eleResSpanP2.innerText) - parseInt(electricResSpan.innerText);
    eleResSpanP2.innerText = electricResP2;
    // calculate electric resist player 2
    var psyhicalResP2 = parseInt(pysResSpanP2.innerText) - parseInt(pysResSpan.innerText);
    pysResSpanP2.innerText = psyhicalResP2;
    calculateTotalHeatDamage();
    calculateTotalEnergyDamage();
    calculateTotalCoolingDamage();
    calculateTotalEnergyRegenDamage();
}

function calculateTotalHeatDamage() {
    var totalHeatDamageSpan = document.getElementById("totalHeatDamageSpan");
    var spanHeatFightTotal2 = document.getElementById("spanHeatFightTotal2");

    var calculateHeatTotalDamage = spanHeatFightTotal2.innerText - totalHeatDamageSpan.innerText;

    if (parseInt(totalHeatDamageSpan.innerText) > parseInt(spanHeatFightTotal2.innerText)) {
        spanHeatFightTotal2.innerText = 1;
    } else {
        spanHeatFightTotal2.innerText = calculateHeatTotalDamage;
    }
    heatCapacityP2 = spanHeatFightTotal2.innerText;
}

function calculateTotalEnergyDamage() {
    var totalEnergyDamageSpan = document.getElementById("totalEnergyDamageSpan");
    var spanEnergyFightTotal2 = document.getElementById("spanEnergyFightTotal2");

    var calculateEnergyTotalDamage = spanEnergyFightTotal2.innerText - totalEnergyDamageSpan.innerText;

    if (parseInt(totalEnergyDamageSpan.innerText) > parseInt(spanEnergyFightTotal2.innerText)) {
        spanEnergyFightTotal2.innerText = 1;
    } else {
        spanEnergyFightTotal2.innerText = calculateEnergyTotalDamage;
    }
    energyCapacityP2 = spanEnergyFightTotal2.innerText;
}

function calculateTotalCoolingDamage() {
    var coolingDamageSpan = document.getElementById("coolingDamageSpan");
    var coolingEnemy = document.getElementById("coolingEnemy");

    var calculateEnergyTotalDamage = coolingEnemy.innerText - coolingDamageSpan.innerText;

    if (parseInt(coolingDamageSpan.innerText) > parseInt(coolingEnemy.innerText)) {
        coolingEnemy.innerText = 1;
    } else {
        coolingEnemy.innerText = calculateEnergyTotalDamage;
    }
}

function calculateTotalEnergyRegenDamage() {
    var energyRegenDamageSpan = document.getElementById("energyRegenDamageSpan");
    var energyRegenEnemy = document.getElementById("energyRegenEnemy");

    var calculateEnergyTotalDamage = energyRegenEnemy.innerText - energyRegenDamageSpan.innerText;

    if (parseInt(energyRegenDamageSpan.innerText) > parseInt(energyRegenEnemy.innerText)) {
        energyRegenEnemy.innerText = 1;
    } else {
        energyRegenEnemy.innerText = calculateEnergyTotalDamage;
    }
}