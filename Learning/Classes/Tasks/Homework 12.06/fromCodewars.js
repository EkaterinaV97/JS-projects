/*
  Title:
  Create Phone Number
  Description:
  Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
 

const createPhoneNumber = numbers => {
  let format = "(xxx) xxx-xxxx";
  for(let num = 0; num < numbers.length; num++) {
    format = format.replace("x", numbers[num]);
  }
  return format;
}


/*
  Title:
  Alternate case
  Description:
  Напишите функцию alternateCase, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.
  Examples:
  Hello World -> hELLO wORLD
*/
 
 
let string = "Hello World"
const alternateCase = str => {
  return str.split('').map(newStr => newStr === newStr.toLowerCase() ? newStr.toUpperCase() : newStr.toLowerCase()).join('');
}
console.log(alternateCase(string));
