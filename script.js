let diceOne = document.querySelector('.one')
let diceTwo = document.querySelector('.two')
let diceThree = document.querySelector('.three')
// let diceTotal = document.querySelector('.diceTotal')
const big = document.querySelector('.big')
const small = document.querySelector('.small')
let betAmmount = document.querySelector('#betAmmount')
const betBtn = document.querySelector('.betBtn')
const threeOfAKind = document.querySelectorAll('.three')

/*
create a function that captures a dice value 
this function should push the final value to arr
once all dice are rolled reduce all arr value to total sum 
*/

function rollDie(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function diceTotal() {
  let diceArr = []
  diceArr.push(rollDie(1, 7))
  diceArr.push(rollDie(1, 7))
  diceArr.push(rollDie(1, 7))

  total = diceArr.reduce((acc, value) => {
    return acc + value
  }, 0)
  console.log(diceArr)
  return total
}
console.log(diceTotal())

// const placeBet = function (event) {
//   let bet = event.target
//   rollDie(1, 7)
// }
// console.log(placeBet)

// betBtn.addEventListener('click', placeBet)
