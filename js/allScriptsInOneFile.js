
function executeAllFunctions() {
  // from saveAndLoad.js
  saveArmourValue();
  //from ImageAndOptions.js
  changeImage();
  // from stats.js
  changeStats();
  //
  onModuleItemChange(event);
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

console.log(getExcludesFromCurentSelect(document.getElementsByTagName("select")[0]));