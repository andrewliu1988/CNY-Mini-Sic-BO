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
let randomThreeOfAKind = document.querySelector('.randomToak')
let gameChoice = ''
let bank = 500
let diceArr = []
let tok = 0

function rollDie(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

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

function compare() {
  gameMessage.innerText = ''
  console.log(diceSum)
  if (gameChoice === 'big') {
    if (
      diceSum >= 11 &&
      diceSum <= 17 &&
      diceArr[0] !== diceArr[1] &&
      diceArr[1] !== diceArr[2]
    ) {
      gameMessage.innerText = 'Win'
      winMoney()
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
    }
  } else if (gameChoice === 'small') {
    if (
      diceSum < 11 &&
      diceSum >= 4 &&
      diceArr[0] !== diceArr[1] &&
      diceArr[1] !== diceArr[2]
    ) {
      gameMessage.innerText = 'Win'
      winMoney()
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
    }
  } else if (gameChoice === 'randomThreeOfAKind') {
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2]) {
      gameMessage.innerText = 'Win'
      randomToakWinMoney()
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
    }
  } else if (gameChoice === 'threeOfAKind') {
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2]) {
      if ((tok = diceArr[0])) {
        console.log('win')
      } else {
        console.log('lose')
      }
    } else {
      console.log('lose')
    }
  }
  gameChoice = ''
}

const placeBet = (event) => {
  bet = event.target
  if (betAmount.value == 0) {
    gameMessage.innerText = 'Please enter bet amount'
  } else if (gameChoice == '') {
    gameMessage.innerHTML = 'Please choose what to bet on'
  } else if (bank <= 0) {
    gameMessage.innerText = 'Player has gone bankrupt!!!'
  } else if (betAmount.value > bank) {
    gameMessage.innerText = 'Not enough money in the bank'
  } else {
    diceArr = []
    rollingDice()
    diceResult.innerText = ''
    diceResult.innerText = diceTotal()
    compare()
  }
}

const winMoney = () => {
  bank += parseInt(betAmount.value)
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const loseMoney = () => {
  bank -= parseInt(betAmount.value)
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const randomToakWinMoney = () => {
  bank += parseInt(betAmount.value) * 30
  console.log(bank)
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const ToakWinMoney = () => {
  bank += parseInt(betAmount.value) * 150
  console.log(bank)
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const placeBig = () => {
  gameChoice = 'big'
  console.log(gameChoice)
}

const placeSmall = () => {
  gameChoice = 'small'
  console.log(gameChoice)
}

const betRandom = () => {
  gameChoice = 'randomThreeOfAKind'
  console.log(gameChoice)
}

const assignTokOne = () => {
  gameChoice = 'threeOfAKind'
  tok = 1
  console.log(tok)
  console.log(gameChoice)
}
betBtn.addEventListener('click', placeBet)
big.addEventListener('click', placeBig)
small.addEventListener('click', placeSmall)
randomThreeOfAKind.addEventListener('click', betRandom)
document.querySelector('.threeOne').addEventListener('click', assignTokOne)
document.querySelector('.threeTwo').addEventListener('click', assignTokOne)
document.querySelector('.threeThree').addEventListener('click', assignTokOne)
document.querySelector('.threeFour').addEventListener('click', assignTokOne)
document.querySelector('.threeFive').addEventListener('click', assignTokOne)
document.querySelector('.threeSix').addEventListener('click', assignTokOne)

// document
//   .querySelectorAll('.threeOfAKind')
//   .forEach((threeOfAKind) =>
//     threeOfAKind.addEventListener('click', placeThreeOfAKind)
//   )

// switch () {
//   case diceArr [0] === 1 && diceArr [1] === 1 && diceArr[2] === 1:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;
//   case diceArr [0] === 2 && diceArr [1] === 2 && diceArr[2] === 2:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;

//   case diceArr [0] === 3 && diceArr [1] === 3 && diceArr[2] === 3:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;

//   case diceArr [0] === 4 && diceArr [1] === 4 && diceArr[2] === 4:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;

//   case diceArr [0] === 5 && diceArr [1] === 5 && diceArr[2] === 5:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;

//   case diceArr [0] === 6 && diceArr [1] === 6 && diceArr[2] === 6:
//     gameMessage.innerText = 'Win'
//     toakWinMoney()
//   break;
//   default:
//   gameMessage.innerText = 'Lose'
//   loseMoney()

// }
