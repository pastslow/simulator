function changeBackgroundOfButton() {
    var imageBtn1 = document.getElementById("imageBtn1");
    var backgroundSideBtn1 = document.getElementById("backgroundSideBtn1");
    backgroundSideBtn1.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn1.style.opacity = 0.5;
}
function changeBackgroundOfButton2() {
    var imageBtn2 = document.getElementById("imageBtn2");
    var backgroundSideBtn2 = document.getElementById("backgroundSideBtn2");
    backgroundSideBtn2.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn2.style.opacity = 0.5;
}
function changeBackgroundOfButton3() {
    var imageBtn3 = document.getElementById("imageBtn3");
    var backgroundSideBtn3 = document.getElementById("backgroundSideBtn3");
    backgroundSideBtn3.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn3.style.opacity = 0.5;
}
function changeBackgroundOfButton4() {
    var imageBtn4 = document.getElementById("imageBtn4");
    var backgroundSideBtn4 = document.getElementById("backgroundSideBtn4");
    backgroundSideBtn4.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn4.style.opacity = 0.5;
}
function changeBackgroundOfButton5() {
    var imageBtn5 = document.getElementById("imageBtn5");
    var backgroundSideBtn5 = document.getElementById("backgroundSideBtn5");
    backgroundSideBtn5.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn5.style.opacity = 0.5;
}
function changeBackgroundOfButton6() {
    var imageBtn6 = document.getElementById("imageBtn6");
    var backgroundSideBtn6 = document.getElementById("backgroundSideBtn6");
    backgroundSideBtn6.style.backgroundImage = "url('css/framePressedBtn.png')";
    imageBtn6.style.opacity = 0.5;
}
function createBullet1(weapon, bulletId, classBullet) {
    if (weapon != "WARHAMMER" &&
        weapon != "BACKBREAKER" &&
        weapon != "BRIGHTROAR_L" &&
        weapon != "Flaming_hammer" &&
        weapon != "HERONMARK_L" &&
        weapon != "SERAPHBLADE_L" &&
        weapon != "TERRORBLADE_L" &&
        weapon != "VIKING_HAMMER") {
        var divCreateByBtn = document.createElement("div");
        divCreateByBtn.id = bulletId;
        divCreateByBtn.className = classBullet;
        var element = document.getElementById("bulletsContainer");
        element.appendChild(divCreateByBtn);
    } else {

    }
}
function createBulletTop(bulletId, classBullet) {
    var divCreate = document.createElement("div");
    divCreate.id = bulletId;
    divCreate.className = classBullet;
    var element = document.getElementById("bulletsContainer");
    element.appendChild(divCreate);
}