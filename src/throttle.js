import { ExpectedFunctionError } from './errors';

export const throttle = (func, wait, immediate = false) => {
	if (typeof func !== 'function') { throw new ExpectedFunctionError(); }

	let timeout;

	return function throttled(...args) {
		const later = () => {
			timeout = null;
			if (!immediate) { func.apply(this, args); }
		};
		const callNow = immediate && !timeout;

		if (!timeout) { timeout = setTimeout(later, wait); }
		if (callNow) { func.apply(this, args); }
	};
};

export const rAFthrottle = (func, immediate = false) => {
	if (typeof func !== 'function') { throw new ExpectedFunctionError(); }

	let rAFid;

	return function throttled(...args) {
		const later = () => {
			rAFid = null;
			if (!immediate) { func.apply(this, args); }
		};
		const callNow = immediate && !rAFid;

		if (!rAFid) { rAFid = requestAnimationFrame(later); }
		if (callNow) { func.apply(this, args); }
	};
};
