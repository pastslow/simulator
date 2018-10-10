createjs.Sound.registerSound("audio/panel.mp3", "panel")
function playPanel(){
    createjs.Sound.play("panel");
}
var armourSelectDd = document.getElementById("armourSelectDd");
var legsSelectDd = document.getElementById("legsSelectDd");
var module1SelectDd = document.getElementById("module1SelectDd");
var module2SelectDd = document.getElementById("module2SelectDd");
var module3SelectDd = document.getElementById("module3SelectDd");
var module4SelectDd = document.getElementById("module4SelectDd");
var module5SelectDd = document.getElementById("module5SelectDd");
var module6SelectDd = document.getElementById("module6SelectDd");
var module7SelectDd = document.getElementById("module7SelectDd");
var module8SelectDd = document.getElementById("module8SelectDd");
var sideWep1SelectDd = document.getElementById("sideWep1SelectDd");
var sideWep2SelectDd = document.getElementById("sideWep2SelectDd");
var sideWep3SelectDd = document.getElementById("sideWep3SelectDd");
var sideWep4SelectDd = document.getElementById("sideWep4SelectDd");
var topWep1SelectDd = document.getElementById("topWep1SelectDd");
var topWep2SelectDd = document.getElementById("topWep2SelectDd");
var teleportSelectDd = document.getElementById("teleportSelectDd");
var droneSelectDd = document.getElementById("droneSelectDd");
var chargeSelectDd = document.getElementById("chargeSelectDd");
var hookSelectDd = document.getElementById("hookSelectDd");
var ArenaHeatSelectDd = document.getElementById("ArenaHeatSelectDd");
var ArenaCoolingSelectDd = document.getElementById("ArenaCoolingSelectDd");
var ArenaEnergySelectDd = document.getElementById("ArenaEnergySelectDd");
var ArenaEngReSelectDd = document.getElementById("ArenaEngReSelectDd");
var ArenaExpReSelectDd = document.getElementById("ArenaExpReSelectDd");
var ArenaEleReSelectDd = document.getElementById("ArenaEleReSelectDd");
var ArenaPysReSelectDd = document.getElementById("ArenaPysReSelectDd");
var arenaTotalHpSelectDd = document.getElementById("arenaTotalHpSelectDd");
var selectArenaExpDmgId = document.getElementById("selectArenaExpDmgId");
var selectArenaEleDmgId = document.getElementById("selectArenaEleDmgId");
var selectArenaPysDmgId = document.getElementById("selectArenaPysDmgId");
var energyDamageArena = document.getElementById("energyDamageArena");
var heatDamageArena = document.getElementById("heatDamageArena");

function saveArmourValue() {
    localStorage.setItem("armour", armourSelectDd.value);
    localStorage.setItem("legs", legsSelectDd.value);
    localStorage.setItem("module1", module1SelectDd.value);
    localStorage.setItem("module2", module2SelectDd.value);
    localStorage.setItem("module3", module3SelectDd.value);
    localStorage.setItem("module4", module4SelectDd.value);
    localStorage.setItem("module5", module5SelectDd.value);
    localStorage.setItem("module6", module6SelectDd.value);
    localStorage.setItem("module7", module7SelectDd.value);
    localStorage.setItem("module8", module8SelectDd.value);
    localStorage.setItem("sidewep1", sideWep1SelectDd.value);
    localStorage.setItem("sidewep2", sideWep2SelectDd.value);
    localStorage.setItem("sidewep3", sideWep3SelectDd.value);
    localStorage.setItem("sidewep4", sideWep4SelectDd.value);
    localStorage.setItem("topwep1", topWep1SelectDd.value);
    localStorage.setItem("topwep2", topWep2SelectDd.value);
    localStorage.setItem("teleport", teleportSelectDd.value);
    localStorage.setItem("drone", droneSelectDd.value);
    localStorage.setItem("charge", chargeSelectDd.value);
    localStorage.setItem("hook", hookSelectDd.value);
    localStorage.setItem("ArenaHeat", ArenaHeatSelectDd.value);
    localStorage.setItem("ArenaCooling", ArenaCoolingSelectDd.value);
    localStorage.setItem("ArenaEnergy", ArenaEnergySelectDd.value);
    localStorage.setItem("ArenaEnergyRegen", ArenaEngReSelectDd.value);
    localStorage.setItem("ArenaExplosionResist", ArenaExpReSelectDd.value);
    localStorage.setItem("ArenaElectricResist", ArenaEleReSelectDd.value);
    localStorage.setItem("ArenaPsyhicalResist", ArenaPysReSelectDd.value);
    localStorage.setItem("ArenaTotalHealth", arenaTotalHpSelectDd.value);
    localStorage.setItem("ArenaExplosionDamage", selectArenaExpDmgId.value);
    localStorage.setItem("ArenaElectricDamage", selectArenaEleDmgId.value);
    localStorage.setItem("ArenaPsyhicalDamage", selectArenaPysDmgId.value);
    localStorage.setItem("ArenaEnergyDamageProcent", energyDamageArena.value);
    localStorage.setItem("ArenaHeatDamageProcent", heatDamageArena.value);
}
function loadWhatYouHaveSave() {
    armourSelectDd.value = localStorage.getItem("armour");
    legsSelectDd.value = localStorage.getItem("legs");
    module1SelectDd.value = localStorage.getItem("module1");
    module2SelectDd.value = localStorage.getItem("module2");
    module3SelectDd.value = localStorage.getItem("module3");
    module4SelectDd.value = localStorage.getItem("module4");
    module5SelectDd.value = localStorage.getItem("module5");
    module6SelectDd.value = localStorage.getItem("module6");
    module7SelectDd.value = localStorage.getItem("module7");
    module8SelectDd.value = localStorage.getItem("module8");
    sideWep1SelectDd.value = localStorage.getItem("sidewep1");
    sideWep2SelectDd.value = localStorage.getItem("sidewep2");
    sideWep3SelectDd.value = localStorage.getItem("sidewep3");
    sideWep4SelectDd.value = localStorage.getItem("sidewep4");
    topWep1SelectDd.value = localStorage.getItem("topwep1");
    topWep2SelectDd.value = localStorage.getItem("topwep2");
    teleportSelectDd.value = localStorage.getItem("teleport");
    droneSelectDd.value = localStorage.getItem("drone");
    chargeSelectDd.value = localStorage.getItem("charge");
    hookSelectDd.value = localStorage.getItem("hook");
    ArenaHeatSelectDd.value = localStorage.getItem("ArenaHeat");
    ArenaCoolingSelectDd.value = localStorage.getItem("ArenaCooling");
    ArenaEnergySelectDd.value = localStorage.getItem("ArenaEnergy");
    ArenaEngReSelectDd.value = localStorage.getItem("ArenaEnergyRegen");
    ArenaExpReSelectDd.value = localStorage.getItem("ArenaExplosionResist");
    ArenaEleReSelectDd.value = localStorage.getItem("ArenaElectricResist");
    ArenaPysReSelectDd.value = localStorage.getItem("ArenaPsyhicalResist");
    arenaTotalHpSelectDd.value = localStorage.getItem("ArenaTotalHealth");
    selectArenaExpDmgId.value = localStorage.getItem("ArenaExplosionDamage");
    selectArenaEleDmgId.value = localStorage.getItem("ArenaElectricDamage");
    selectArenaPysDmgId.value = localStorage.getItem("ArenaPsyhicalDamage");
    energyDamageArena.value = localStorage.getItem("ArenaEnergyDamageProcent");
    heatDamageArena.value = localStorage.getItem("ArenaHeatDamageProcent");

    changeImage();
    changeStats();
    playPanel();
    onModuleItemChange(event);

    var loadBar = document.getElementById("loadBar");
    loadBar.style.display = "none";

    var SuperMechDivId = document.getElementById("SuperMechDivId");
    SuperMechDivId.style.display = "block";

    var screenDisplayId = document.getElementById("screenDisplayId");
    screenDisplayId.style.display = "none";

    var simulatorId = document.getElementById("simulatorId");
    simulatorId.style.display = "block";

    var screenInform = document.getElementById("screenInform");
    screenInform.style.display = "none";
}
/*module1SelectDd.onchange = function () {
};*/


function selectOption(index) {
    document.getElementById("armourSelectDd").options.selectedIndex = index;
    document.getElementById("legsSelectDd").options.selectedIndex = index;
    document.getElementById("module1SelectDd").options.selectedIndex = index;
    document.getElementById("module2SelectDd").options.selectedIndex = index;
    document.getElementById("module3SelectDd").options.selectedIndex = index;
    document.getElementById("module4SelectDd").options.selectedIndex = index;
    document.getElementById("module5SelectDd").options.selectedIndex = index;
    document.getElementById("module6SelectDd").options.selectedIndex = index;
    document.getElementById("module7SelectDd").options.selectedIndex = index;
    document.getElementById("module8SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep1SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep2SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep3SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep4SelectDd").options.selectedIndex = index;
    document.getElementById("topWep1SelectDd").options.selectedIndex = index;
    document.getElementById("topWep2SelectDd").options.selectedIndex = index;
    document.getElementById("teleportSelectDd").options.selectedIndex = index;
    document.getElementById("droneSelectDd").options.selectedIndex = index;
    document.getElementById("chargeSelectDd").options.selectedIndex = index;
    document.getElementById("hookSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaHeatSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaCoolingSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEnergySelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEngReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaExpReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEleReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaPysReSelectDd").options.selectedIndex = index;
    document.getElementById("arenaTotalHpSelectDd").options.selectedIndex = index;
    document.getElementById("selectArenaExpDmgId").options.selectedIndex = index;
    document.getElementById("selectArenaEleDmgId").options.selectedIndex = index;
    document.getElementById("selectArenaPysDmgId").options.selectedIndex = index;
    document.getElementById("energyDamageArena").options.selectedIndex = index;
    document.getElementById("heatDamageArena").options.selectedIndex = index;


    saveArmourValue();
    changeImage();
    changeStats();
    playPanel();
    var loadBar = document.getElementById("loadBar");
    loadBar.style.display = "none";

    var SuperMechDivId = document.getElementById("SuperMechDivId");
    SuperMechDivId.style.display = "block";

    var screenDisplayId = document.getElementById("screenDisplayId");
    screenDisplayId.style.display = "none";

    var simulatorId = document.getElementById("simulatorId");
    simulatorId.style.display = "block";

    var screenInform = document.getElementById("screenInform");
    screenInform.style.display = "none";
}

function loadWhatYouHaveSaveAfterLoadingScreen() {
    armourSelectDd.value = localStorage.getItem("armour");
    legsSelectDd.value = localStorage.getItem("legs");
    module1SelectDd.value = localStorage.getItem("module1");
    module2SelectDd.value = localStorage.getItem("module2");
    module3SelectDd.value = localStorage.getItem("module3");
    module4SelectDd.value = localStorage.getItem("module4");
    module5SelectDd.value = localStorage.getItem("module5");
    module6SelectDd.value = localStorage.getItem("module6");
    module7SelectDd.value = localStorage.getItem("module7");
    module8SelectDd.value = localStorage.getItem("module8");
    sideWep1SelectDd.value = localStorage.getItem("sidewep1");
    sideWep2SelectDd.value = localStorage.getItem("sidewep2");
    sideWep3SelectDd.value = localStorage.getItem("sidewep3");
    sideWep4SelectDd.value = localStorage.getItem("sidewep4");
    topWep1SelectDd.value = localStorage.getItem("topwep1");
    topWep2SelectDd.value = localStorage.getItem("topwep2");
    teleportSelectDd.value = localStorage.getItem("teleport");
    droneSelectDd.value = localStorage.getItem("drone");
    chargeSelectDd.value = localStorage.getItem("charge");
    hookSelectDd.value = localStorage.getItem("hook");
    ArenaHeatSelectDd.value = localStorage.getItem("ArenaHeat");
    ArenaCoolingSelectDd.value = localStorage.getItem("ArenaCooling");
    ArenaEnergySelectDd.value = localStorage.getItem("ArenaEnergy");
    ArenaEngReSelectDd.value = localStorage.getItem("ArenaEnergyRegen");
    ArenaExpReSelectDd.value = localStorage.getItem("ArenaExplosionResist");
    ArenaEleReSelectDd.value = localStorage.getItem("ArenaElectricResist");
    ArenaPysReSelectDd.value = localStorage.getItem("ArenaPsyhicalResist");
    arenaTotalHpSelectDd.value = localStorage.getItem("ArenaTotalHealth");
    selectArenaExpDmgId.value = localStorage.getItem("ArenaExplosionDamage");
    selectArenaEleDmgId.value = localStorage.getItem("ArenaElectricDamage");
    selectArenaPysDmgId.value = localStorage.getItem("ArenaPsyhicalDamage");
    energyDamageArena.value = localStorage.getItem("ArenaEnergyDamageProcent");
    heatDamageArena.value = localStorage.getItem("ArenaHeatDamageProcent");

    changeImage();
    changeStats();
    playPanel();
    onModuleItemChange(event);

    var loadBar = document.getElementById("loadBar");
    loadBar.style.display = "none";

    var SuperMechDivId = document.getElementById("SuperMechDivId");
    SuperMechDivId.style.display = "block";

    var screenDisplayId = document.getElementById("screenDisplayId");
    screenDisplayId.style.display = "none";

    var simulatorId = document.getElementById("simulatorId");
    simulatorId.style.display = "block";

    var screenInform = document.getElementById("screenInform");
    screenInform.style.display = "none";
}

function StartNewByMakeYourselectOption(index) {
    document.getElementById("armourSelectDd").options.selectedIndex = index;
    document.getElementById("legsSelectDd").options.selectedIndex = index;
    document.getElementById("module1SelectDd").options.selectedIndex = index;
    document.getElementById("module2SelectDd").options.selectedIndex = index;
    document.getElementById("module3SelectDd").options.selectedIndex = index;
    document.getElementById("module4SelectDd").options.selectedIndex = index;
    document.getElementById("module5SelectDd").options.selectedIndex = index;
    document.getElementById("module6SelectDd").options.selectedIndex = index;
    document.getElementById("module7SelectDd").options.selectedIndex = index;
    document.getElementById("module8SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep1SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep2SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep3SelectDd").options.selectedIndex = index;
    document.getElementById("sideWep4SelectDd").options.selectedIndex = index;
    document.getElementById("topWep1SelectDd").options.selectedIndex = index;
    document.getElementById("topWep2SelectDd").options.selectedIndex = index;
    document.getElementById("teleportSelectDd").options.selectedIndex = index;
    document.getElementById("droneSelectDd").options.selectedIndex = index;
    document.getElementById("chargeSelectDd").options.selectedIndex = index;
    document.getElementById("hookSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaHeatSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaCoolingSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEnergySelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEngReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaExpReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaEleReSelectDd").options.selectedIndex = index;
    document.getElementById("ArenaPysReSelectDd").options.selectedIndex = index;
    document.getElementById("arenaTotalHpSelectDd").options.selectedIndex = index;
    document.getElementById("selectArenaExpDmgId").options.selectedIndex = index;
    document.getElementById("selectArenaEleDmgId").options.selectedIndex = index;
    document.getElementById("selectArenaPysDmgId").options.selectedIndex = index;
    document.getElementById("energyDamageArena").options.selectedIndex = index;
    document.getElementById("heatDamageArena").options.selectedIndex = index;

    saveArmourValue()
    changeImage();
    changeStats();
    playPanel();
    var loadBar = document.getElementById("loadBar");
    loadBar.style.display = "none";

    var SuperMechDivId = document.getElementById("SuperMechDivId");
    SuperMechDivId.style.display = "block";
    
    var screenDisplayId = document.getElementById("screenDisplayId");
    screenDisplayId.style.display = "none";

    var simulatorId = document.getElementById("simulatorId");
    simulatorId.style.display = "block";

    var screenInform = document.getElementById("screenInform");
    screenInform.style.display = "none";
}

var spanHp = document.getElementById("spanHp");
var spanHeat = document.getElementById("spanHeat");
var spanCooling = document.getElementById("spanCooling");
var spanEnergy = document.getElementById("spanEnergy");
var spanEngRegen = document.getElementById("spanEngRegen");
var spanExpRes = document.getElementById("spanExpRes");
var spanEleRes = document.getElementById("spanEleRes");
var spanPysRes = document.getElementById("spanPysRes");

function saveStatus() {
    localStorage.setItem("Hp", spanHp.value);
    localStorage.setItem("Heat", spanHeat.value);
    localStorage.setItem("Cooling", spanCooling.value);
    localStorage.setItem("Energy", spanEnergy.value);
    localStorage.setItem("EngRegen", spanEngRegen.value);
    localStorage.setItem("ExpRes", spanExpRes.value);
    localStorage.setItem("EleRes", spanEleRes.value);
    localStorage.setItem("PysRes", spanPysRes.value);
    localStorage.setItem("weight", spanWeight.value);
}