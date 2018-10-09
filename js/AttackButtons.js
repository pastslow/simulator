
function executeAllFunctionsOnButtonSide1() {
    changeStatsFight(sidewep1);
    createBullet1(sidewep1, "bulletDiv1", "bullet");
    changeBackgroundOfButton();
    attackWithHeatBomb(sidewep1, "bulletDiv1");
    attackWithMelle(sidewep1, "sideWep1BreakId");
    attackWithLaserWeapon(sidewep1, "bulletDiv1");
    attackWithFlameWeapons(sidewep1, "bulletDiv1");
    attackWithRocketWeapon(sidewep1, "bulletDiv1");
    attackWithBuletWeapons(sidewep1, "bulletDiv1");
    attackWithShootGun(sidewep1, "bulletDiv1");
    attackWithLaserBulletWeapons(sidewep1, "bulletDiv1");
    attackWithBigBulletWeaponTop(sidewep1, "bulletDiv1", "sideWep1BreakId")

    disableAllButtons(items[sidewep1].attackType);

    i = 0;
    buttons.push("backgroundSideBtn1");
    num += 1;


}
function executeAllFunctionsOnButtonSide2() {
    changeStatsFight(sidewep2);
    createBullet1(sidewep2, "bulletDiv2", "bullet2");
    changeBackgroundOfButton2();
    attackWithHeatBomb(sidewep2, "bulletDiv2");
    attackWithMelle(sidewep2, "sideWep2BreakId");
    attackWithLaserWeapon(sidewep2, "bulletDiv2");
    attackWithFlameWeapons(sidewep2, "bulletDiv2");
    attackWithRocketWeapon(sidewep2, "bulletDiv2");
    attackWithBuletWeapons(sidewep2, "bulletDiv2");
    attackWithShootGun(sidewep2, "bulletDiv2");
    attackWithLaserBulletWeapons(sidewep2, "bulletDiv2");
    attackWithBigBulletWeaponTop(sidewep2, "bulletDiv2", "sideWep2BreakId")

    disableAllButtons(items[sidewep2].attackType);
    i = 1;
    buttons.push("backgroundSideBtn2");
    num += 1;
}
function executeAllFunctionsOnButtonSide3() {
    changeStatsFight(sidewep3);


    createBullet1(sidewep3, "bulletDiv3", "bullet3");
    changeBackgroundOfButton3();
    attackWithHeatBomb(sidewep3, "bulletDiv3");
    attackWithMelle(sidewep3, "sideWep3BreakId");
    attackWithLaserWeapon(sidewep3, "bulletDiv3");
    attackWithFlameWeapons(sidewep3, "bulletDiv3");
    attackWithRocketWeapon(sidewep3, "bulletDiv3");
    attackWithBuletWeapons(sidewep3, "bulletDiv3");
    attackWithShootGun(sidewep3, "bulletDiv3");
    attackWithLaserBulletWeapons(sidewep3, "bulletDiv3");
    attackWithBigBulletWeaponTop(sidewep3, "bulletDiv3", "sideWep3BreakId")


    disableAllButtons(items[sidewep3].attackType);

    i = 2;
    buttons.push("backgroundSideBtn3");
    num += 1;
}
function executeAllFunctionsOnButtonSide4() {
    changeStatsFight(sidewep4);

    createBullet1(sidewep4, "bulletDiv4", "bullet4");
    changeBackgroundOfButton4();
    attackWithHeatBomb(sidewep4, "bulletDiv4");
    attackWithMelle(sidewep4, "sideWep4BreakId");
    attackWithLaserWeapon(sidewep4, "bulletDiv4");
    attackWithFlameWeapons(sidewep4, "bulletDiv4");
    attackWithRocketWeapon(sidewep4, "bulletDiv4");
    attackWithBuletWeapons(sidewep4, "bulletDiv4");
    attackWithShootGun(sidewep4, "bulletDiv4");
    attackWithLaserBulletWeapons(sidewep4, "bulletDiv4");
    attackWithBigBulletWeaponTop(sidewep4, "bulletDiv4", "sideWep4BreakId")


    disableAllButtons(items[sidewep4].attackType);
    i = 4;
    buttons.push("backgroundSideBtn4");
    num += 1;
}
function executeAllFunctionsOnButtonTop1() {
    changeStatsFight(topwep1);


    changeBackgroundOfButton5();
    createBulletTop("topDivBulletId", "bulletTop");
    attackWithTopBulletLaserType(topwep1, "topDivBulletId");
    attackWithSniperWeapon(topwep1, "topDivBulletId");
    attackWithTopBomb(topwep1, "topDivBulletId");
    attackWithRocketUpWeapon(topwep1, "topDivBulletId");
    attackWithTopWeaponBulletFromTop(topwep1, "topDivBulletId", "topWep1BreakId");
    attackWithTopLaserWeapon(topwep1, "topDivBulletId");
    attackWithMachineTopType(topwep1, "topDivBulletId");
    attackWithWeapon3Rockets(topwep1, "topDivBulletId");
    attackWithWeaponShower(topwep1, "topDivBulletId");

    disableAllButtons(items[topwep1].attackType);
    i = 5;
    buttons.push("backgroundSideBtn5");
    num += 1;
}
function executeAllFunctionsOnButtonTop2() {
    changeStatsFight(topwep2);

    changeBackgroundOfButton6();
    createBulletTop("topDivBulletId2", "bulletTop2");
    attackWithTopBulletLaserType(topwep2, "topDivBulletId2");
    attackWithSniperWeapon(topwep2, "topDivBulletId2");
    attackWithTopBomb(topwep2, "topDivBulletId2");
    attackWithRocketUpWeapon(topwep2, "topDivBulletId2");
    attackWithTopWeaponBulletFromTop(topwep2, "topDivBulletId2", "topWep2BreakId");
    attackWithTopLaserWeapon(topwep2, "topDivBulletId2");
    attackWithMachineTopType(topwep2, "topDivBulletId2");
    attackWithWeapon3Rockets(topwep2, "topDivBulletId2");
    attackWithWeaponShower(topwep2, "topDivBulletId2");
    disableAllButtons(items[topwep2].attackType);
    i = 6;
    buttons.push("backgroundSideBtn6");
    num += 1;
}

function executeAllFunctionsOnButtonCoolDown() {
    changeMechPositionWhenDoCoolDown();
    
    disableAllButtons("laser");
    num += 1;
}


