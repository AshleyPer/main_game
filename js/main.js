"use strict";
let enemyStartPosX = [-100, 1100]
let PosY = H - 45
let testAlley, aircon, bgWstuff, bgWOstuff, bgWcity, cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, bgDoor, bgMoon;
let ninja = new Ninja(W / 2, H - 45); //CHANGES HERE TO POSITIONS NEED TO BE CHANGED IN GAMErESET FUNCTION AT BOTTOM 
//starting positions for enemies tbc - also use for reset game
//CHANGES HERE TO POSITIONS NEED TO BE CHANGED IN GAMErESET FUNCTION AT BOTTOM 
//Changing to random from array create off screen?
let enemy1 = new Enemy();//tier 1 enemy
let enemy2 = new Enemy();//tier 2 enemy - spawn after teir 1 death?
let enemy3 = new Enemy();//tier 3 enemy
let enemyB = new Enemy();//boss enemy
let countEnemy1 = 0;
let countEnemy2 = 0;
let countEnemy3 = 0;

let titleheading;
let gameoverTitle, victory, healthpack, hPack;
let time = 0;
let wait = 20;

let gameFinish = true;
let bossSpawned = false;
let screenState = 0;
let ninTest;
let ninjaLoadingScreen;
let nls;
let hero, E1a, E1b, E2a, E2b, E3a, E3b, Bea, Beb;//spec pics

let x1 = 0;
let x2, x3;
let scrollSpeed = 3;
let clouds = new Array(5);
let cloudX = new Array(5);
let cloudY = new Array(5);
let count = 0;
let font;
let alp;


//sound variables
let delaySound;
let ninjaAttackSound;

function preload() {
  ninja.loadNinjaAnimations();
  enemy1.loadEnemyAnimations();
  enemy2.loadEnemyAnimations();
  enemy3.loadEnemyAnimations();
  enemyB.loadEnemyAnimations();
  loadScenePics();
  loadMainMenuImages();
}


function setup() {
  createCanvas(W, H);
  delaySound = new p5.Delay();
  //add a font
  font = loadFont('assets/fonts/IndieFlower-Regular.ttf');
  //create the buttons
  mainMenuBn.buttonSetUp(mainMenuBnPressed)
  gamePlayBn.buttonSetUp(gamePlayBnPressed)
  exitBn.buttonSetUp(exitBnPressed)
  leaderBoardBn.buttonSetUp(leaderBdBnPressed)

  //giving the canvas some styling, this is the box that contains our game
  let canvas = document.getElementById('defaultCanvas0');
  canvas.style.boxShadow = '0px 10px 30px white, 10px 20px 40px grey, 30px 50px 30px black'
  canvas.style.borderRadius = '25px'
  canvas.style.border = 'solid'
  canvas.style.borderColor = 'black'

  //create the ninja
  ninja.createNinja();
  alp = 255;


  //create the enemies
  enemy1.setUpGroups();
  enemy2.setUpGroups();
  //enemy3.setUpGroups();

  enemy1.createEnemy1(random(enemyStartPosX), PosY);
  enemy1.enemySprite.remove();

  enemy2.createEnemy2(-100, -100);
  enemy2.enemySprite.remove();
  enemy3.createEnemy3(-100, -100);
  enemy3.enemySprite.remove();

  enemyB.createEnemy3(-100, -100);
  enemyB.enemySprite.remove();

  makeHealthPack();
  hPack.remove();



  x2 = width;
  x3 = -width;
  cloudX[0] = random(width, width + 600);
  cloudX[1] = random(width, width + 600);
  cloudX[2] = random(width, width + 600);
  cloudX[3] = random(width, width + 600);
  cloudX[4] = random(width, width + 600);
  cloudY[0] = random(0, 60);
  cloudY[1] = random(0, 60);
  cloudY[2] = random(0, 60);
  cloudY[3] = random(0, 60);
  cloudY[4] = random(0, 60);

  //Load the sounds
  //soundFormats('mp3', 'ogg', 'wav');
  //ninjaAttackSound = loadSound('assets/sounds/ninja/attack/ninja_attack');
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
    case 5:
      drawWinner();
      break;
  }
  ninja.checkNinjaStatus();
  

}

//draw the loading scene/screen
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
  triangle(width, 0, width, 120, width - 120, 0);
  triangle(width, height, width - 120, height, width, height - 120);
  triangle(0, 0, 120, 0, 0, 120);
  triangle(0, height, 120, height, 0, height - 120);

  image(ninjaLoadingScreen, 0, height - (height / 3), 200, 200);

  if (frameCount % 300 == 0) {
    screenState = 1;
  }

}

//functions to draw the different scenes

//draw the gameplay scene/screen
function drawGameplay() {
  gameFinish = false;
  background("grey");
  hideAllBns();
  exitBn.showButton();//new location?

  if(countEnemy1 < 1){
    enemy1.createEnemy1(random(enemyStartPosX), PosY);
    countEnemy1++
  }

  testScene();
  drawSprites();

  ninja.drawNinjaHealthBar();
  enemy1.drawEnemy1HealthBar(enemy1.enemySprite);
  enemy2.drawEnemy2HealthBar(enemy2.enemySprite);
  enemy3.drawEnemy3HealthBar(enemy3.enemySprite);
  enemyB.drawEnemyBossHealthBar(enemyB.enemySprite);

  
  ninja.move();
  ninja.attackAnimation();

//start of fighting code
  if (ninja.ninjaAttack) {
    ninja.ninjaAttack.collide(enemy1.enemyGroupOne, ninja.enemyFight); //player attacks
    ninja.ninjaAttack.collide(enemy2.enemyGroupTwo, ninja.enemyFight);
    ninja.ninjaAttack.collide(enemy3.enemySprite, ninja.enemyFight);
    ninja.ninjaAttack.collide(enemyB.enemySprite, ninja.enemyFight);
  }

  //enemy attacks, divided based on enemy type
  enemy1.enemySprite.collide(ninja.ninjaSprite, enemy1.attackAnimation1);
  enemy2.enemySprite.collide(ninja.ninjaSprite, enemy2.attackAnimation2);
  enemy3.enemySprite.collide(ninja.ninjaSprite, enemy3.attackAnimation3);
  enemyB.enemySprite.collide(ninja.ninjaSprite, enemyB.attackAnimationB);

  //bounce code to stop instant deaths
  ninja.ninjaSprite.bounce(enemy1.enemySprite, bounceBack);
  ninja.ninjaSprite.bounce(enemy2.enemySprite, bounceBack);
  ninja.ninjaSprite.bounce(enemy3.enemySprite, bounceBack);
  ninja.ninjaSprite.bounce(enemyB.enemySprite, bounceBack);

  ninja.ninjaSprite.collide(hPack, ninja.restoreHP);
   
  noStroke()
  fill(255, 150)


  //temp text for ninja health - remove when health bar running
  textSize(20)
  text("Ninja Health: " + ninja.ninjaSprite.hp, 820, 50)
  text("enemy Health 1 : " + enemy1.enemySprite.hp, 820, 80)
  text("enemy Health 2 : " + enemy2.enemySprite.hp, 820, 100)
  text("enemy Health 3 : " + enemy3.enemySprite.hp, 820, 120)
  text("enemy Health B : " + enemyB.enemySprite.hp, 820, 140)
  text("enemy 1 Count : " + countEnemy1, 820, 160)
  text("enemy 2 Count : " + countEnemy2, 820, 180)

}

function bounceBack(theNinja, theEnemy) {
  theEnemy.position.x = theEnemy.position.x + 100;
}



//game over scene/screen
function drawGameover() {//add score to game over screen?
  hideAllBns();
  mainMenuBn.showButton();
  gameFinish = true;
  background(0);
  image(gameoverTitle, 0, 0);


}

//leaderboard scene/screen
function drawLeaderBoard() {
  background(0, 0, 255)
  mainMenuBn.showButton();
  textSize(40);
  textAlign(CENTER);
  stroke(0);
  text("Leader Board", width / 2, height / 2 - 100);
  text("Under Construction", width / 2, height / 2 - 50);
  text("may or may not be used", width / 2, height / 2);
}


//draw the draw main menu scene/screen
function drawMainMenu() {
  hideAllBns();
  background(80)
  gamePlayBn.showButton();

  //below is all testing code 
  fill(255);
  textFont(font);
  textSize(25);
  textAlign(CENTER);
  strokeWeight(3);
  stroke(0);

  push();
  imageMode(CENTER);
  image(titleheading, width / 2, height / 2 + 10, W, H - 20);
  pop();

  textSize(20)
  text("Hover Over The Ninja for Specs", width / 2 - 340, height / 2 + 220);

  textSize(20)
  text("Hover Over The Enemies for Specs", width - 170, height / 2 + 220);
  stroke(150);
  strokeWeight(1);
  textFont('Georgia');
  characterImages();

  characterPopUps();

}

function drawWinner() {
  background(0);
  image(victory, 0, 0);
  fill(255, alp);
  rect(0, 0, W, H);
  alp -= 1;
  if(alp == 0){

  }

}

function makeHealthPack(x,y) {
  hPack = createSprite(x,y);
  hPack.addImage(healthpack);
  hPack.setCollider('rectangle');
}


//move rest function down when complete
function resetGame() {//a function to call when return to main menu after game over, or game win
  //NEEDS UPDATING
  //reset enemy positions
  //reset ninja position
  //reset health enemy
  //reset health ninja
  //reset score
  //reset sound
  //reset background
  //reset clouds?        
  removeAllEnemySprites();
  gameFinish = true;
  ninja.ninjaSprite.position.x = W / 2;//update these when staring positions finalised
  ninja.ninjaSprite.position.y = H - 45;
  countEnemy1 = 0;
  countEnemy2 = 0;
  countEnemy3 = 0;
  enemy1.enemySprite.hp = 10;//reset enemy health
  enemy2.enemySprite.hp = 20;
  enemy3.enemySprite.hp = 30;
  enemyB.enemySprite.hp = 100;

 
  ninja.ninjaSprite.hp = 250;//reset ninja health change when finalised
  ninja.ninjaAttackOn = false;
  bossSpawned = false;
  enemy1.enemySprite.changeAnimation('runEast1');//reset enemy to idle
  enemy2.enemySprite.changeAnimation('runEast2');
  enemy3.enemySprite.changeAnimation('runEast3');
  enemyB.enemySprite.changeAnimation('runEastB');

  x1 = 0;
  x2 = width;
  x3 = -width;

}

function removeAllEnemySprites() {
  //enemy1.enemyGroupOne.removeSprites();
  enemy1.enemySprite.remove();
  enemyB.enemySprite.remove();
  //enemy2.enemyGroupTwo.removeSprites();
 // enemy3.enemyGroupThree.removeSprites();
  enemy3.enemySprite.remove();
  enemy2.enemySprite.remove();
  hPack.remove();
 // console.log("1" + enemyGroupOne)
  //console.log("2" + enemyGroupTwo)
  //console.log("3" + enemyGroupThree)

}

//functions for the buttons
function hideAllBns() {
  mainMenuBn.hideButton();
  gamePlayBn.hideButton();
  leaderBoardBn.hideButton();
  exitBn.hideButton();
}

//the button clicked functions
function mainMenuBnPressed() {//change screen and reset any variables, sound etc
  gameFinish = true;
  hideAllBns();
  screenState = 1;


}

function gamePlayBnPressed() {
  gameFinish = false;
  screenState = 2;
  //enemy2.enemySprite.hp = 20;

  //enemy1.enemySprite.hp = 10;//reset enemy health
  //enemy2.enemySprite.hp = 20;
  //enemy3.enemySprite.hp = 30;
 // enemyB.enemySprite.hp = 100;


}

function leaderBdBnPressed() {
  gameFinish = true;//?
  hideAllBns();
  screenState = 4;
}

function exitBnPressed() {//takes you where? - may not use yet
  gameFinish = true;
  
  enemy1.enemySprite.hp = 0;
  enemy2.enemySprite.hp = 0;
  enemy3.enemySprite.hp = 0;
  enemyB.enemySprite.hp = 0;
  removeAllEnemySprites();
  screenState = 1;
  resetGame();
}



//The code to set the main menu images and things

function loadMainMenuImages() {
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
  titleheading = loadImage('assets/img/gamejam_title.png');
  gameoverTitle = loadImage('assets/img/gamejam_gameover.png');
  victory = loadImage('assets/img/victory.png');
  //healthpack image
  healthpack = loadImage('assets/img/powerup_box_health.png');
}

function characterImages() {
  image(ninTest, 60, 190);
  Bea.resize(0, 60);
  image(Bea, 885, 40);
  E3b.resize(0, 60);
  image(E3b, 890, 160);
  E2b.resize(0, 60);
  image(E2b, 890, 280);
  E1b.resize(0, 60);
  image(E1b, 890, 400);
}

//function for the on hover handling in the main menu for the character images
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
    hero.resize(0, 35);
    image(hero, 180, 132);
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
    rect(800, 75, 150, 80, 30);
    Beb.resize(0, 30);
    image(Beb, 730, 60);
    noStroke();
    fill(0);
    textSize(12);
    text("Boss Enemy", 800, 60);
    text("Weapon:", 800, 80);// add specs
    text("Strikes to Kill:", 800, 100);
    //text("....", 800,110);

  }

  if (mouseX > 890 && mouseX < 930 && mouseY < 250 && mouseY > 190) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 200, 140, 80, 30);
    E3a.resize(0, 30);
    image(E3a, 740, 180);
    noStroke();
    fill(0);
    textSize(12);
    text("Name:", 800, 180);
    text("Weapon:", 800, 200);//add specs
    text("Strikes to kill:", 800, 220);
  }
  if (mouseX > 890 && mouseX < 930 && mouseY < 350 && mouseY > 285) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 320, 140, 80, 30);
    E2a.resize(0, 30);
    image(E2a, 740, 300);
    noStroke();
    fill(0);
    textSize(12);
    text("Name:", 800, 300);
    text("Weapon: ", 800, 320);// add specs
    text("Strikes to kill: ", 800, 340);

  }
  if (mouseX > 890 && mouseX < 930 && mouseY < 490 && mouseY > 430) {//check these once image up
    stroke(120);
    fill(100);
    rect(800, 440, 140, 80, 30);
    E1a.resize(0, 30);
    image(E1a, 740, 420);
    noStroke();
    fill(0);
    textSize(12);
    text("  Name:", 800, 425);//add specs
    text("  Weapon: Fists", 800, 445);
    text("  Strikes to Kill:", 800, 465);
  }
}