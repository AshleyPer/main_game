"use strict";
let building1;
let bricks1;

let ninja = new Ninja(W / 2, H / 2);

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
  }
  
}

function drawLoading() {
  hideAllBns();

}

function drawMainMenu() {
  background(0)
  gamePlayBn.show();
  exitBn.show();
  leaderBoardBn.show();
  
  
}

function drawGameplay() {
  background("grey");
  testScene();

  drawSprites();
    
  ninja.attackAnimation();
}

function drawGameover() {
  hideAllBns();
  
}

function drawLeaderBoard(){
  mainMenuBn.show();
}

function mainMenuBnPressed(){//change screen and reset any variables, sound etc
  hideAllBns();
  screenState = 1;
 
}

function gamePlayBnPressed(){
  hideAllBns();
  screenState = 2;
}

function leaderBdBnPressed(){
  hideAllBns();
  screenState = 4;
}

function exitBnPressed(){//takes you where? - may not use yet

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
  mainMenuBn.position(980,550);
 //mainMenuBn.hide();

  //game play button - start with one level
  gamePlayBn = createButton("Play Game");
  gamePlayBn.style("width", "130px");
  gamePlayBn.style("font-size", "20px");
  gamePlayBn.style("border-radius", "20px")
  gamePlayBn.style("height", "45px");
  gamePlayBn.style("background-color", "blue")//colour tbc
  gamePlayBn.style("color","white")
  gamePlayBn.mousePressed(gamePlayBnPressed);//currently to function instead of straight to screen
  gamePlayBn.position(190,525);
  gamePlayBn.hide();

  exitBn = createButton("EXIT");
  exitBn.style("width", "80px");
  exitBn.style("border-radius", "20px")
  exitBn.style("height", "25px");
  exitBn.style("background-color", "grey")
  exitBn.style("color","white")
  exitBn.mousePressed(exitBnPressed);
  exitBn.position(20,760);
  exitBn.hide();

  leaderBoardBn = createButton("Leader Board");
  leaderBoardBn.style("width", "100px");
  leaderBoardBn.style("border-radius", "20px")
  leaderBoardBn.style("height", "35px");
  leaderBoardBn.style("background-color", "blue")
  leaderBoardBn.style("color","white")
  leaderBoardBn.mousePressed(leaderBdBnPressed);
  leaderBoardBn.position(650,500);
  leaderBoardBn.hide();
}
