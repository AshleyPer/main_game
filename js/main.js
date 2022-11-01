"use strict";
let building1;
let bricks1;

let ninja = new Ninja(W / 2, H / 2);

let screenState = 0;
const LOADING = 0;
const MAIN_MENU = 1;
const GAMEPLAY = 2;
const GAME_OVER = 3;



function preload() {
 
  ninja.loadNinjaAnimations();
  loadScenePics ();
}

function setup() {
  createCanvas(W, H);
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

}

function drawMainMenu() {
  
}

function drawGameplay() {
  background("grey");
  testScene();

  drawSprites();
    
  ninja.attackAnimation();
}

function drawGameover() {
  
}
