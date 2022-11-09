"use strict";

let testAlley, aircon, bgWstuff, bgWOstuff, bgWcity, cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, bgDoor, bgMoon;
let ninja = new Ninja(W/2, H - 45);
//starting positions for enemies tbc - also use for reset game
let enemy1 = new Enemy(W + 250, H - 45);//tier 1 enemy
let enemy2= new Enemy(W + 750, H - 45);//tier 2 enemy - spawn after teir 1 death?
let enemy3 = new Enemy(W + 1250, H - 45);//tier 3 enemy
let enemyB = new Enemy(W + 1850, H - 45);//boss enemy
let enemyHit1 = 0;
let enemyHit2 = 0;
let enemyHit3 = 0;
let enemyHitB = 0;
let titleheading;
let gameoverTitle;
let score = 0;

let gameFinish = true;
let screenState = 1;
let ninTest;
let ninjaLoadingScreen;
let nls;
let hero, E1a, E1b,E2a, E2b,E3a, E3b, Bea, Beb;//spec pics

let x1 = 0;
let x2;
let scrollSpeed = 2;//change back to 2
let clouds = new Array(5);
let cloudX = new Array(5);
let cloudY = new Array(5);

let font;

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

  //create the enemies
  enemy1.createEnemy1();
  enemy2.createEnemy2();
  enemy3.createEnemy3();
  enemyB.createEnemyB();

  x2 = width;
  cloudX[0] = random(width, width + 600);
  cloudX[1] = random(width, width + 600);
  cloudX[2] = random(width, width + 600);
  cloudX[3] = random(width, width + 600);
  cloudX[4] = random(width, width + 600);
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
  triangle(width, 0, width, 120, width-120, 0);
  triangle(width, height, width - 120, height, width, height-120);
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
 
  testScene();
 
  drawSprites();

  ninja.attackAnimation();

  ninja.move();
  //ninja.attackCollide(enemy1, enemy1Fight);
  if(ninja.ninjaAttack){
    ninja.ninjaAttack.collide(enemy1.enemySprite,enemy1Fight);//start of fighting code
    ninja.ninjaAttack.collide(enemy2.enemySprite,enemy2Fight);
    ninja.ninjaAttack.collide(enemy3.enemySprite,enemy3Fight);
    ninja.ninjaAttack.collide(enemyB.enemySprite,enemyBFight);
  }

  enemy1.enemySprite.collide(ninja.ninjaSprite, enemy1.attackAnimation1);
  enemy2.enemySprite.collide(ninja.ninjaSprite, enemy2.attackAnimation2);
  enemy3.enemySprite.collide(ninja.ninjaSprite, enemy3.attackAnimation3);
  enemyB.enemySprite.collide(ninja.ninjaSprite, enemyB.attackAnimationB);

  
  

  ninja.ninjaSprite.bounce(enemy1.enemySprite, bounceBack)
  ninja.ninjaSprite.bounce(enemy2.enemySprite, bounceBack)
  ninja.ninjaSprite.bounce(enemy3.enemySprite, bounceBack)
  ninja.ninjaSprite.bounce(enemyB.enemySprite, bounceBack)



  // text for score, needs styling    
  noStroke()
  fill(255,150)
  textSize(30)
  text("Score: " + score, 50, 50)
  //temp text for ninja health - remove when health bar running
  textSize(20)
  text("Ninja Health: " + ninja.ninjaSprite.hp , 820,50)

}

function bounceBack(theNinja, theEnemy){
  theEnemy.position.x = theEnemy.position.x + 5
}

//move rest function down when complete
function resetGame(){//a function to call when return to main menu after game over, or game win
  //reset enemy positions
  //reset ninja position
  //reset health enemy
  //reset health ninja
  //reset score
  //reset sound
  //reset background
  //reset clouds?        
  ninja.ninjaSprite.position.x = W/2;//update these when staring positions finalised
  ninja.ninjaSprite.position.y = H-45; 

  enemy1.enemySprite.position.x = W +250;//reset enemy positions - update when finalised
  enemy1.enemySprite.position.y = H-45;
  enemy2.enemySprite.position.x = W +750;
  enemy2.enemySprite.position.y = H-45;
  enemy3.enemySprite.position.x = W +1250;
  enemy3.enemySprite.position.y = H-45
  enemyB.enemySprite.position.x = W +1850;
  enemyB.enemySprite.position.y = H-45
  enemyHit1 = 0;//reset enemy health
  enemyHit2 = 0;
  enemyHit3 = 0;
  enemyHitB = 0;
  ninja.ninjaSprite.hp = 50;//reset ninja health change when finalised
  score = 0;
  ninja.ninjaAttackOn = false;
  enemy1.enemySprite.changeAnimation('runEast1');//reset enemy to idle
  enemy2.enemySprite.changeAnimation('runEast2');
  enemy3.enemySprite.changeAnimation('runEast3');
  enemyB.enemySprite.changeAnimation('runEastB');
  
  x1 = 0;
  x2 = width;
    
}

//game over scene/screen
function drawGameover() {//add score to game over screen?
  hideAllBns();
  mainMenuBn.showButton();
  gameFinish = true;
  background(0);
  image(gameoverTitle, 0,0);


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
  exitBn.showButton();
  leaderBoardBn.showButton();
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


//the functions for the enemies fighting
function enemy1Fight(){//basic start function for fighting
  
    enemy1.attackAnimation1();
    if (ninja.ninjaAttackOn == true){
      if(enemyHit1<20){
        enemyHit1++;
      }
      else if(enemyHit1 >=20){
        enemy1.enemySprite.position.y = -100;
        score +=5;
        //spawn another tier 1?
      }
    }
  
}

function enemy2Fight(){
  enemy2.attackAnimation2();//very brief at present as its in collision
  if (ninja.ninjaAttackOn == true){
    if(enemyHit2<50){
      enemyHit2++;
    }
    else if(enemyHit2 >=50){
      enemy2.enemySprite.position.y = -100;
      score += 10
    }
  }
}

function enemy3Fight(){
  enemy3.attackAnimation3();

  if (ninja.ninjaAttackOn == true){
    if(enemyHit3<80){
      enemyHit3++;
    }
    else if(enemyHit3>=80){
      enemy3.enemySprite.position.y = -100;
      score+=15
      //spawn another tier 3?
      //spawn boss
  }
  }
}

function enemyBFight(){
  enemyB.attackAnimationB();
  if (ninja.ninjaAttackOn == true){
    if(enemyHitB<120){
      enemyHitB++;
    }
    else if(enemyHitB >=120){
      enemyB.enemySprite.position.y = -100;
      score +=25;
    }
  }
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
  resetGame();


 
}

function leaderBdBnPressed() {
  gameFinish = true;//?
  hideAllBns();
  screenState = 4;
}

function exitBnPressed() {//takes you where? - may not use yet
  gameFinish = true;
}


//The code to set the main menu images and things

function loadMainMenuImages(){
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
}

function characterImages() {
  image(ninTest, 60, 190);
  Bea.resize(0,60);
  image(Bea,885,40);
  E3b.resize(0,60);
  image(E3b,890,160);
  E2b.resize(0,60);
  image(E2b,890,280);
  E1b.resize(0,60);
  image(E1b,890,400);
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
    rect(800, 75, 150, 80, 30);
    Beb.resize(0,30);
    image(Beb,730,60);
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
    E3a.resize(0,30);
    image(E3a,740,180);
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
    E2a.resize(0,30);
    image(E2a,740,300);
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
    E1a.resize(0,30);
    image(E1a,740,420);
    noStroke();
    fill(0);
    textSize(12);
    text("  Name:", 800, 425);//add specs
    text("  Weapon: Fists", 800, 445);
    text("  Strikes to Kill:", 800, 465);
  }
}