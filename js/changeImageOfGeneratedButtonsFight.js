function changeImageOnButtons() {
    var imageBtn1 = document.getElementById("imageBtn1");
    var imageBtn2 = document.getElementById("imageBtn2");
    var imageBtn3 = document.getElementById("imageBtn3");
    var imageBtn4 = document.getElementById("imageBtn4");
    var imageBtn5 = document.getElementById("imageBtn5");
    var imageBtn6 = document.getElementById("imageBtn6");

    if (sidewep1 != "Nothing") {
        imageBtn1.src = `img/fight/sidewep/${sidewep1}.png`;
    }
    if (sidewep2 != "Nothing_R") {
        imageBtn2.src = `img/fight/sidewep/${sidewep2}.png`;
    }
    if (sidewep3 != "Nothing") {
        imageBtn3.src = `img/fight/sidewep/${sidewep3}.png`;
    }
    if (sidewep4 != "Nothing_R") {
        imageBtn4.src = `img/fight/sidewep/${sidewep4}.png`;
    }
    if (topwep1 != "Nothing") {
        imageBtn5.src = `img/fight/topWepons/${topwep1}.png`;
    }
    if (topwep2 != "Nothing_R") {
        imageBtn6.src = `img/fight/topWepons/${topwep2}.png`;
    }
}