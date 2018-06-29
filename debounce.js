export const debounce = (func, wait, immediate) => {
	if (typeof func !== 'function') {
		throw new TypeError('Expected a function');
	}

	let timeout;

	return function debounced(...args) {
		const later = () => {
			timeout = null;
			if (!immediate) {
				func.apply(this, args);
			}
		};
		const callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(this, args);
		}
	};
};

export default debounce;
