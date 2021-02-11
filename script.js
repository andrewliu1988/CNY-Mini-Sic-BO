let diceOne = document.querySelector('#dieOne')

let diceTwo = document.querySelector('#dieTwo')
let diceThree = document.querySelector('#dieThree')
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
diceOne.src = './images/die1.png'
diceTwo.src = './images/die1.png'
diceThree.src = './images/die1.png'

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1
}

const rollingDice = () => {
  diceArr.push(rollDie())
  diceOne.src = `./images/die${diceArr[0]}.png`
  diceArr.push(rollDie())
  diceTwo.src = `./images/die${diceArr[1]}.png`
  diceArr.push(rollDie())
  diceThree.src = `./images/die${diceArr[2]}.png`
  return diceArr
}

const diceTotal = () => {
  diceSum = diceArr.reduce((acc, value) => {
    return acc + value
  }, 0)
  return diceSum
}

const compare = () => {
  gameMessage.innerText = ''
  if (gameChoice === 'big') {
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2]) {
      gameMessage.innerText = 'Lose'
    } else {
      if (diceSum >= 11 && diceSum <= 17) {
        gameMessage.innerText = 'Win'
        winMoney()
      } else {
        gameMessage.innerText = 'Lose'
        loseMoney()
      }
    }
  } else if (gameChoice === 'small') {
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2]) {
      gameMessage.innerText = 'Lose'
    } else {
      if (diceSum < 11 && diceSum >= 4) {
        gameMessage.innerText = 'Win'
        winMoney()
      } else {
        gameMessage.innerText = 'Lose'
        loseMoney()
      }
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
    console.log(diceArr)
    if (diceArr[0] === diceArr[1] && diceArr[1] === diceArr[2]) {
      if (tok === diceArr[0]) {
        gameMessage.innerText = 'Win'
        toakWinMoney()
      } else {
        gameMessage.innerText = 'Lose'
        loseMoney()
      }
    } else {
      gameMessage.innerText = 'Lose'
      loseMoney()
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
    // diceArr = [5, 5, 5]
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
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const toakWinMoney = () => {
  bank += parseInt(betAmount.value) * 150
  moneyDisplay.innerText = `$${parseInt(bank)}`
}

const placeBig = () => {
  gameChoice = 'big'
}

const placeSmall = () => {
  gameChoice = 'small'
}

const betRandom = () => {
  gameChoice = 'randomThreeOfAKind'
}

const assignTokOne = () => {
  gameChoice = 'threeOfAKind'
  tok = 1
  console.log(diceArr)
  console.log(tok)
}

const assignTokTwo = () => {
  gameChoice = 'threeOfAKind'
  tok = 2
}

const assignTokThree = () => {
  gameChoice = 'threeOfAKind'
  tok = 3
}

const assignTokFour = () => {
  gameChoice = 'threeOfAKind'
  tok = 4
}

const assignTokFive = () => {
  gameChoice = 'threeOfAKind'
  tok = 5
}

const assignTokSix = () => {
  gameChoice = 'threeOfAKind'
  tok = 6
}

betBtn.addEventListener('click', placeBet)
big.addEventListener('click', placeBig)
small.addEventListener('click', placeSmall)
randomThreeOfAKind.addEventListener('click', betRandom)
document.querySelector('.threeOne').addEventListener('click', assignTokOne)
document.querySelector('.threeTwo').addEventListener('click', assignTokTwo)
document.querySelector('.threeThree').addEventListener('click', assignTokThree)
document.querySelector('.threeFour').addEventListener('click', assignTokFour)
document.querySelector('.threeFive').addEventListener('click', assignTokFive)
document.querySelector('.threeSix').addEventListener('click', assignTokSix)
