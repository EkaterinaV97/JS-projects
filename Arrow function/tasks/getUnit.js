/**
 * @param {string} text
 */
 const getUnit = text => {
	 if (text.includes("\u00B0F")) {
		 return "Fahrenheit";
	 } else if (text.includes("\u00B0C")) {
		 return "Celsius";
	 }
	 return "N/A";
}

// Sample usage - do not modify
console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
console.log(getUnit("Why is it 20°C")); // Celsius
console.log(getUnit("It is expected to be cold.")); // N/A