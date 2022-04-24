/* index.js */

import { run } from "./run.js"

let output = document.querySelector("#output")
let firstNumber = 0
let operation = null

document.querySelectorAll("#calculator .number").forEach(button => {
  button.addEventListener("click", event => {
    let value = event.currentTarget.textContent
    if (operation){
      output.value = value
    } else {
      output.value += value
    }
  })
})

document.querySelectorAll("#calculator .operation").forEach(button => {
  button.addEventListener("click", event => {
    firstNumber = Number.parseInt(output.value)
    operation = event.currentTarget.dataset.action
  })
})

const equal = document.querySelector("#calculator .equal")
equal.addEventListener("click", () => {
  if (!operation){
    return
  }
  let secondNumber = Number.parseInt(output.value, 10)

  output.value = run(operation, firstNumber, secondNumber)

  //reset operation
  operation = null
})