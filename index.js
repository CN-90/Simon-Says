let playerSequence = [];
let randomSequence = [];
let roundNumber = 1;
let gameOver = false;

const redSquare = document.querySelector('.red');
const blueSquare = document.querySelector('.blue');
const greenSquare = document.querySelector('.green');
const yellowSquare = document.querySelector('.yellow')

setEventListeners()


function setEventListeners(){
  let squares = [ redSquare, blueSquare, greenSquare, yellowSquare]
  for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
      playerSequence.push(this.dataset.color);
      if(!checkSequence()){
        console.log('Game over!')
      } else if(playerSequence.length === randomSequence.length){
        nextRound();
      }
    })
  }
}

function startGame(){
  
}

function addToSequence(){
  // Adds next color to random sequence player must follow.
  let number = Math.floor(Math.random() * 4);
  let colors = {0: 'red', 1: 'blue', 2: 'yellow', 3: 'green'}
  randomSequence.push(colors[number])
}

function checkSequence(){
  for(let i = 0; i < playerSequence.length; i++){
    if(playerSequence[i] !== randomSequence[i]){
      return false
    }
  }
  return true;
}

function nextRound(){
  playerSequence = []
  addToSequence();
}
