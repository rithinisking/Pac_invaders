import { LEVEL, OBJECT_TYPE } from './setup';
// Classes
import GameBoard from './Gameboard';
import Pacman from './Pacman';
// Dom Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// Game constants
const POWER_PILL_TIME = 10000; // ms
const GLOBAL_SPEED = 80; // ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;


function Gameover(pacman, grid){

}

function checkCollision(pacman, ghosts) {
    
}

function gameloop(pacman, ghosts){
    
}

function startgame(){
    gameWin = false;
    powerPillActive = false;
    score = 0

    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 500);
    gameBoard.addObject(500, [OBJECT_TYPE.PACMAN]);
}

startButton.addEventListener('click', startgame);