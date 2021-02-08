// console.log('hello world')

// let diceOne = document.querySelector('.diceOne')
// let diceTwo = document.querySelector('.diceTwo')
// let diceThree = document.querySelector('.diceThree')
// let diceTotal = document.querySelector('.diceTotal')
const big = document.querySelector('.big')
const small = document.querySelector('.small')
let betAmmount = document.querySelector('#betAmmount')
const betBtn = document.querySelector('.betBtn')
const threeOfAKind = document.querySelectorAll('.three')

function diceOne(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(diceOne(1, 7))

function diceTwo(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(diceTwo(1, 7))

function diceThree(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(diceThree(1, 7))

const placeBet = function (event) {
  let bet = event.target
}
console.log(placeBet)

betBtn.addEventListener('click', placeBet)
