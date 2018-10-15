
function displayCalculator(){
var tokenCalculator = document.getElementById("tokenCalculator");
tokenCalculator.style.display = "block";
tokenCalculator.style.display = "flex";
}

var totalTokenSpanId = document.getElementById("totalTokenSpanId");
var tokenInputId = document.getElementById("tokenInputId");
var tokenFightId = document.getElementById("tokenFightId");
var tokenDaysId = document.getElementById("tokenDaysId");
function changeTotalTokens(){
  var heatProcentCost = arenaTokens[ArenaHeatSelectDd.value];
  var coolingProcentCost = arenaTokens[ArenaCoolingSelectDd.value];
  var energyProcentCost = arenaTokens[ArenaEnergySelectDd.value];
  var engRegenProcentCost = arenaTokens[ArenaEngReSelectDd.value];
  var expResProcentCost = arenaTokens2[ArenaExpReSelectDd.value];
  var eleResProcentCost = arenaTokens2[ArenaEleReSelectDd.value];
  var pysResProcentCost = arenaTokens2[ArenaPysReSelectDd.value];
  var engDmgProcentCost = arenaTokens[energyDamageArena.value];
  var heatDmgProcentCost = arenaTokens[heatDamageArena.value];
  var expDmgProcentCost = arenaTokens[selectArenaExpDmgId.value];
  var eleDmgProcentCost = arenaTokens[selectArenaEleDmgId.value];
  var pysDmgProcentCost = arenaTokens[selectArenaPysDmgId.value];
  var totalHpProcentCost = arenaTokens[arenaTotalHpSelectDd.value];
  totalTokenSpanId.innerText = heatProcentCost + coolingProcentCost + energyProcentCost +
  engRegenProcentCost + expResProcentCost + eleResProcentCost +  pysResProcentCost +
  engDmgProcentCost + heatDmgProcentCost + expDmgProcentCost + eleDmgProcentCost +
  pysDmgProcentCost + totalHpProcentCost;
}
function numberOfDaysAndFightRequired(){
    tokenFightId.innerText = Math.ceil(totalTokenSpanId.innerText / tokenInputId.value);
    tokenDaysId.innerText = Math.ceil(tokenFightId.innerText / 5);
}