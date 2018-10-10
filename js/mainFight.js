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
    coolingEnemy.innerText = document.getElementById("coolingInput").value;
    energyRegenEnemy.innerText = document.getElementById("engRegenInput").value;
    fight.style.display = "block";

    heatCapacity = localStorage.getItem("Heat");
    energyCapacity = localStorage.getItem("Energy")


    checkIfYouHaveEnoughEnergyToAttack(sidewep1, "backgroundSideBtn1")
    checkIfYouHaveEnoughEnergyToAttack(sidewep2, "backgroundSideBtn2")
    checkIfYouHaveEnoughEnergyToAttack(sidewep3, "backgroundSideBtn3")
    checkIfYouHaveEnoughEnergyToAttack(sidewep4, "backgroundSideBtn4")
    checkIfYouHaveEnoughEnergyToAttack(topwep1, "backgroundSideBtn5")
    checkIfYouHaveEnoughEnergyToAttack(topwep2, "backgroundSideBtn6")
}
