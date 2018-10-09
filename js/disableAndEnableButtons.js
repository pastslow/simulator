var buttons = [];
var i;
var use1IcoId = document.getElementById("use1IcoId");
var use2IcoId = document.getElementById("use2IcoId");
var num = 0;
var empty = 0;


function disableAllButtons(attackType) {
    $(".btn").attr("disabled", "disabled");
    setTimeout(enableBtn, getCoolDown(attackType));
}

var attacksCooldowns = {
    mele: 4600,
    bullet: 1500,
    flame: 3000,
    laser: 1500,
    laserBullet: 1000,
    bomb: 3500,
    rocket: 1500,
    shootgun: 1000,
    sniper: 1000,
    bigBulletFromTop: 1000,
    topBomb: 2500,
    rocketUp: 2000,
    multipleRockets: 2200,
};

function getCoolDown(attackType) {
    return attacksCooldowns[attackType];
}
function enableBtn() {


    $(".btn").removeAttr("disabled");

    for (i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).disabled = true;
    }
    if (num == 1) {
        document.getElementById("use1IcoId").src = "img/fight/icons/emptyUse.png";
        empty += 1;
    }
    if (num == 2) {
        $(".btn").attr("disabled", "disabled");
        document.getElementById("use2IcoId").src = "img/fight/icons/emptyUse.png";
        empty += 1;
        num = 0;
    }

    setTimeout(startTurn, 200);
    if (num != 0) {
        checkIfYouHaveEnoughEnergyToAttack(sidewep1, "backgroundSideBtn1")
        checkIfYouHaveEnoughEnergyToAttack(sidewep2, "backgroundSideBtn2")
        checkIfYouHaveEnoughEnergyToAttack(sidewep3, "backgroundSideBtn3")
        checkIfYouHaveEnoughEnergyToAttack(sidewep4, "backgroundSideBtn4")
        checkIfYouHaveEnoughEnergyToAttack(topwep1, "backgroundSideBtn5")
        checkIfYouHaveEnoughEnergyToAttack(topwep2, "backgroundSideBtn6")
    }
    for (i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).disabled = true;
    }
}


function startTurn() {
    if (empty == 2) {
        
        if (parseInt(spanHeatFightCurrent.innerText) > parseInt(spanHeatFightTotal.innerText)) {
            empty = 0;
            document.getElementById("use1IcoId").src = "img/fight/icons/uses.png";
            document.getElementById("use2IcoId").src = "img/fight/icons/uses.png";
            $('#backgroundSideBtn7').trigger('click');
            setTimeout(function () {
                if (parseInt(spanHeatFightCurrent.innerText) > parseInt(spanHeatFightTotal.innerText)) {
                    $('#backgroundSideBtn7').trigger('click');
                }
            }, 1500)
            for (i = 0; i < buttons.length; i++) {
                document.getElementById(buttons[i]).style.backgroundImage = "url('css/frameUnpressedBtn.png')";
                document.getElementById(buttons[i]).childNodes[0].style.opacity = '1';
            }
            buttons = [];

        } else {

            $(".btn").removeAttr("disabled");

            empty = 0;
            document.getElementById("use1IcoId").src = "img/fight/icons/uses.png";
            document.getElementById("use2IcoId").src = "img/fight/icons/uses.png";

            var spanEnergyFightCurrent = document.getElementById("spanEnergyFightCurrent");
            spanEnergyFightCurrent.innerText = parseInt(spanEnergyFightCurrent.innerText) + parseInt(engRegenFight.innerText);
            if (parseInt(spanEnergyFightCurrent.innerText) >= parseInt(spanEnergyFightTotal.innerText)) {
                spanEnergyFightCurrent.innerText = spanEnergyFightTotal.innerText;
            }
            // Recalculate EnergyConsumption for Player 1
            var containerEnergyId = document.getElementById("containerEnergyId");
            var procentEnergy = (((100 * parseInt(spanEnergyFightCurrent.innerText)) / energyCapacity) - 100)
            if (procentEnergy <= -100) {
                procentEnergy = 100;
            }
            var totalEnergy = -procentEnergy + "%";
            if (procentEnergy == 100) {
                totalEnergy = procentEnergy + "%";
            }
            var containerEnergyId = document.getElementById("containerEnergyId");
            containerEnergyId.style.width = totalEnergy;

            // Recalculate EnergyConsumption for Player 2

            var spanEnergyFightCurrent2 = document.getElementById("spanEnergyFightCurrent2");
            spanEnergyFightCurrent2.innerText = parseInt(spanEnergyFightCurrent2.innerText) + parseInt(energyRegenEnemy.innerText);
            if (parseInt(spanEnergyFightCurrent2.innerText) >= parseInt(spanEnergyFightTotal2.innerText)) {
                spanEnergyFightCurrent2.innerText = spanEnergyFightTotal2.innerText;
            }

            var containerEnergyP2 = document.getElementById("containerEnergyP2");
            var procentEnergyP2 = (((100 * parseInt(spanEnergyFightCurrent2.innerText)) / energyCapacityP2) - 100)
            if (procentEnergyP2 <= -100) {
                procentEnergyP2 = 100;
            }
            var totalEnergyP2 = -procentEnergyP2 + "%";
            if (procentEnergyP2 == 100) {
                totalEnergyP2 = procentEnergyP2 + "%";
            }
            var containerEnergyP2 = document.getElementById("containerEnergyP2");
            containerEnergyP2.style.width = totalEnergyP2;

            // Recalculate HeatConsumption for Player 2

            var spanHeatFightCurrent2 = document.getElementById("spanHeatFightCurrent2");
            spanHeatFightCurrent2.innerText = parseInt(spanHeatFightCurrent2.innerText) - parseInt(coolingEnemy.innerText);
            if (parseInt(spanHeatFightCurrent2.innerText) >= parseInt(spanHeatFightTotal2.innerText)) {
                spanHeatFightCurrent2.innerText = spanHeatFightTotal2.innerText;
            }

            var containerHeatP2Id = document.getElementById("containerHeatP2Id");

            if (parseInt(spanHeatFightCurrent2.innerText) <= 0) {
                spanHeatFightCurrent2.innerText = 0;
            }
            var procentHeatP2 = ((100 * parseInt(spanHeatFightCurrent2.innerText)) / heatCapacityP2)
            if (procentHeatP2 <= -100) {
                procentHeatP2 = 0;
            }
            if (procentHeatP2 >= 100) {
                procentHeatP2 = 100;
            }
            var totalHeatP2 = procentHeatP2 + "%";

            var containerHeatP2Id = document.getElementById("containerHeatP2Id");
            containerHeatP2Id.style.width = totalHeatP2;

            checkIfYouHaveEnoughEnergyToAttack(sidewep1, "backgroundSideBtn1");
            checkIfYouHaveEnoughEnergyToAttack(sidewep2, "backgroundSideBtn2");
            checkIfYouHaveEnoughEnergyToAttack(sidewep3, "backgroundSideBtn3");
            checkIfYouHaveEnoughEnergyToAttack(sidewep4, "backgroundSideBtn4");
            checkIfYouHaveEnoughEnergyToAttack(topwep1, "backgroundSideBtn5");
            checkIfYouHaveEnoughEnergyToAttack(topwep2, "backgroundSideBtn6");


            for (i = 0; i < buttons.length; i++) {
                document.getElementById(buttons[i]).style.backgroundImage = "url('css/frameUnpressedBtn.png')";
                document.getElementById(buttons[i]).childNodes[0].style.opacity = '1';
            }

            buttons = [];
        }

    }
}
function checkIfYouHaveEnoughEnergyToAttack(weapon, btnId) {
    var btnId = document.getElementById(btnId);
    if (items[weapon].energyCost > parseInt(spanEnergyFightCurrent.innerText)) {
        btnId.disabled = true;
    } else {
        btnId.disabled = false;
    }
}