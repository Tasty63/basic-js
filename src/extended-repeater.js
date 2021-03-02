const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
	let result = '';
	let newStr = String(str);
	let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

	let stringAddition = String(addition);

	for (let i = 1; i <= repeatTimes; i++) {
		result += newStr;

		for (let j = 1; j <= additionRepeatTimes; j++) {
			result += stringAddition;
			if (j !== additionRepeatTimes) {
				result += additionSeparator;
			}
		}

		if (i !== repeatTimes) {
			result += separator;
		}
	}
	return result;
};
