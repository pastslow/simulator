function getToSideWepMenu() {
    var moduleContainer = document.getElementById("moduleContainer");
    var sideWepContainer = document.getElementById("sideWepContainer");
    var topWepContainer = document.getElementById("topWepContainer");
    var utilytiesContainer = document.getElementById("utilytiesContainer");
    var dmgTestImgId = document.getElementById("dmgTestImgId");
    var sideWepImgId = document.getElementById("sideWepImgId");
    var topWepImgId = document.getElementById("topWepImgId");
    var utilityImgId = document.getElementById("utilityImgId");
    var modulesImgId = document.getElementById("modulesImgId");
    moduleContainer.style.display = "none";
    sideWepContainer.style.display = "block";
    topWepContainer.style.display = "none";
    utilytiesContainer.style.display = "none";
    dmgTestImgId.style.border = "3px solid white";
    sideWepImgId.style.border = "3px solid red";
    topWepImgId.style.border = "3px solid white";
    utilityImgId.style.border = "3px solid white";
    modulesImgId.style.border = "3px solid white";
    audioOnClick()
}
function getToTopWepMenu() {
    var moduleContainer = document.getElementById("moduleContainer");
    var sideWepContainer = document.getElementById("sideWepContainer");
    var topWepContainer = document.getElementById("topWepContainer");
    var utilytiesContainer = document.getElementById("utilytiesContainer");
    var dmgTestImgId = document.getElementById("dmgTestImgId");
    var sideWepImgId = document.getElementById("sideWepImgId");
    var topWepImgId = document.getElementById("topWepImgId");
    var utilityImgId = document.getElementById("utilityImgId");
    var modulesImgId = document.getElementById("modulesImgId");
    moduleContainer.style.display = "none";
    sideWepContainer.style.display = "none";
    topWepContainer.style.display = "block";
    utilytiesContainer.style.display = "none";
    dmgTestImgId.style.border = "3px solid white";
    sideWepImgId.style.border = "3px solid white";
    topWepImgId.style.border = "3px solid red";
    utilityImgId.style.border = "3px solid white";
    modulesImgId.style.border = "3px solid white";
    audioOnClick()
}
function getToUtilytiesMenu() {
    var moduleContainer = document.getElementById("moduleContainer");
    var sideWepContainer = document.getElementById("sideWepContainer");
    var topWepContainer = document.getElementById("topWepContainer");
    var utilytiesContainer = document.getElementById("utilytiesContainer");
    var dmgTestImgId = document.getElementById("dmgTestImgId");
    var sideWepImgId = document.getElementById("sideWepImgId");
    var topWepImgId = document.getElementById("topWepImgId");
    var utilityImgId = document.getElementById("utilityImgId");
    var modulesImgId = document.getElementById("modulesImgId");
    moduleContainer.style.display = "none";
    sideWepContainer.style.display = "none";
    topWepContainer.style.display = "none";
    utilytiesContainer.style.display = "block";
    dmgTestImgId.style.border = "3px solid white";
    sideWepImgId.style.border = "3px solid white";
    topWepImgId.style.border = "3px solid white";
    utilityImgId.style.border = "3px solid red";
    modulesImgId.style.border = "3px solid white";
    audioOnClick()
}
function getToModulesMenu() {
    var moduleContainer = document.getElementById("moduleContainer");
    var sideWepContainer = document.getElementById("sideWepContainer");
    var topWepContainer = document.getElementById("topWepContainer");
    var utilytiesContainer = document.getElementById("utilytiesContainer");
    var dmgTestImgId = document.getElementById("dmgTestImgId");
    var sideWepImgId = document.getElementById("sideWepImgId");
    var topWepImgId = document.getElementById("topWepImgId");
    var utilityImgId = document.getElementById("utilityImgId");
    var modulesImgId = document.getElementById("modulesImgId");
    moduleContainer.style.display = "block";
    sideWepContainer.style.display = "none";
    topWepContainer.style.display = "none";
    utilytiesContainer.style.display = "none";
    dmgTestImgId.style.border = "3px solid white";
    sideWepImgId.style.border = "3px solid white";
    topWepImgId.style.border = "3px solid white";
    utilityImgId.style.border = "3px solid white";
    modulesImgId.style.border = "3px solid red";
    audioOnClick()
}
function audioOnClick() {
    clickAudio = document.getElementById("clickAudio");
    clickAudio.pause();
    clickAudio.currentTime = 0;
    clickAudio.play();
}


function getExcludesFromCurentSelect(currentSelect) {
    var select = document.getElementsByClassName("moduleSelect");
    var excludes;
    var mySet = new Set();
    for (i = 0; i < select.length; i++) {
      if (select[i] === currentSelect) {
        continue;
      }
      var curentItems = items[select[i].value];
      for (j = 0; j < curentItems.excludes.length; j++) {
        mySet.add(curentItems.excludes[j]);
      }
    }
    excludes = [...mySet.keys()];
    return excludes;
  }
  
  function onModuleItemChange(event) {
    var selects = moduleContainer.getElementsByTagName('select');
  
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
      var options = select.getElementsByTagName('option');
      
      for (var j = 0; j < options.length; j++) {
        var option = options[j];
        var optionItem = items[option.value];
        if (select.value === option.value) {
          continue;
        }
        var partialExcludes = getExcludesFromCurentSelect(select);
        option.disabled = partialExcludes.includes(optionItem.type);
      }
    }
  }
  