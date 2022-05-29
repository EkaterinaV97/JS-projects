/* countries.js */

/**
 * @param {string[]} countries
 */
 export const getDropdown = (countries) => {
	/* return `<option value="">Please select</option>
		${countries.map(country => `<option value="${country.toLowerCase()}">${country}</option>`).join('')}` */

	return `
	<option value="">Please select</option>
	${countries.map(country => {
		return `<option value="${country.toLowerCase()}">${country}</option>`
	}).join('')}
	`
};