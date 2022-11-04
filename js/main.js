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
let hero, redN, redN2;//spec pics

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
  redN = loadImage('assets/img/enemies/tier1_red_guy/run/run1.png');
  redN2 = loadImage('assets/img/enemies/tier1_red_guy/attack/attack3.png');
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
  text("Adding Art", width / 2, height / 2);
  text("Maybe links to Character info", width / 2, height / 2 + 50);
  text("other stuff inc maybe levels tbc", width / 2, height / 2 + 100);
  textSize(16)
  text("Hover Mouse over Characters for Specs", width / 2 - 340, height / 2 + 220);
  //this is test code for character info
  //this may stay on main menu(if we use) 
  //or a new screen will make for it that's accessed from Main menu
  characterImages();

  characterPopUps();

  // text(mouseX + "," + mouseY, mouseX, mouseY);


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
  redN2.resize(0,60)
  image(redN2,890,145)
  //replace the following code with enemy images
  rectMode(CENTER);
  fill(100);
  rect(920, 70, 95, 80);//sample space  - image to replace
  //rect(920, 170, 65, 80);
  rect(920, 270, 65, 80);
  rect(920, 370, 65, 80);
  rect(920, 470, 65, 80);
  fill(0);
  noStroke();
  strokeWeight(2);
  textSize(14)
  textStyle(BOLD);
  text("Boss Enemy", 920, 70);
 // text("Red Ninja", 920, 170);
  text("Enemy 2", 920, 270);
  text("Enemy 3", 920, 370);
  text("Enemy 4", 920, 470);
}

function characterPopUps() {//test code maybe use a function/class with parameters - could use a text file for text
  if (mouseX > 30 && mouseX < 125 && mouseY < 430 && mouseY > 170) {//check position when final
    stroke(120)
    fill(100)
    rect(230, 200, 150, 150, 30)
    noStroke()
    fill(0)
    hero.resize(0,35)
    image(hero,180,132)
    text("Hero Ninja", 245, 154)
    text("UPDATE INFO", 230, 185)//add specs
    text("Move him with left", 230, 205)
    text("and right arrows", 230, 225)
    text("space bar for attack", 230, 245)
    text(" ", 230, 265)
  }
  if (mouseX > 880 && mouseX < 960 && mouseY < 100 && mouseY > 35) {//check these once image up
    stroke(120)
    fill(100)
    rect(800, 65, 110, 80, 30)
    noStroke()
    fill(0)
    textSize(12)
    text("Boss Enemy", 800, 50)
    text("He is bad", 800, 70)// add specs
    text("And kicks butt", 800, 90)
    //text("....", 800,110)

  }

  if (mouseX > 890 && mouseX < 950 && mouseY < 210 && mouseY > 130) {//check these once image up
    stroke(120)
    fill(100)
    rect(800, 170, 110, 80, 30)
    redN.resize(0,30)
    image(redN,750,150)
    noStroke()
    fill(0)
    textSize(12)
    text("Red Ninja", 800, 150)
    text("more info", 800, 170)//add specs
    text(".......", 800, 190)

  }
  if (mouseX > 890 && mouseX < 950 && mouseY < 300 && mouseY > 235) {//check these once image up
    stroke(120)
    fill(100)
    rect(800, 270, 110, 80, 30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 2", 800, 250)
    text("He/she is also bad", 800, 270)// add specs
    text("but is not boss", 800, 290)

  }
  if (mouseX > 890 && mouseX < 950 && mouseY < 400 && mouseY > 330) {//check these once image up
    stroke(120)
    fill(100)
    rect(800, 370, 110, 80, 30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 3", 800, 350)//add specs
    text("He/she is also bad", 800, 370)
    text("but is not boss", 800, 390)

  }
  if (mouseX > 890 && mouseX < 950 && mouseY < 500 && mouseY > 430) {//check these once image up
    stroke(120)
    fill(100)
    rect(800, 470, 110, 80, 30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 4", 800, 450)
    text("He/she is also bad", 800, 470)//add specs
    text("but is not boss", 800, 490)

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
