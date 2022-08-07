/*run.js */
function double(number) {
  return number * 2
}

function triple(number) {
	return number * 3
}

export function run(operation, number) {
  console.log(operation)
  console.log(number)
  if (operation === "double") {
    return double(number)
  }
  if (operation === "triple") {
    return triple(number)
  }
}