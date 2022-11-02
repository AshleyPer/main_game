"use strict";

let testAlley;
let ninja = new Ninja(W / 2 +200, H / 2+200);
let gameFinish = true;
let screenState = 1;//changed to main for build, change back to load when done
let mainMenuBn, gamePlayBn, exitBn, leaderBoardBn;//buttons
let ninTest;



function preload() {
 
  ninja.loadNinjaAnimations();
  loadScenePics ();
  ninTest = loadImage("assets/ninjapictest.png");//pic for character test main menu
}

function setup() {
  createCanvas(W, H);
  buttonSetUp();
  ninja.createNinja()
  
  //createDiv("Countdown to Jam")
 // createDiv(Date)
    
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
  background(80)
  gamePlayBn.show();
  exitBn.show();
  leaderBoardBn.show();
  //below is all testing code 
  fill(150);
  textSize(25);
  textAlign(CENTER);
  stroke(150);
  text("Main Menu", width/2, height/2 - 100);
  text("Under Construction", width/2, height/2 - 50);
  text("Adding Art", width/2, height/2 );
  text("Maybe links to Character info", width/2, height/2 + 50);
  text("other stuff inc maybe levels tbc", width/2, height/2 + 100);
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

function characterImages(){
image(ninTest, 30,170);
//replace the following code with enemy images
rectMode(CENTER);
fill(100);
rect(920,70,95,80);//sample space  - image to replace
rect(920,170,65,80);
rect(920,270,65,80);
rect(920,370,65,80);
rect(920,470,65,80);
fill(0);
noStroke();
strokeWeight(2);
textSize(14)
textStyle(BOLD);
text("Boss Enemy", 920,70);
text("Enemy 1", 920,170);
text("Enemy 2", 920,270);
text("Enemy 3", 920,370);
text("Enemy 4", 920,470);
}

function characterPopUps(){//test code maybe use a function/class with parameters - could use a text file for text
  if(mouseX >30 && mouseX < 125 && mouseY <430 && mouseY >170){//check position when final
    stroke(120)
    fill(100)
    rect(200,200,150,150,30)
    noStroke()
    fill(0)
    text("Hero Ninja", 200,160)
    text("He/she has a sword", 200,180)//add specs
    text("Move him with left", 200,200)
    text("and right arrows", 200,220)
    text("space bar on/off", 200,240)
    text("for attack ", 200,260)
  }
  if(mouseX >880 && mouseX < 960 && mouseY <100 && mouseY >35){//check these once image up
    stroke(120)
    fill(100)
    rect(800,65,110,80,30)
    noStroke()
    fill(0)
    textSize(12)
    text("Boss Enemy", 800,50)
    text("He is bad", 800,70)// add specs
    text("And kicks butt", 800,90)
    //text("....", 800,110)
   
  }
   
  if(mouseX >890 && mouseX < 950 && mouseY <210 && mouseY >130){//check these once image up
    stroke(120)
    fill(100)
    rect(800,170,110,80,30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 1", 800,150)
    text("He/she is also bad", 800,170)//add specs
    text("but is not boss", 800,190)
    
  }
  if(mouseX >890 && mouseX < 950 && mouseY <300 && mouseY >235){//check these once image up
    stroke(120)
    fill(100)
    rect(800,270,110,80,30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 2", 800,250)
    text("He/she is also bad", 800,270)// add specs
    text("but is not boss", 800,290)
    
  }
  if(mouseX >890 && mouseX < 950 && mouseY <400 && mouseY >330){//check these once image up
    stroke(120)
    fill(100)
    rect(800,370,110,80,30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 3", 800,350)//add specs
    text("He/she is also bad", 800,370)
    text("but is not boss", 800,390)
    
  }
  if(mouseX >890 && mouseX < 950 && mouseY <500 && mouseY >430){//check these once image up
    stroke(120)
    fill(100)
    rect(800,470,110,80,30)
    noStroke()
    fill(0)
    textSize(12)
    text("Enemy 4", 800,450)
    text("He/she is also bad", 800,470)//add specs
    text("but is not boss", 800,490)
    
  }
  
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
