/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
 function getFullNames(users) {
	return `${users[0].firstName} ${users[0].lastName}, ${users[users.length - 1].firstName} ${users[users.length - 1].lastName}`
}

// Sample usage - do not modify
let users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];
console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]