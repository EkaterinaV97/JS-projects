/* task. Capitalize first character in string */

function capitaLize(string) {
 let str = string.charAt(0).toUpperCase() + string.slice(1);
 return str;
}
 
console.log(capitaLize("hello")); // Hello
console.log(capitaLize("qwerty")); // Qwerty