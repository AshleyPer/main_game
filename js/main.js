"use strict";
let building1;
let bricks1;

let ninja = new Ninja(W / 2, H / 2);
let gameFinish = true;
let screenState = 1;//changed to main for build, change back to load when done
const LOADING = 0;
const MAIN_MENU = 1;
const GAMEPLAY = 2;
const GAME_OVER = 3;
const LEADER_BOARD = 4;
let mainMenuBn, gamePlayBn, exitBn, leaderBoardBn;//buttons



function preload() {
 
  ninja.loadNinjaAnimations();
  loadScenePics ();
}

function setup() {
  createCanvas(W, H);
  buttonSetUp();
  ninja.createNinja()
    
}
function draw() {
  switch(screenState){
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
  
}

function drawLoading() {
  hideAllBns();
  gameFinish = true;
  background(255,255,0)
  textSize(30);
  textAlign(CENTER);
  stroke(0);
  text("Loading", width/2, height/2 - 100);
  text("Under Construction", width/2, height/2 - 50);

}

function drawMainMenu() {
  background(0)
  gamePlayBn.show();
  exitBn.show();
  leaderBoardBn.show();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  stroke(255);
  text("Main Menu", width/2, height/2 - 100);
  text("Under Construction", width/2, height/2 - 50);
  text("Adding Art", width/2, height/2 );
  text("Maybe links to Character info", width/2, height/2 + 50);
  text("other stuff tbc", width/2, height/2 + 100);
  
}

function drawGameplay() {
  background("grey");
  testScene();

  drawSprites();
    
  ninja.attackAnimation();
}

function drawGameover() {
  hideAllBns();
  gameFinish = true;
  background(0,255,0)
  textSize(30);
  textAlign(CENTER);
  stroke(0);
  text("Game Over", width/2, height/2 - 100);
  text("Under Construction", width/2, height/2 - 50);
}

function drawLeaderBoard(){
  background(0,0,255)
  mainMenuBn.show();
  textSize(40);
  textAlign(CENTER);
  stroke(0);
  text("Leader Board", width/2, height/2 - 100);
  text("Under Construction", width/2, height/2 - 50);
  text("may or may not be used", width/2, height/2 );
  
}

function mainMenuBnPressed(){//change screen and reset any variables, sound etc
  gameFinish = true;
  hideAllBns();
  screenState = 1;
 
}

function gamePlayBnPressed(){
  hideAllBns();
  gameFinish = false;
  screenState = 2;
}

function leaderBdBnPressed(){
  gameFinish = true;//?
  hideAllBns();
  screenState = 4;
}

function exitBnPressed(){//takes you where? - may not use yet
  gameFinish = true;

}


function hideAllBns(){
  mainMenuBn.hide();
  gamePlayBn.hide();
  leaderBoardBn.hide();
  exitBn.hide();
}

function buttonSetUp(){

  mainMenuBn = createButton("Main Menu");
  mainMenuBn.style("width", "130px");
  mainMenuBn.style("font-size", "20px");
  mainMenuBn.style("border-radius", "20px")
  mainMenuBn.style("height", "35px");
  mainMenuBn.style("background-color", "blue")//colour tbc
  mainMenuBn.style("color","white")
  mainMenuBn.mousePressed(mainMenuBnPressed);
  mainMenuBn.position(1000,550);
  mainMenuBn.hide();

  gamePlayBn = createButton("Play Game");
  gamePlayBn.style("width", "130px");
  gamePlayBn.style("font-size", "20px");
  gamePlayBn.style("border-radius", "20px")
  gamePlayBn.style("height", "45px");
  gamePlayBn.style("background-color", "blue")//colour tbc
  gamePlayBn.style("color","white")
  gamePlayBn.mousePressed(gamePlayBnPressed);//currently to function instead of straight to screen
  gamePlayBn.position(650,555);
  gamePlayBn.hide();

  exitBn = createButton("EXIT");
  exitBn.style("width", "80px");
  exitBn.style("border-radius", "20px")
  exitBn.style("height", "25px");
  exitBn.style("background-color", "grey")
  exitBn.style("color","white")
  exitBn.mousePressed(exitBnPressed);
  exitBn.position(200,590);
  exitBn.hide();

  leaderBoardBn = createButton("Leader Board");
  leaderBoardBn.style("width", "100px");
  leaderBoardBn.style("border-radius", "20px")
  leaderBoardBn.style("height", "35px");
  leaderBoardBn.style("background-color", "blue")
  leaderBoardBn.style("color","white")
  leaderBoardBn.mousePressed(leaderBdBnPressed);
  leaderBoardBn.position(1080,580);
  leaderBoardBn.hide();
}
