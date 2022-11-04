"use strict";

let testAlley, aircon, bgWstuff, bgWOstuff, cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, bgDoor, bgMoon;
let ninja = new Ninja(W/2, H - (H/8));
let enemy1 = new Enemy(-250, H - 50)
let gameFinish = true;
let screenState = 0;
let mainMenuBn, gamePlayBn, exitBn, leaderBoardBn;//buttons
let ninTest;
let ninjaLoadingScreen;
let nls;
let hero, E1a, E1b,E2a, E2b,E3a, E3b, Bea, Beb;//spec pics

let x1 = 0;
let x2;
let scrollSpeed = 2;
let clouds = new Array(5);
let cloudX = new Array(5);
let cloudY = new Array(5);



function preload() {
  ninja.loadNinjaAnimations();
  enemy1.loadEnemyAnimations();
  loadScenePics();
  ninTest = loadImage("assets/ninjapictest.png");//pic for character test main menu
  ninjaLoadingScreen = loadImage('assets/img/ninja_player/attack/attack_east/attack_3.png');
  hero = loadImage('assets/img/ninja_player/attack/attack_east/attack_2.png');
  E1a = loadImage('assets/img/enemies/tier1_red_guy/run/run1.png');
  E1b = loadImage('assets/img/enemies/tier1_red_guy/attack/attack3.png');
  E2a = loadImage('assets/img/enemies/tier2_red_ninja/run/run1.png');
  E2b = loadImage('assets/img/enemies/tier2_red_ninja/attack/attack3.png');
  E3a = loadImage('assets/img/enemies/tier3_red_orange_ninja/run/run1.png');
  E3b = loadImage('assets/img/enemies/tier3_red_orange_ninja/attack/attack3.png');
  Bea = loadImage('assets/img/enemies/boss/run/run2.png');
  Beb = loadImage('assets/img/enemies/boss/run/run3.png');
}

function setup() {
  createCanvas(W, H);
  buttonSetUp();
  ninja.createNinja();
  enemy1.createEnemy();

  x2 = width;
  cloudX[0] =  random(width, width + 600);
  cloudX[1] =  random(width, width + 600);
  cloudX[2] =  random(width, width + 600);
  cloudX[3] =  random(width, width + 600);
  cloudX[4] =  random(width, width + 600);
  cloudY[0] = random(0,60);
  cloudY[1] = random(0,60);
  cloudY[2] = random(0,60);
  cloudY[3] = random(0,60);
  cloudY[4] = random(0,60);

}

function draw() {

  switch (screenState) {
    case 0:
      drawLoading();
      break;
    case 1:
      drawMainMenu();
      break;
    case 2:
      drawGameplay();
      break;
    case 3:
      drawGameover();
      break;
    case 4:
      drawLeaderBoard();
      break;
  }
  ninja.checkNinjaStatus();
}

function drawLoading() {
  hideAllBns();
  background(20)
  textSize(30);
  textAlign(CENTER);
  fill(255);
  stroke(200);
  text("Loading...", width / 2, height / 2);

  
  fill(0);
  stroke(0);
  triangle(width, 0, width, 120, width-120, 0);
  triangle(width, height, width - 120, height, width, height-120);
  triangle(0, 0, 120, 0, 0, 120);
  triangle(0, height, 120, height, 0, height - 120);
  
  image(ninjaLoadingScreen, 0, height - (height / 3), 200, 200);

  if (frameCount % 300 == 0) {
    screenState = 1;
  }


}

function drawMainMenu() {
  background(80)
  gamePlayBn.show();
  exitBn.show();
  leaderBoardBn.show();
  //below is all testing code 
  fill(150);
  textSize(25);
  textAlign(CENTER);
  stroke(150);
  text("Main Menu", width / 2, height / 2 - 100);
  text("Under Construction", width / 2, height / 2 - 50);
  
  textSize(16)
  text("Hover Mouse over Characters for Specs", width / 2 - 340, height / 2 + 220);
 
  characterImages();

  characterPopUps();

 //text(mouseX + "," + mouseY, mouseX, mouseY);


}

function drawGameplay() {
  background("grey");
  hideAllBns();
  testScene();

  drawSprites();

  ninja.attackAnimation();
  ninja.move();

}

function drawGameover() {
  hideAllBns();
  gameFinish = true;
  background(0, 255, 0)
  textSize(30);
  textAlign(CENTER);
  stroke(0);
  text("Game Over", width / 2, height / 2 - 100);
  text("Under Construction", width / 2, height / 2 - 50);
}

function drawLeaderBoard() {
  background(0, 0, 255)
  mainMenuBn.show();
  textSize(40);
  textAlign(CENTER);
  stroke(0);
  text("Leader Board", width / 2, height / 2 - 100);
  text("Under Construction", width / 2, height / 2 - 50);
  text("may or may not be used", width / 2, height / 2);

}

function mainMenuBnPressed() {//change screen and reset any variables, sound etc
  gameFinish = true;
  hideAllBns();
  screenState = 1;

}

function gamePlayBnPressed() {

  gameFinish = false;
  screenState = 2;
}

function leaderBdBnPressed() {
  gameFinish = true;//?
  hideAllBns();
  screenState = 4;
}

function exitBnPressed() {//takes you where? - may not use yet
  gameFinish = true;

}

function characterImages() {
  image(ninTest, 60, 170);
  Bea.resize(0,60);
  image(Bea,885,60);
  E3b.resize(0,60);
  image(E3b,890,190);
  E2b.resize(0,60);
  image(E2b,890,310);
  E1b.resize(0,60);
  image(E1b,890,430);
  
}

function characterPopUps() {//test code maybe use a function/class with parameters - could use a text file for text
  rectMode(CENTER);
  fill(100);
  fill(0);
  noStroke();
  strokeWeight(2);
  textSize(14)
  textStyle(BOLD);
  if (mouseX > 30 && mouseX < 125 && mouseY < 430 && mouseY > 170) {//check position when final
    stroke(120);
    fill(100);
    rect(230, 200, 150, 150, 30);
    noStroke();
    fill(0);
    hero.resize(0,35);
    image(hero,180,132);
    text("Hero Ninja", 245, 154);
    text("UPDATE INFO", 230, 185);//add specs
    text("Move him with left", 230, 205);
    text("and right arrows", 230, 225);
    text("space bar for attack", 230, 245);
    text(" ", 230, 265);
  }
  if (mouseX > 890 && mouseX < 950 && mouseY < 135 && mouseY > 50) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 95, 120, 80, 30);
    Beb.resize(0,30);
    image(Beb,740,80);
    noStroke();
    fill(0);
    textSize(12);
    text("Boss Enemy", 800, 80);
    text("Weapon:", 800, 100);// add specs
    text("Strikes to Kill:", 800, 120);
    //text("....", 800,110);

  }

  if (mouseX > 890 && mouseX < 930 && mouseY < 250 && mouseY > 190) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 220, 120, 80, 30);
    E3a.resize(0,30);
    image(E3a,750,200);
    noStroke();
    fill(0);
    textSize(12);
    text("Name:", 800, 200);
    text("Weapon:", 800, 220);//add specs
    text("Strikes to kill:", 800, 240);
  }
  if (mouseX > 890 && mouseX < 930 && mouseY < 350 && mouseY > 285) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 340, 120, 80, 30);
    E2a.resize(0,30);
    image(E2a,750,320);
    noStroke();
    fill(0);
    textSize(12);
    text("Name:", 800, 320);
    text("Weapon: ", 800, 340);// add specs
    text("Strokes to kill: ", 800, 360);

  }
  if (mouseX > 890 && mouseX < 930 && mouseY < 490 && mouseY > 430) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 465, 120, 80, 30);
    E1a.resize(0,30);
    image(E1a,750,450);
    noStroke();
    fill(0);
    textSize(12);
    text("  Name:", 800, 450);//add specs
    text("  Weapon: Fists", 800, 470);
    text("  Strikes to Kill:", 800, 490);

  }
  

}

function hideAllBns() {
  mainMenuBn.hide();
  gamePlayBn.hide();
  leaderBoardBn.hide();
  exitBn.hide();
}

function buttonSetUp() {

  mainMenuBn = createButton("Main Menu");
  mainMenuBn.style("width", "130px");
  mainMenuBn.style("font-size", "20px");
  mainMenuBn.style("border-radius", "20px")
  mainMenuBn.style("height", "35px");
  mainMenuBn.style("background-color", "blue")//colour tbc
  mainMenuBn.style("color", "white")
  mainMenuBn.mousePressed(mainMenuBnPressed);
  mainMenuBn.position(1000, 550);
  mainMenuBn.hide();

  gamePlayBn = createButton("Play Game");
  gamePlayBn.style("width", "130px");
  gamePlayBn.style("font-size", "20px");
  gamePlayBn.style("border-radius", "20px")
  gamePlayBn.style("height", "45px");
  gamePlayBn.style("background-color", "blue")//colour tbc
  gamePlayBn.style("color", "white")
  gamePlayBn.mousePressed(gamePlayBnPressed);//currently to function instead of straight to screen
  gamePlayBn.position(650, 555);
  gamePlayBn.hide();

  exitBn = createButton("EXIT");
  exitBn.style("width", "80px");
  exitBn.style("border-radius", "20px")
  exitBn.style("height", "25px");
  exitBn.style("background-color", "grey")
  exitBn.style("color", "white")
  exitBn.mousePressed(exitBnPressed);
  exitBn.position(200, 590);
  exitBn.hide();

  leaderBoardBn = createButton("Leader Board");
  leaderBoardBn.style("width", "100px");
  leaderBoardBn.style("border-radius", "20px")
  leaderBoardBn.style("height", "35px");
  leaderBoardBn.style("background-color", "blue")
  leaderBoardBn.style("color", "white")
  leaderBoardBn.mousePressed(leaderBdBnPressed);
  leaderBoardBn.position(1080, 580);
  leaderBoardBn.hide();
}
