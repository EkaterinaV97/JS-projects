/* run.js */

function sum(a, b) {
	return a + b
}

function multiply(a, b) {
  return a * b
}

function subtract(a, b) {
  return a - b
}

function divide(a, b) {
  return a / b
}

export function run(operation, x, y) {
    console.log(operation)
    console.log(x, y)
    if (operation === "sum") {
      return sum(x, y)
    }
    if (operation === "multiply") {
      return multiply(x, y)
    }
    if (operation === "subtract") {
      return subtract(x, y)
    }
    if (operation === "divide") {
      return divide(x, y)
    }
}