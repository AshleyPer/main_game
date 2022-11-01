"use strict";
let building1;
let bricks1;

let ninja = new Ninja(W / 2, H / 2);


function preload() {
 
  ninja.loadNinjaAnimations();
  loadScenePics ();
}

function setup() {
  createCanvas(W, H);
  ninja.createNinja()
    
}
function draw() {
  background("grey");
  testScene();

  drawSprites();
    
  ninja.attackAnimation();
  
}
