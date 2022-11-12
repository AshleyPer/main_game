const W=1000;
const H=600;
const LOADING = 0;
const MAIN_MENU = 1;
const GAMEPLAY = 2;
const GAME_OVER = 3;
const LEADER_BOARD = 4;
const WINNER = 5;

//the parameters that are going into the constructor when instancing the class
//buttonText, positionX, positionY, buttonWidth, buttonHeight, backgroundColour, fontSize
const mainMenuBn = new Button('Main Menu', window.innerWidth / 2 - 60, H - 35, '130px', '45px', "blue", '20px');
const gamePlayBn = new Button('Play Game', window.innerWidth / 2 - 60, H - 35, '130px', '45px', "blue", '20px');
const exitBn = new Button('EXIT', window.innerWidth / 2 + 410, H - 15, '80px', '25px', "grey", '',);
const leaderBoardBn = new Button('Leader Board', window.innerWidth / 2 + 350, H - 25, '100px', '35px', "blue", '');