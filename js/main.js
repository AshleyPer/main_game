"use strict";

let player = new Player();
let balls = new BallManager();
let level = new LevelManager();

function preload() {}

function setup() {
  createCanvas(W, H);
  player.setup();
  level.setup();
  balls.setup();
  textAlign(RIGHT);
  console.log('testing a change')
}
function draw() {
  player.draw(balls);
  level.draw(balls);
  balls.draw();

  background("grey");
  drawSprites();
}