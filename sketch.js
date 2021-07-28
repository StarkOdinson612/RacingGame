let playerCount;
let gameState;
let gameS = 0;
var playerC;
var ball;
var database;
let input, button;
let player, form, game;
let playerNames;
let track;
let car1_img, car2_img, car3_img, car4_img;
let car1, car2, car3, car4;
let pPos = [];
let cars;
let car_yPos;
let rank = [];
let numF, numFinished;

function preload() {
    track = loadImage('images/track.jpg');
    car1_img = loadImage('images/car1.png');
    car2_img = loadImage('images/car3.png');
    car3_img = loadImage('images/car2.png');
    car4_img = loadImage('images/car4.png');
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);

    car_yPos = displayHeight - 30;

    game = new Game();
    game.getState();
    console.log(gameS);
    game.waiting()
    // var pos_ref = database.ref('position').on('value', readBallPosition);
}

function draw() {
    if (playerC == 4) {
        game.updateState(1);       
    }

    if (gameS == 1) {
        game.play();
    }
}
