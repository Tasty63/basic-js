const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
	let newArr = [];
	newArr = newArr.concat(...matrix);

	return newArr.reduce((acc, item) => (item === '^^' ? (acc += 1) : acc), 0);
};
