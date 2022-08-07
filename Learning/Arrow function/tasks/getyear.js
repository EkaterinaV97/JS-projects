/**
 * @param {number[]} years
 * @param {number} searchYear
 */
 const getYear = (years, searchYear) => {
	let string = years.join('');
    if (string.includes(searchYear)) {
        return searchYear;
    }
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined