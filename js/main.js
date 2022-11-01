"use strict";
let player = new newPlayer();
let enemy = new newEnemy();


function preload() {
  enemy.preload();
  player.preload();
}

function setup() {
  createCanvas(W, H);
  enemy.setup();
  player.setup();

}
function draw() {
  background("grey");
  enemy.draw();
  player.draw();
}