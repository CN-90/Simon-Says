let playerSequence = [];
let randomSequence = [];

const redSquare = document.querySelector('.red');
const blueSquare = document.querySelector('.blue');
const greenSquare = document.querySelector('.green');
const yellowSquare = document.querySelector('.yellow')

redSquare.addEventListener('click', function(){
  console.log(this.dataset.color);
  playerSequence.push(this.dataset.color);
  console.log(playerSequence)
  console.log(playerSequence[0] == randomSequence[0]);
})


function addToSequence(){
  // Adds next color to random sequence player must follow.
  let number = Math.floor(Math.random() * 4);
  let colors = {0: 'red', 1: 'blue', 2: 'yellow', 3: 'green'}
  randomSequence.push(colors[number])
}

function checkSequence(){
  
}

console.log(randomSequence);
addToSequence()
addToSequence()
addToSequence()
console.log(randomSequence)
