export const throttle = (func, wait, immediate) => {
	if (typeof func !== 'function') {
		throw new TypeError('Expected a function');
	}

	let timeout;

	return function throttled(...args) {
		const later = () => {
			timeout = null;
			if (!immediate) {
				func.apply(this, args);
			}
		};
		const callNow = immediate && !timeout;

		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			func.apply(this, args);
		}
	};
};
