var elem3 = "";
var attackBtnDiv = document.getElementById("attackBtnDiv");
var sidewep1 = localStorage.getItem("sidewep1");
var sidewep2 = localStorage.getItem("sidewep2");
var sidewep3 = localStorage.getItem("sidewep3");
var sidewep4 = localStorage.getItem("sidewep4");
var topwep1 = localStorage.getItem("topwep1");
var topwep2 = localStorage.getItem("topwep2");

function generateButtons() {
    if (sidewep1 != "Nothing") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonSide1()' id='backgroundSideBtn1' class='unpressBtnDiv btn'>";
        elem3 += "<img id='imageBtn1' class= 'img' src=''>";
        elem3 += "</button>";
    }
    if (sidewep2 != "Nothing_R") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonSide2()' id='backgroundSideBtn2' class='unpressBtnDiv btn'>";
        elem3 += "<img id='imageBtn2' class= 'img' src=''>";
        elem3 += "</button>";
    }

    if (sidewep3 != "Nothing") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonSide3()' id='backgroundSideBtn3' class='unpressBtnDiv btn'>";
        elem3 += "<img id='imageBtn3' class= 'img' src=''>";
        elem3 += "</button>";
    }
    if (sidewep4 != "Nothing_R") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonSide4()' id='backgroundSideBtn4' class='unpressBtnDiv btn'>";
        elem3 += "<img id='imageBtn4' class= 'img' src=''>";
        elem3 += "</button>";
    }
        elem3 += "<button onclick='executeAllFunctionsOnButtonCoolDown()' id='backgroundSideBtn7' class='unpressBtnDiv btn'>";
        elem3 += "<img id='' class= 'img' src='img/fight/attackType/cooldown.png'>";
        elem3 += "</button>";
    
    if (topwep1 != "Nothing") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonTop1()' id='backgroundSideBtn5' class='unpressBtnDiv marginLeft btn'>";
        elem3 += "<img id='imageBtn5' class= 'img' src=''>";
        elem3 += "</button>";
    }
    if (topwep2 != "Nothing_R") {
        elem3 += "<button onclick='executeAllFunctionsOnButtonTop2()' id='backgroundSideBtn6' class='unpressBtnDiv btn'>";
        elem3 += "<img id='imageBtn6' class= 'img' src=''>";
        elem3 += "</button>";
    }
    attackBtnDiv.innerHTML = elem3;
}