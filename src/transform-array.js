const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
	const newArr = arr.slice();
	if (Array.isArray(arr)) {
		arr.forEach((item, i, arr) => {
			switch (item) {
				case '--discard-next':
					if (i < newArr.length - 1) {
						newArr[i + 1] = 'discard';
					}
					newArr[i] = 'discard';
					break;
				case '--discard-prev':
					if (i > 0) {
						newArr[i - 1] = 'discard';
					}
					newArr[i] = 'discard';
					break;
				case '--double-next':
					if (i < newArr.length - 1) {
						newArr[i] = newArr[i + 1];
					} else {
						newArr[i] = 'discard';
					}
					break;
				case '--double-prev':
					if (i > 0) {
						newArr[i] = newArr[i - 1];
					} else {
						newArr[i] = 'discard';
					}
			}
		});
	} else {
		throw new Error();
	}
	return newArr.filter((item) => item !== 'discard');
};
