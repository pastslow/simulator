var coolingEnemy = document.getElementById("coolingEnemy");
var energyRegenEnemy = document.getElementById("energyRegenEnemy");
function allFunction() {
    createTopPannels();
    createPlayer();
    getStats();
    getPlayer2Stats();
    generateButtons();
    changeImageOnButtons();
    createWeaponsTableWithStats();

    initialTotalHp = document.getElementById("hpInput").value;
    heatCapacityP2 = document.getElementById("heatInput").value;
    energyCapacityP2 = document.getElementById("engInput").value;
    coolingEnemy.innerText =  document.getElementById("coolingInput").value;
    energyRegenEnemy.innerText = document.getElementById("engRegenInput").value;
    fight.style.display = "block";

    heatCapacity = localStorage.getItem("Heat");
    energyCapacity = localStorage.getItem("Energy")
}
