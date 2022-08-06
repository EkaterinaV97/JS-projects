/**
 * @param {string} cssSelector
 */
 const getTextFromSelector = cssSelector => {
	const cssSelector = document.querySelector('h1');
    if (cssSelector) {
        return cssSelector.textContent;
    } return undefined;
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined