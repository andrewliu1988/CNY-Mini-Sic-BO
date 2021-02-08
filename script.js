// console.log('hello world')

// let diceOne = document.querySelector('.diceOne')
// let diceTwo = document.querySelector('.diceTwo')
// let diceThree = document.querySelector('.diceThree')
let diceTotal = document.querySelector('.diceTotal')
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
