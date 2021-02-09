let diceOne = document.querySelector('.one')
let diceTwo = document.querySelector('.two')
let diceThree = document.querySelector('.dthree')
let diceTotals = document.querySelector('#total')
const big = document.querySelector('.big')
const small = document.querySelector('.small')
let betAmmount = document.querySelector('#betAmmount')
const betBtn = document.querySelector('.betBtn')
// const threeOfAKind = document.querySelectorAll('.threeOfAKind')
let gameMessage = document.querySelector('.gameMessage')
let gameChoice = ''

function rollDie(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
let diceArr = []

function rollingDice() {
  diceOne.innerText = ''
  diceTwo.innerText = ''
  diceThree.innerText = ''
  diceArr.push(rollDie(1, 7))
  diceOne.innerText = diceArr[0]
  diceArr.push(rollDie(1, 7))
  diceTwo.innerText = diceArr[1]
  diceArr.push(rollDie(1, 7))
  diceThree.innerText = diceArr[2]
  return diceArr
}
function diceTotal() {
  // diceTotals.innerText = ''
  total = diceArr.reduce((acc, value) => {
    return acc + value
  }, 0)
  return total
}
console.log(diceTotals)

/* if dice total is >= 11 it's big
   if dice total is < 11 it's small  */

function compare() {
  gameMessage.innerText = ''
  console.log(total)
  if (gameChoice === 'big') {
    if (total >= 11 && total <= 17) {
      gameMessage.innerText = 'Win'
      console.log('win')
    } else {
      gameMessage.innerText = 'Lose'
      console.log('lose')
    }
  } else if (gameChoice === 'small') {
    if (total < 11 && total >= 4) {
      gameMessage.innerText = 'Win'
      console.log('win')
    } else {
      gameMessage.innerText = 'Lose'
      console.log('lose')
    }
  } else if (gameChoice === 'threeOfAKind') {
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2])
      gameMessage.innerText = 'Win'
    console.log('win')
  } else {
    gameMessage.innerText = 'Lose'
    console.log('lose')
  }
  gameChoice = ''
}
const placeBet = function (event) {
  bet = event.target
  diceArr = []
  rollingDice()
  diceTotals.innerText = ''
  diceTotals.innerText = diceTotal()
  compare()
}

const placeBig = function (event) {
  gameChoice = 'big'
  console.log(gameChoice)
}

const placeSmall = function (event) {
  gameChoice = 'small'
  console.log(gameChoice)
}

const placeThreeOfAKind = function (event) {
  gameChoice = 'threeOfAKind'
}

betBtn.addEventListener('click', placeBet)
big.addEventListener('click', placeBig)
small.addEventListener('click', placeSmall)
document
  .querySelectorAll('.threeOfAKind')
  .forEach((threeOfAKind) =>
    threeOfAKind.addEventListener('click', placeThreeOfAKind)
  )
