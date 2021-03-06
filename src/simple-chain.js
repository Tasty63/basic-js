const CustomError = require('../extensions/custom-error');

const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value = '') {
		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (position < 1 || position > this.chain.length) {
			this.chain = [];
			throw new Error();
		} else {
			this.chain.splice(--position, 1);
		}
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let finisheChain = this.chain.join('~~');
		this.chain = [];
		return finisheChain;
	},
};

module.exports = chainMaker;
