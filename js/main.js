"use strict";

let idleEast;
let ninja = new Ninja(W / 2, H / 2);
let loop = true;

function preload() {
  idleEast = loadAnimation( 'assets/img/ninja_player/idle/idle_east/idle_1.png', 'assets/img/ninja_player/idle/idle_east/idle_2.png', 'assets/img/ninja_player/idle/idle_east/idle_3.png', 'assets/img/ninja_player/idle/idle_east/idle_4.png')
}

function setup() {
  createCanvas(W, H);
  ninja.createNinja()
}
function draw() {
  background("grey");
  //testScene();

  drawSprites()

}