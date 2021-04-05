var database 

var blueBalloon,lightBlueBalloon,greenBalloon,blackBalloon,balloon,balloonGroup 

var arrLeftImg,arrRightImg,arrowGroup,arrow

var bkgStart, bkgMiddle

var bowLeftImg,bowRightImg

var bow1,bow2,bows

var  gameState = 0;
var  playerCount = 0;

var game , player , form;

var allPlayers ;

function preload(){
  blueBalloon=loadImage("images/BlueBalloon.png");
  blackBalloon=loadImage("images/BlackBalloon.png")
  lightBlueBalloon=loadImage("images/LightBlueBalloon.png")
  greenBalloon=loadImage("images/GreenBalloon.png")
  arrLeftImg=loadImage("images/ArrowLeft.png")
  arrRightImg=loadImage("images/ArrowRight.png")
  bkgMiddle=loadImage("images/BkgMiddleImage.jpg")
  bkgStart=loadImage("images/BkgStartImage.jpg")
  bowLeftImg=loadImage("images/BowFacingLeft.png")
  bowRightImg=loadImage("images/BowFacingRight.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  database= firebase.database();

  game = new Game();
  game.getState()
  console.log(gameState)
  game.start()  
}

function draw() {
  background(bkgStart);  

  if (playerCount===2){
    game.writeState(1)
  }
console.log(gameState)
  if (gameState===1){
    clear()
    game.play();
  }
  
  
}