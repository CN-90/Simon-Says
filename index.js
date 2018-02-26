let playerSequence = [];
let randomSequence = [];
let roundNumber = 0;
let gameOver = false;

const redSquare = document.querySelector('.red');
const blueSquare = document.querySelector('.blue');
const greenSquare = document.querySelector('.green');
const yellowSquare = document.querySelector('.yellow')

const redAudio = document.querySelector('#red-audio')
const blueAudio = document.querySelector('#blue-audio')
const greenAudio = document.querySelector('#green-audio')
const yellowAudio = document.querySelector('#yellow-audio')


setEventListeners()


function setEventListeners(){
  let squares = [ redSquare, blueSquare, greenSquare, yellowSquare]
  for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
      playerSequence.push(this.dataset.color);
      changeOpacity(this.dataset.color);
      playSound(this.dataset.color);
      if(!checkSequence()){
        console.log(playerSequence, randomSequence)
        console.log('Game over!')
      } else if(playerSequence.length === randomSequence.length){
        nextRound(randomSequence[randomSequence.length - 1]);
      }
    })
  }
}

function addToSequence(){
  // Adds next color to random sequence player must follow.
  let number = Math.floor(Math.random() * 4);
  let colors = {0: 'red', 1: 'blue', 2: 'yellow', 3: 'green'}
  randomSequence.push(colors[number]);
  return colors[number];
}

function checkSequence(){
  // ensures user sequence matches random Sequence.
  for(let i = 0; i < playerSequence.length; i++){
    if(playerSequence[i] !== randomSequence[i]){
      return false
    }
  }
  return true;
}

function nextRound(){
  playerSequence = []
  let color = addToSequence();
  timer = 1000;
  for(let color of randomSequence){
    setTimeout(() => {
      playSound(color);
      changeOpacity(color)
    }, timer)
    timer += 1000;
  }
  renderRound();
}

function playSound(color){
  let soundToPlay = {
    red: redAudio,
    blue: blueAudio,
    yellow: yellowAudio,
    green: greenAudio
  }
  soundToPlay[color].play();
}

function renderRound(){
  roundNumber++;
  document.querySelector('#round').innerHTML = `Round: ${roundNumber}`
}

function changeOpacity(color){
  let colors = {
    red: redSquare,
    blue: blueSquare,
    yellow: yellowSquare,
    green: greenSquare
  }
  colors[color].style.opacity = '1';
  setTimeout(() => {
    colors[color].style.opacity = '.5';
  }, 500)
}
