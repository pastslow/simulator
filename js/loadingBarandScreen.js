// execute loading bar when you start the webpage
window.onload = loading;

function loading(){
    loadingBar();
    loadingScreen();

    setTimeout(appearMenu, 1300);
}

function loadingBar() {
    var insideLoadingBar = document.getElementById("insideLoadingBar");
    insideLoadingBar.style.width = "100%";
    insideLoadingBar.style.background = "green";

    setTimeout(btnAppear, 3400);
};

function btnAppear() {
    var startNew = document.getElementById("startNew");
    var loadBtn = document.getElementById("loadBtn");
    var attention = document.getElementById("attention");
    var welcome = document.getElementById("welcome");

    startNew.style.display = "block";
    welcome.style.display = "block";

    if (localStorage.getItem('armour') != null) {
        loadBtn.style.display = "block"
        attention.style.display = "block";
        welcome.style.display = "none";
    };
}

function btnAppearScreen() {
    var startNew2 = document.getElementById("startNew2");
    var loadBtn2 = document.getElementById("loadBtn2");
    var attention2 = document.getElementById("attention2");
    var welcome2 = document.getElementById("welcome2");

    startNew2.style.display = "block";
    welcome2.style.display = "block";

    if (localStorage.getItem('armour') != null) {
        loadBtn2.style.display = "block"
        attention2.style.display = "block";
        welcome2.style.display = "none";
    };
}
function loadingScreen(){
    var imgUpId = document.getElementById("imgUpId");
    imgUpId.style.top = "-500px";
    var imgDownId = document.getElementById("imgDownId");
    imgDownId.style.top = "200px";

    
    setTimeout(btnAppearScreen, 1300);

}
function appearMenu(){
    var imgUpId = document.getElementById("imgUpId");
    var imgDownId = document.getElementById("imgDownId");

    var screenDisplayId = document.getElementById("screenDisplayId");
    screenDisplayId.style.display = "block";
}