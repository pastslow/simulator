var elem2 = "";
var divBullet = "";
function createPlayer() {
    //                     CREATE FIRST PLAYER
    // Principal Container
    elem2 += "<div id='firstPlayerDivId' class='firstPlayerDivClass'>";
    elem2 += "<div id='armourClassDiv' class='armourClassDiv'>";
    elem2 += "<img id='armourImgId' src='' class='img' />";
    elem2 += "</div>";
    // Create Leg 1
    elem2 += "<div id='leg1BreakId' class='leg1Break'>";
    elem2 += "<div id='leg1BreakSec' class='leg1BreakSec'>";
    elem2 += "<img id='leg1imgId' src='' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Side Wepon 2 
    elem2 += "<div id='sideWep2BreakId' class='sideWep2Break'>";
    elem2 += "<div id='sidewep2BreakSec' class='sideWep2BreakSec'>";
    elem2 += "<img id='sideWep2ImgId' src='' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Side Wepon 4 
    elem2 += "<div id='sideWep4BreakId' class='sideWep4Break'>";
    elem2 += "<div id='sideWep4BreakSec' class='sideWep4BreakSec'>";
    elem2 += "<img id='sideWep4ImgId' src='' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Leg 2
    elem2 += "<div id='leg2BreakId' class='leg2Break'>";
    elem2 += "<div id='leg2BreakSec' class='leg2BreakSec'>";
    elem2 += "<img id='leg2imgId' src='' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Side Wepon 1 
    elem2 += "<div id='sideWep1BreakId' class='sideWep1Break'>";
    elem2 += "<div id='sideWep1BreakSec' class='sideWep1BreakSec'>";
    elem2 += "<img id='sideWep1ImgId' src='' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
  
    // Create Top wepon 1
    elem2 += "<div id='topWep1BreakId' class='topWep1Break'>";
    elem2 += "<div id='topWep1BreakSec' class='topWep1BreakSec'>";
    elem2 += "<img id='topWep1ImgId' src='img/fight/topWepons/IRON_FRENZY_L.png' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Side Wepon 3 
    elem2 += "<div id='sideWep3BreakId' class='sideWep3Break'>";
    elem2 += "<div id='sideWep3BreakSec' class='sideWep3BreakSec'>";
    elem2 += "<img id='sideWep3ImgId' src='img/fight/sidewep/Flaming_hammer.png' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    //Create Top wepon 2
    elem2 += "<div  id='topWep2BreakId' class='topWep2Break'>";
    elem2 += "<div id='topWep2BreakSec' class='topWep2BreakSec'>";
    elem2 += "<img id='topWep2ImgId' src='img/fight/topWepons/IRON_FRENZY_L.png' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";
    elem2 += "</div>";

    elem2 += "<span></span>"
    // creeate player 2 
    elem2 += "<div id='player2' class='player2'>";
    elem2 += "<img id='' src='img/fight/enemy/titan.png' class='img' />";
    elem2 += "<div class='hand1'>";
    elem2 += "<img id='' src='img/fight/enemy/hand.png' class='img' />";
    elem2 += "</div>";
    elem2 += "<div class='hand2'>";
    elem2 += "<img id='' src='img/fight/enemy/hand.png' class='img' />";
    elem2 += "</div>";
    elem2 += "</div>";

    player1.innerHTML = elem2;

    changeImageArmour();
    changeImageLegs();
    changeSideWep1Img();
    changeSideWep2Img();
    changeSideWep3Img();
    changeSideWep4Img();
    changeTopWepon1Img();
    changeTopWepon2Img();
}

function changeImageArmour() {
    var armour = localStorage.getItem("armour");
    var armourImgId = document.getElementById("armourImgId");
    armourImgId.src = "img/fight/armour/" + armour + ".png";

    var topWep1BreakId = document.getElementById("topWep1BreakId");
    var topWep2BreakId = document.getElementById("topWep2BreakId");

    if (armour == "ARCHIMOND_L") {
        armourClassDiv.style.width = "76px";
        armourClassDiv.style.left = "28px";
        armourClassDiv.style.top = "-27px";
    }

    if (armour == "AVENGER") {
        armourClassDiv.style.width = "94px";
        armourClassDiv.style.left = "20px";
    }


    if (armour == "BRUTALITY") {
        armourClassDiv.style.left = "8px";
        topWep1BreakId.style.top = "14px";
        topWep2BreakId.style.top = "16px";
    }

    if (armour == "GRIMREAPER") {
        armourClassDiv.style.width = "83px";
        armourClassDiv.style.left = "30px";
        armourClassDiv.style.top = "-11px";

        topWep1BreakId.style.left = "52px";
        topWep2BreakId.style.left = "75px";
    }

    if (armour == "INTERCEPTOR") {
        armourClassDiv.style.width = "86px";
        armourClassDiv.style.left = "27px";
        armourClassDiv.style.top = "-5px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "Lightning_Platinum_Vest") {
        armourClassDiv.style.width = "86px";
        armourClassDiv.style.left = "27px";
        armourClassDiv.style.top = "-5px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "Molten_platinum_vest") {
        armourClassDiv.style.width = "86px";
        armourClassDiv.style.left = "27px";
        armourClassDiv.style.top = "-5px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "NAGA") {
        armourClassDiv.style.width = "90px";
        armourClassDiv.style.left = "40px";
        armourClassDiv.style.top = "-6px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "NIGHTMARE") {
        armourClassDiv.style.width = "86px";
        armourClassDiv.style.left = "27px";
        armourClassDiv.style.top = "-5px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "SITH") {
        armourClassDiv.style.width = "86px";
        armourClassDiv.style.left = "27px";
        armourClassDiv.style.top = "-5px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }

    if (armour == "WINDIGO") {
        armourClassDiv.style.width = "112px";
        armourClassDiv.style.left = "21px";

        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";

        topWep1BreakId.style.top = "22px";
        topWep2BreakId.style.top = "22px";

    }

    if (armour == "ZARKARES") {
        armourClassDiv.style.width = "100px";
        armourClassDiv.style.left = "16px";
        armourClassDiv.style.top = "-15px";


        topWep1BreakId.style.left = "48px";
        topWep2BreakId.style.left = "74px";
    }
}

function changeImageLegs() {
    // leg 1
    var legs = localStorage.getItem("legs");
    var leg1imgId = document.getElementById("leg1imgId");
    leg1imgId.src = "img/fight/legs/" + legs + ".png";
    // leg 2
    var leg2imgId = document.getElementById("leg2imgId");
    leg2imgId.src = "img/fight/legs/" + legs + ".png";

    if (legs == "ROLLING_BEASTS") {
        leg1BreakSec.style.width = '120px';
        leg1BreakSec.style.left = '-43px';
        leg1BreakSec.style.top = '-34px';

        leg2BreakSec.style.width = '120px';
        leg2BreakSec.style.left = '-42px';
        leg2BreakSec.style.top = '-34px';
    }

    if (legs == "THE_CLAW") {
        leg1BreakSec.style.width = '100px';
        leg1BreakSec.style.top = '-8px';
        leg1BreakSec.style.left = '-30px';

        leg2BreakSec.style.display = 'none';

    }

    if (legs == "SPARKED_RUNNERS") {
        leg1BreakSec.style.width = '120px';
        leg1BreakSec.style.left = '-43px';
        leg1BreakSec.style.top = '-34px';

        leg2BreakSec.style.width = '120px';
        leg2BreakSec.style.left = '-42px';
        leg2BreakSec.style.top = '-34px';
    }
}

function changeSideWep1Img() {
    // SideWep1
    var sidewep1 = localStorage.getItem("sidewep1");
    var sideWep1ImgId = document.getElementById("sideWep1ImgId");
    sideWep1ImgId.src = "img/fight/sidewep/" + sidewep1 + ".png";

    if (sidewep1 == "ABOMINATION_L") {
        sideWep1BreakSec.style.width = "76px";
    }

    if (sidewep1 == "ARMOR_ANNIHILATOR_L") {
        sideWep1BreakSec.style.width = "76px";
        sideWep1BreakSec.style.left = '-17px';

    }

    if (sidewep1 == "ASH_CREATOR_L") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-13px";
        sideWep1BreakSec.style.top = "-18px";

    }

    if (sidewep1 == "BACKBREAKER") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }

    if (sidewep1 == "BIGDADDY_L") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-13px";
        sideWep1BreakSec.style.top = "-18px";
    }

    if (sidewep1 == "BLOODWEEP_L") {
        sideWep1BreakSec.style.width = "70px";
    }

    if (sidewep1 == "BRIGHTROAR_L") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }

    if (sidewep1 == "BUNKER_SHELLL") {
        sideWep1BreakSec.style.width = "70px";
    }

    if (sidewep1 == "CHAOS_BRINGER_L") {
        sideWep1BreakSec.style.width = "60px";
    }

    if (sidewep1 == "CORRUPT_LIGHT") {
        sideWep1BreakSec.style.width = "60px";
    }

    if (sidewep1 == "CRIMSON_RAPTURE_L") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-13px";
        sideWep1BreakSec.style.top = "-18px";
    }
    if (sidewep1 == "EMP") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-17px";
        sideWep1BreakSec.style.top = "-13px";
    }

    if (sidewep1 == "FLAMINATOR") {
        sideWep1BreakSec.style.width = "66px";
        sideWep1BreakSec.style.left = "-17px";
        sideWep1BreakSec.style.top = "-13px";
    }

    if (sidewep1 == "Flaming_hammer") {
        sideWep1BreakSec.style.width = "130px";
        sideWep1BreakSec.style.left = "-14px";
        sideWep1BreakSec.style.top = "-27px";
    }

    if (sidewep1 == "HEAT_BOMB") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-17px";
        sideWep1BreakSec.style.top = "-13px";
    }

    if (sidewep1 == "HERONMARK_L") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }

    if (sidewep1 == "HOT_FLASH") {
        sideWep1BreakSec.style.width = "66px";
        sideWep1BreakSec.style.left = "-17px";
        sideWep1BreakSec.style.top = "-13px";
    }

    if (sidewep1 == "LAST_WORDS") {
        sideWep1BreakSec.style.width = "65px";
        sideWep1BreakSec.style.left = "-15px";
        sideWep1BreakSec.style.top = "-18px";
    }
    if (sidewep1 == "MAGMA_BLAST_L") {
        sideWep1BreakSec.style.width = "70px";
    }
    if (sidewep1 == "MALICE_BEAM") {
        sideWep1BreakSec.style.width = "60px";
        sideWep1BreakSec.style.left = "-14px";
        sideWep1BreakSec.style.top = "-17px";
    }
    if (sidewep1 == "MORTAL_BULLET_L") {
        sideWep1BreakSec.style.width = "75px";
        sideWep1BreakSec.style.left = "-13px";
        sideWep1BreakSec.style.top = "-11px";
    }
    if (sidewep1 == "NIGHTFALL") {
        sideWep1BreakSec.style.width = "70px";
        sideWep1BreakSec.style.left = "-17px";
        sideWep1BreakSec.style.top = "-19px";
    }
    if (sidewep1 == "PURIFIER_L") {
        sideWep1BreakSec.style.width = "80px";
    }
    if (sidewep1 == "RECKONING_L") {
        sideWep1BreakSec.style.top = "-16px";
    }
    if (sidewep1 == "SERAPHBLADE_L") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }
    if (sidewep1 == "SORROW_L") {
        sideWep1BreakSec.style.width = "80px";
    }
    if (sidewep1 == "STORMWEAVER_L") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }
    if (sidewep1 == "SWEETIE_L") {
        sideWep1BreakSec.style.width = "70px";
        sideWep1BreakSec.style.left = "-19px";
        sideWep1BreakSec.style.top = "-16px";
    }
    if (sidewep1 == "TERROR_CRY") {
        sideWep1BreakSec.style.width = "65px";
        sideWep1BreakSec.style.left = "-15px";
        sideWep1BreakSec.style.top = "-18px";
    }
    if (sidewep1 == "TERRORBLADE_L") {
        sideWep1BreakSec.style.width = "140px";
        sideWep1BreakSec.style.left = "-16px";
    }
    if (sidewep1 == "WARHAMMER") {
        sideWep1BreakSec.style.width = "130px";
        sideWep1BreakSec.style.left = "-21px";
    }
    if (sidewep1 == "VIKING_HAMMER") {
        sideWep1BreakSec.style.width = "130px";
        sideWep1BreakSec.style.left = "-21px";
    }

    if (sidewep1 == "Nothing") {
        sideWep1BreakSec.style.display = "none";
    }

    if (sidewep1 == "") {
        sideWep1BreakSec.style.display = "none";
    }
}

function changeSideWep2Img() {
    // SideWep2
    var sidewep2 = localStorage.getItem("sidewep2");
    var sideWep2ImgId = document.getElementById("sideWep2ImgId");
    sideWep2ImgId.src = "img/fight/sidewep/" + sidewep2 + ".png";

    if (sidewep2 == "ABOMINATION_L") {
        sidewep2BreakSec.style.width = "76px";
    }

    if (sidewep2 == "ARMOR_ANNIHILATOR_L") {
        sidewep2BreakSec.style.width = "76px";
        sidewep2BreakSec.style.left = '-17px';

    }

    if (sidewep2 == "ASH_CREATOR_L") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-13px";
        sidewep2BreakSec.style.top = "-18px";

    }

    if (sidewep2 == "BACKBREAKER") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "0px";
    }

    if (sidewep2 == "BIGDADDY_L") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-13px";
        sidewep2BreakSec.style.top = "-18px";
    }

    if (sidewep2 == "BLOODWEEP_L") {
        sidewep2BreakSec.style.width = "70px";
    }

    if (sidewep2 == "BRIGHTROAR_L") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "-0px";
    }

    if (sidewep2 == "BUNKER_SHELLL") {
        sidewep2BreakSec.style.width = "70px";
    }

    if (sidewep2 == "CHAOS_BRINGER_L") {
        sidewep2BreakSec.style.width = "60px";
    }

    if (sidewep2 == "CORRUPT_LIGHT") {
        sidewep2BreakSec.style.width = "60px";
    }

    if (sidewep2 == "CRIMSON_RAPTURE_L") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-13px";
        sidewep2BreakSec.style.top = "-18px";
    }
    if (sidewep2 == "EMP") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-17px";
        sidewep2BreakSec.style.top = "-13px";
    }

    if (sidewep2 == "FLAMINATOR") {
        sidewep2BreakSec.style.width = "66px";
        sidewep2BreakSec.style.left = "-17px";
        sidewep2BreakSec.style.top = "-13px";
    }

    if (sidewep2 == "Flaming_hammer") {
        sidewep2BreakSec.style.width = "130px";
        sidewep2BreakSec.style.left = "0px";
        sidewep2BreakSec.style.top = "-27px";
    }

    if (sidewep2 == "HEAT_BOMB") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-17px";
        sidewep2BreakSec.style.top = "-13px";
    }

    if (sidewep2 == "HERONMARK_L") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "0px";
    }

    if (sidewep2 == "HOT_FLASH") {
        sidewep2BreakSec.style.width = "66px";
        sidewep2BreakSec.style.left = "-17px";
        sidewep2BreakSec.style.top = "-13px";
    }

    if (sidewep2 == "LAST_WORDS") {
        sidewep2BreakSec.style.width = "65px";
        sidewep2BreakSec.style.left = "-15px";
        sidewep2BreakSec.style.top = "-18px";
    }
    if (sidewep2 == "MAGMA_BLAST_L") {
        sidewep2BreakSec.style.width = "70px";
    }
    if (sidewep2 == "MALICE_BEAM") {
        sidewep2BreakSec.style.width = "60px";
        sidewep2BreakSec.style.left = "-14px";
        sidewep2BreakSec.style.top = "-17px";
    }
    if (sidewep2 == "MORTAL_BULLET_L") {
        sidewep2BreakSec.style.width = "75px";
        sidewep2BreakSec.style.left = "-13px";
        sidewep2BreakSec.style.top = "-11px";
    }
    if (sidewep2 == "NIGHTFALL") {
        sidewep2BreakSec.style.width = "70px";
        sidewep2BreakSec.style.left = "-17px";
        sidewep2BreakSec.style.top = "-19px";
    }
    if (sidewep2 == "PURIFIER_L") {
        sidewep2BreakSec.style.width = "80px";
    }
    if (sidewep2 == "RECKONING_L") {
        sidewep2BreakSec.style.top = "-16px";
    }
    if (sidewep2 == "SERAPHBLADE_L") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "0px";
    }
    if (sidewep2 == "SORROW_L") {
        sidewep2BreakSec.style.width = "80px";
    }
    if (sidewep2 == "STORMWEAVER_L") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "0px";
    }
    if (sidewep2 == "SWEETIE_L") {
        sidewep2BreakSec.style.width = "70px";
        sidewep2BreakSec.style.left = "-19px";
        sidewep2BreakSec.style.top = "-16px";
    }
    if (sidewep2 == "TERROR_CRY") {
        sidewep2BreakSec.style.width = "65px";
        sidewep2BreakSec.style.left = "-15px";
        sidewep2BreakSec.style.top = "-18px";
    }
    if (sidewep2 == "TERRORBLADE_L") {
        sidewep2BreakSec.style.width = "140px";
        sidewep2BreakSec.style.left = "0px";
    }
    if (sidewep2 == "WARHAMMER") {
        sidewep2BreakSec.style.width = "130px";
        sidewep2BreakSec.style.left = "0px";
    }
    if (sidewep2 == "VIKING_HAMMER") {
        sidewep2BreakSec.style.width = "130px";
        sidewep2BreakSec.style.left = "0px";
    }

    if (sidewep2 == "Nothing_R") {
        sidewep2BreakSec.style.display = "none";
    }

    if (sidewep2 == "") {
        sidewep2BreakSec.style.display = "none";
    }
}

function changeSideWep3Img() {
    // sidewep3
    var sidewep3 = localStorage.getItem("sidewep3");
    var sideWep3ImgId = document.getElementById("sideWep3ImgId");
    sideWep3ImgId.src = "img/fight/sidewep/" + sidewep3 + ".png";

    if (sidewep3 == "ABOMINATION_L") {
        sideWep3BreakSec.style.width = "76px";
    }

    if (sidewep3 == "ARMOR_ANNIHILATOR_L") {
        sideWep3BreakSec.style.width = "76px";
        sideWep3BreakSec.style.left = '-17px';

    }

    if (sidewep3 == "ASH_CREATOR_L") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-13px";
        sideWep3BreakSec.style.top = "-18px";

    }

    if (sidewep3 == "BACKBREAKER") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }

    if (sidewep3 == "BIGDADDY_L") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-13px";
        sideWep3BreakSec.style.top = "-18px";
    }

    if (sidewep3 == "BLOODWEEP_L") {
        sideWep3BreakSec.style.width = "70px";
    }

    if (sidewep3 == "BRIGHTROAR_L") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }

    if (sidewep3 == "BUNKER_SHELLL") {
        sideWep3BreakSec.style.width = "70px";
    }

    if (sidewep3 == "CHAOS_BRINGER_L") {
        sideWep3BreakSec.style.width = "60px";
    }

    if (sidewep3 == "CORRUPT_LIGHT") {
        sideWep3BreakSec.style.width = "60px";
    }

    if (sidewep3 == "CRIMSON_RAPTURE_L") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-13px";
        sideWep3BreakSec.style.top = "-18px";
    }
    if (sidewep3 == "EMP") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-17px";
        sideWep3BreakSec.style.top = "-13px";
    }

    if (sidewep3 == "FLAMINATOR") {
        sideWep3BreakSec.style.width = "66px";
        sideWep3BreakSec.style.left = "-17px";
        sideWep3BreakSec.style.top = "-13px";
    }

    if (sidewep3 == "Flaming_hammer") {
        sideWep3BreakSec.style.width = "130px";
        sideWep3BreakSec.style.left = "-14px";
        sideWep3BreakSec.style.top = "-27px";
    }

    if (sidewep3 == "HEAT_BOMB") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-17px";
        sideWep3BreakSec.style.top = "-13px";
    }

    if (sidewep3 == "HERONMARK_L") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }

    if (sidewep3 == "HOT_FLASH") {
        sideWep3BreakSec.style.width = "66px";
        sideWep3BreakSec.style.left = "-17px";
        sideWep3BreakSec.style.top = "-13px";
    }

    if (sidewep3 == "LAST_WORDS") {
        sideWep3BreakSec.style.width = "65px";
        sideWep3BreakSec.style.left = "-15px";
        sideWep3BreakSec.style.top = "-18px";
    }
    if (sidewep3 == "MAGMA_BLAST_L") {
        sideWep3BreakSec.style.width = "70px";
    }
    if (sidewep3 == "MALICE_BEAM") {
        sideWep3BreakSec.style.width = "60px";
        sideWep3BreakSec.style.left = "-14px";
        sideWep3BreakSec.style.top = "-17px";
    }
    if (sidewep3 == "MORTAL_BULLET_L") {
        sideWep3BreakSec.style.width = "75px";
        sideWep3BreakSec.style.left = "-13px";
        sideWep3BreakSec.style.top = "-11px";
    }
    if (sidewep3 == "NIGHTFALL") {
        sideWep3BreakSec.style.width = "70px";
        sideWep3BreakSec.style.left = "-17px";
        sideWep3BreakSec.style.top = "-19px";
    }
    if (sidewep3 == "PURIFIER_L") {
        sideWep3BreakSec.style.width = "80px";
    }
    if (sidewep3 == "RECKONING_L") {
        sideWep3BreakSec.style.top = "-16px";
    }
    if (sidewep3 == "SERAPHBLADE_L") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }
    if (sidewep3 == "SORROW_L") {
        sideWep3BreakSec.style.width = "80px";
    }
    if (sidewep3 == "STORMWEAVER_L") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }
    if (sidewep3 == "SWEETIE_L") {
        sideWep3BreakSec.style.width = "70px";
        sideWep3BreakSec.style.left = "-19px";
        sideWep3BreakSec.style.top = "-16px";
    }
    if (sidewep3 == "TERROR_CRY") {
        sideWep3BreakSec.style.width = "65px";
        sideWep3BreakSec.style.left = "-15px";
        sideWep3BreakSec.style.top = "-18px";
    }
    if (sidewep3 == "TERRORBLADE_L") {
        sideWep3BreakSec.style.width = "140px";
        sideWep3BreakSec.style.left = "-16px";
    }
    if (sidewep3 == "WARHAMMER") {
        sideWep3BreakSec.style.width = "130px";
        sideWep3BreakSec.style.left = "-21px";
    }
    if (sidewep3 == "VIKING_HAMMER") {
        sideWep3BreakSec.style.width = "130px";
        sideWep3BreakSec.style.left = "-21px";
    }

    if (sidewep3 == "Nothing") {
        sideWep3BreakSec.style.display = "none";
    }

    if (sidewep3 == "") {
        sideWep3BreakSec.style.display = "none";
    }
}

function changeSideWep4Img() {
    // SideWep4
    var sidewep4 = localStorage.getItem("sidewep4");
    var sideWep4ImgId = document.getElementById("sideWep4ImgId");
    sideWep4ImgId.src = "img/fight/sidewep/" + sidewep4 + ".png";

    if (sidewep4 == "ABOMINATION_L") {
        sideWep4BreakSec.style.width = "76px";
    }

    if (sidewep4 == "ARMOR_ANNIHILATOR_L") {
        sideWep4BreakSec.style.width = "76px";
        sideWep4BreakSec.style.left = '-17px';

    }

    if (sidewep4 == "ASH_CREATOR_L") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "-13px";
        sideWep4BreakSec.style.top = "-18px";

    }

    if (sidewep4 == "BACKBREAKER") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }

    if (sidewep4 == "BIGDADDY_L") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "-13px";
        sideWep4BreakSec.style.top = "-18px";
    }

    if (sidewep4 == "BLOODWEEP_L") {
        sideWep4BreakSec.style.width = "70px";
    }

    if (sidewep4 == "BRIGHTROAR_L") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }

    if (sidewep4 == "BUNKER_SHELLL") {
        sideWep4BreakSec.style.width = "70px";
    }

    if (sidewep4 == "CHAOS_BRINGER_L") {
        sideWep4BreakSec.style.width = "60px";
    }

    if (sidewep4 == "CORRUPT_LIGHT") {
        sideWep4BreakSec.style.width = "60px";
    }

    if (sidewep4 == "CRIMSON_RAPTURE_L") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "-13px";
        sideWep4BreakSec.style.top = "-18px";
    }
    if (sidewep4 == "EMP") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "-17px";
        sideWep4BreakSec.style.top = "-13px";
    }

    if (sidewep4 == "FLAMINATOR") {
        sideWep4BreakSec.style.width = "66px";
        sideWep4BreakSec.style.left = "-17px";
        sideWep4BreakSec.style.top = "-13px";
    }

    if (sidewep4 == "Flaming_hammer") {
        sideWep4BreakSec.style.width = "130px";
        sideWep4BreakSec.style.left = "-14px";
        sideWep4BreakSec.style.top = "-27px";
    }

    if (sidewep4 == "HEAT_BOMB") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "0px";
        sideWep4BreakSec.style.top = "-13px";
    }

    if (sidewep4 == "HERONMARK_L") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }

    if (sidewep4 == "HOT_FLASH") {
        sideWep4BreakSec.style.width = "66px";
        sideWep4BreakSec.style.left = "-17px";
        sideWep4BreakSec.style.top = "-13px";
    }

    if (sidewep4 == "LAST_WORDS") {
        sideWep4BreakSec.style.width = "65px";
        sideWep4BreakSec.style.left = "-15px";
        sideWep4BreakSec.style.top = "-18px";
    }
    if (sidewep4 == "MAGMA_BLAST_L") {
        sideWep4BreakSec.style.width = "70px";
    }
    if (sidewep4 == "MALICE_BEAM") {
        sideWep4BreakSec.style.width = "60px";
        sideWep4BreakSec.style.left = "-14px";
        sideWep4BreakSec.style.top = "-17px";
    }
    if (sidewep4 == "MORTAL_BULLET_L") {
        sideWep4BreakSec.style.width = "75px";
        sideWep4BreakSec.style.left = "-13px";
        sideWep4BreakSec.style.top = "-11px";
    }
    if (sidewep4 == "NIGHTFALL") {
        sideWep4BreakSec.style.width = "70px";
        sideWep4BreakSec.style.left = "-17px";
        sideWep4BreakSec.style.top = "-19px";
    }
    if (sidewep4 == "PURIFIER_L") {
        sideWep4BreakSec.style.width = "80px";
    }
    if (sidewep4 == "RECKONING_L") {
        sideWep4BreakSec.style.top = "-16px";
    }
    if (sidewep4 == "SERAPHBLADE_L") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }
    if (sidewep4 == "SORROW_L") {
        sideWep4BreakSec.style.width = "80px";
    }
    if (sidewep4 == "STORMWEAVER_L") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }
    if (sidewep4 == "SWEETIE_L") {
        sideWep4BreakSec.style.width = "70px";
        sideWep4BreakSec.style.left = "-19px";
        sideWep4BreakSec.style.top = "-16px";
    }
    if (sidewep4 == "TERROR_CRY") {
        sideWep4BreakSec.style.width = "65px";
        sideWep4BreakSec.style.left = "-15px";
        sideWep4BreakSec.style.top = "-18px";
    }
    if (sidewep4 == "TERRORBLADE_L") {
        sideWep4BreakSec.style.width = "140px";
        sideWep4BreakSec.style.left = "-16px";
    }
    if (sidewep4 == "WARHAMMER") {
        sideWep4BreakSec.style.width = "130px";
        sideWep4BreakSec.style.left = "-21px";
    }
    if (sidewep4 == "VIKING_HAMMER") {
        sideWep4BreakSec.style.width = "130px";
        sideWep4BreakSec.style.left = "-21px";
    }

    if (sidewep4 == "Nothing") {
        sideWep4BreakSec.style.display = "none";
    }

    if (sidewep4 == "") {
        sideWep4BreakSec.style.display = "none";
    }
}

function changeTopWepon1Img() {
    var topWepon1 = localStorage.getItem("topwep1");
    var topWep1ImgId = document.getElementById("topWep1ImgId");

    topWep1ImgId.src = `img/fight/topWepons/${topWepon1}.png`

    if (topWepon1 == "DESERT_FURY_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "DESERT_SNAKE_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "DESOLATION") {
        topWep1BreakSec.style.width = "45px";
        topWep1BreakSec.style.left = "-25px";
        topWep1BreakSec.style.top = "-33px";
    }
    if (topWepon1 == "FLAMING_SCOPE_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "FALCON") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "HYSTERIA") {
        topWep1BreakSec.style.width = "70px";
        topWep1BreakSec.style.top = "-17px";
    }
    if (topWepon1 == "LIGHTNING_SCOPE") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "MIGHTY_CANNON_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "RECKLESS_BEAM") {
        topWep1BreakSec.style.width = "70px";
        topWep1BreakSec.style.top = "-17px";
    }
    if (topWepon1 == "SAVAGERY") {
        topWep1BreakSec.style.width = "70px";
        topWep1BreakSec.style.top = "-17px";
    }
    if (topWepon1 == "SPARTAN_CARNAGEL") {
        topWep1BreakSec.style.width = "70px";
        topWep1BreakSec.style.top = "-17px";
    }
    if (topWepon1 == "SPINEFALL_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "SUPREME_CANNON") {
        topWep1BreakSec.style.width = "50px";
        topWep1BreakSec.style.left = "-20px";
        topWep1BreakSec.style.top = "-29px";
    }
    if (topWepon1 == "VALIANT_SNIPER_L") {
        topWep1BreakSec.style.width = "80px";
    }
    if (topWepon1 == "VANDAL_RAGE") {
        topWep1BreakSec.style.width = "70px";
    }

    if (topWepon1 == "Nothing") {
        topWep1BreakSec.style.display = "none";
    }
    if (topWepon1 == "") {
        topWep1BreakSec.style.display = "none";
    }
}
function changeTopWepon2Img() {
    var topWepon2 = localStorage.getItem("topwep2");
    var topWep2ImgId = document.getElementById("topWep2ImgId");

    topWep2ImgId.src = `img/fight/topWepons/${topWepon2}.png`


    if (topWepon2 == "DESERT_FURY_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "DESERT_SNAKE_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "DESOLATION") {
        topWep2BreakSec.style.width = "45px";
        topWep2BreakSec.style.left = "-25px";
        topWep2BreakSec.style.top = "-33px";
    }
    if (topWepon2 == "FLAMING_SCOPE_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "FALCON") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "HYSTERIA") {
        topWep2BreakSec.style.width = "70px";
        topWep2BreakSec.style.top = "-17px";
    }
    if (topWepon2 == "LIGHTNING_SCOPE") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "MIGHTY_CANNON_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "RECKLESS_BEAM") {
        topWep2BreakSec.style.width = "70px";
        topWep2BreakSec.style.top = "-17px";
    }
    if (topWepon2 == "SAVAGERY") {
        topWep2BreakSec.style.width = "70px";
        topWep2BreakSec.style.top = "-17px";
    }
    if (topWepon2 == "SPARTAN_CARNAGEL") {
        topWep2BreakSec.style.width = "70px";
        topWep2BreakSec.style.top = "-17px";
    }
    if (topWepon2 == "SPINEFALL_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "SUPREME_CANNON") {
        topWep2BreakSec.style.width = "50px";
        topWep2BreakSec.style.left = "-13px";
        topWep2BreakSec.style.top = "-29px";
    }
    if (topWepon2 == "VALIANT_SNIPER_L") {
        topWep2BreakSec.style.width = "80px";
    }
    if (topWepon2 == "VANDAL_RAGE") {
        topWep2BreakSec.style.width = "70px";
    }

    if (topWepon2 == "Nothing_R") {
        topWep2BreakSec.style.display = "none";
    }
    if (topWepon2 == "") {
        topWep2BreakSec.style.display = "none";
    }
}