const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
	if (Object.prototype.toString.call(date) === '[object Date]') {
		const timeOfYear = ['winter', 'spring', 'summer', 'autumn'];
		const month = date.getMonth();

		if (month === 0 || month === 1 || month === 11) {
			return timeOfYear[0];
		} else if (month >= 2 && month <= 4) {
			return timeOfYear[1];
		} else if (month >= 5 && month <= 7) {
			return timeOfYear[2];
		} else {
			return timeOfYear[3];
		}
	} else if (!date) {
		return 'Unable to determine the time of year!';
	} else {
		throw new Error('Wrong date');
	}
};
