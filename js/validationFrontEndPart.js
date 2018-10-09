var armour = localStorage.getItem("armour");
var legs = localStorage.getItem("legs");


if(armour == "" || armour == "Nothing"){
   window.location.href = "index.html"; 
}
if(localStorage.getItem("armour") === null){
   window.location.href = "index.html"; 
}

  if(legs == "" || legs == "Nothing"){
   window.location.href = "index.html"; 
}
if(localStorage.getItem("legs") === null){
   window.location.href = "index.html"; 
}