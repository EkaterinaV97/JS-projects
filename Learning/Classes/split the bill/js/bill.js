/* bill.js */

export default class Bill {
  constructor() {
      this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
		amountStr = Number.parseInt(amountStr);
    this.amounts.push(amountStr);
    return this.amounts;
  }
	
	getCount() {
    return this.amounts.length;
  }

  getTotal() {
    return this.amounts.reduce(function(total, current) {
      return total + current;
    }, 0)
  }

  getAverage() {
    let sum = this.amounts.reduce((total, current) => total + current, 0);
    return sum / this.amounts.length;
  }
}