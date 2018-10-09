function getStats() {
    var spanHpFight = document.getElementById("spanHpFight");
    spanHpFight.innerText = localStorage.getItem("Hp");

    var spanHeatFightCurrent = document.getElementById("spanHeatFightCurrent");
    spanHeatFightCurrent.innerText = 0;

    var spanHeatFightTotal = document.getElementById("spanHeatFightTotal");
    spanHeatFightTotal.innerText = localStorage.getItem("Heat");

    var spanEnergyFightCurrent = document.getElementById("spanEnergyFightCurrent");
    spanEnergyFightCurrent.innerText = localStorage.getItem("Energy");

    var spanEnergyFightTotal = document.getElementById("spanEnergyFightTotal");
    spanEnergyFightTotal.innerText = localStorage.getItem("Energy");

    var spanPysFight = document.getElementById("spanPysFight");
    spanPysFight.innerText = localStorage.getItem("PysRes");
    spanPysFight.value = localStorage.getItem("PysRes");

    var spanExpFight = document.getElementById("spanExpFight");
    spanExpFight.innerText = localStorage.getItem("ExpRes");
    spanExpFight.value = localStorage.getItem("ExpRes");

    var spanEleRes = document.getElementById("spanEleRes");
    spanEleRes.innerText = localStorage.getItem("EleRes");
    spanEleRes.value = localStorage.getItem("EleRes");

    if (spanPysFight.value > 100) {
        spanPysFight.innerText = "99";
    }

    if (spanExpFight.value > 100) {
        spanExpFight.innerText = "99";
    }

    if (spanEleRes.value > 100) {
        spanEleRes.innerText = "99";
    }
}


function getPlayer2Stats() {
    var hpInput = document.getElementById("hpInput");
    var spanHpFight2 = document.getElementById("spanHpFight2");

    spanHpFight2.value = hpInput.value;
    if (hpInput.value > 999999) {
        spanHpFight2.innerText = 999999;
    } else {
        spanHpFight2.innerText = hpInput.value;
    }
    // HEAT BAR STATS
    var heatInput = document.getElementById("heatInput");
    var spanHeatFightCurrent2 = document.getElementById("spanHeatFightCurrent2");

    spanHeatFightCurrent2.value = 0
    spanHeatFightCurrent2.innerText = 0;

    var spanHeatFightTotal2 = document.getElementById("spanHeatFightTotal2");
    spanHeatFightTotal2.value = heatInput.value;
    if (heatInput.value > 99999) {
        spanHeatFightTotal2.innerText = 99999;
    } else {
        spanHeatFightTotal2.innerText = heatInput.value;
    }
    //ENERGY BAR STATS
    var engInput = document.getElementById("engInput");
    var spanEnergyFightCurrent2 = document.getElementById("spanEnergyFightCurrent2");

    spanEnergyFightCurrent2.value = engInput.value;
    if (engInput.value > 99999) {
        spanEnergyFightCurrent2.innerText = 99999;
    } else {
        spanEnergyFightCurrent2.innerText = engInput.value;
    }

    var spanEnergyFightTotal2 = document.getElementById("spanEnergyFightTotal2");

    spanEnergyFightTotal2.value = engInput.value;

    if (engInput.value > 99999) {
        spanEnergyFightTotal2.innerText = 99999;
    } else {
        spanEnergyFightTotal2.innerText = engInput.value;
    }
    // PSY RESIST
    var pysResSpanP2 = document.getElementById("pysResSpanP2");
    var pysResistInput = document.getElementById("pysResistInput");

    pysResSpanP2.value = pysResistInput.value;

        pysResSpanP2.innerText = pysResistInput.value;
    

    // ELE RESIST
    var eleResSpanP2 = document.getElementById("eleResSpanP2");
    var engResistInput = document.getElementById("engResistInput");

    eleResSpanP2.value = engResistInput.value;

        eleResSpanP2.innerText = engResistInput.value;
    

    // EXP RESIST
    var expResSpanP2 = document.getElementById("expResSpanP2");
    var expResistInput = document.getElementById("expResistInput");

    expResSpanP2.value = expResistInput.value;
    expResSpanP2.innerText = expResistInput.value;


}
// get armours from localStorage armours