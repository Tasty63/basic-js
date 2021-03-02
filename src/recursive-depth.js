const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let maxDepth = 1;

		arr.forEach((item) => {
			if (Array.isArray(item)) {
				let currentDepth = this.calculateDepth(item);
				currentDepth++;
				if (currentDepth > maxDepth) maxDepth = currentDepth;
			}
		});
		return maxDepth;
	}
};
