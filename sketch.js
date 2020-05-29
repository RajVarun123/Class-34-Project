var database;
var canvas;
var gameState = 0;
var peopleCount;
var backgroundImage;
var quiz, people, game;

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 30,displayHeight - 180);

  game = new Game();
  game.getstate();
  game.start();
}

function draw(){
  
}