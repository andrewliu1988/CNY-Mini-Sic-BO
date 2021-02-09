let diceOne = document.querySelector('.one')
let diceTwo = document.querySelector('.two')
let diceThree = document.querySelector('.three')
let diceResult = document.querySelector('#total')
const big = document.querySelector('.big')
const small = document.querySelector('.small')
let betAmount = document.querySelector('#betAmount')
const betBtn = document.querySelector('.betBtn')
let gameMessage = document.querySelector('.gameMessage')
let moneyDisplay = document.querySelector('.moneyDisplay')
let gameChoice = ''
let gameActive = true
let winOrLose = 0

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
  diceSum = diceArr.reduce((acc, value) => {
    return acc + value
  }, 0)
  return diceSum
}

/* if dice total is >= 11 it's big
   if dice total is < 11 it's small  */

function compare() {
  gameMessage.innerText = ''
  console.log(diceSum)
  if (gameChoice === 'big') {
    if (diceSum >= 11 && diceSum <= 17) {
      gameMessage.innerText = 'Win'
      winMoney()
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
    }
  } else if (gameChoice === 'small') {
    if (diceSum < 11 && diceSum >= 4) {
      gameMessage.innerText = 'Win'
      winMoney()
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
    }
  }
  //  else if (gameChoice === 'threeOfAKind') {
  //   if (
  //     diceArr[0] === diceArr[1] &&
  //     diceArr[0] === diceArr[2] &&
  //     gameChoice === 'threeOfAKind'
  //   )
  //     gameMessage.innerText = 'Win'
  //   console.log('win')
  //   console.log(diceArr)
  //   return
  // } else {
  //   gameMessage.innerText = 'Lose'
  //   console.log('lose')
  //   return
  // }
  gameChoice = ''
}

const placeBet = function (event) {
  bet = event.target
  diceArr = []
  rollingDice()
  diceResult.innerText = ''
  diceResult.innerText = diceTotal()
  compare()
}

const winMoney = (add) => {
  moneyDisplay.innerText = winOrLose
  let addMoney = betAmount.value
  winOrLose += parseInt(addMoney)
  updateMoneyDisplay()
}

const loseMoney = (minus) => {
  moneyDisplay.innerText = winOrLose
  let minusMoney = betAmount.value
  winOrLose -= parseInt(minusMoney)
  updateMoneyDisplay()
}

function updateMoneyDisplay() {
  moneyDisplay.innerText = parseInt(winOrLose)
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
  console.log(gameChoice)
}

betBtn.addEventListener('click', placeBet)
big.addEventListener('click', placeBig)
small.addEventListener('click', placeSmall)
document
  .querySelectorAll('.threeOfAKind')
  .forEach((threeOfAKind) =>
    threeOfAKind.addEventListener('click', placeThreeOfAKind)
  )
