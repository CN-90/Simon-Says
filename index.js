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
      console.log(checkSequence());
    })
  }
}

function startGame(){
  clearInterval(myInterval)
  gameOver = false;
  while(!gameOver){
    addToSequence();
    console.log(randomSequence)
    if(randomSequence.length >= 1){
      gameOver = true;
    }
  }
}

function addToSequence(){
  // Adds next color to random sequence player must follow.
  let number = Math.floor(Math.random() * 4);
  let colors = {0: 'red', 1: 'blue', 2: 'yellow', 3: 'green'}
  randomSequence.push(colors[number])
}

function checkSequence(){
  // Checks if the last colors in sequence match.
  let lastPlayerSequence = playerSequence[playerSequence.length - 1]
  let lastRandomSequence = randomSequence[randomSequence.length - 1]
  return lastPlayerSequence === lastRandomSequence;
}

function nextRound(){
  playerSequence = []
}
