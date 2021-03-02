const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const reaction = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
	let sampleActivityNum = parseFloat(sampleActivity);
	if (typeof sampleActivity === 'string' && !!sampleActivity && sampleActivityNum > 0 && sampleActivityNum <= 15) {
		return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / reaction);
	} else {
		return false;
	}
};
