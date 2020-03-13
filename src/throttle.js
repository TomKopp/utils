import { ErrorFunctionExpected } from './errors';

/**
 * Returns a function, that, as long as it continues to be invoked, will only
 * trigger every N milliseconds. If `immediate` is passed, trigger the
 * function on the leading edge, instead of the trailing.
 *
 * @see {@link https://davidwalsh.name/javascript-debounce-function|javascript-debounce-function} for further information.
 * @exports
 * @param {Function} func Callable to be throttled.
 * @param {number} wait Time to wait between each call. In Milliseconds.
 * @param {boolean} [immediate=false] Flag to indicate that the function should be called at the leading edge of the timeout.
 * @return {Function} The throttled function
 */
export const throttle = (func, wait, immediate = false) => {
	if (typeof func !== 'function') {
		throw new ErrorFunctionExpected();
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

/**
 * Returns a function, that, as long as it continues to be invoked, will only
 * trigger every `requestAnimationFrame()`. If `immediate` is passed, trigger the
 * function on the leading edge, instead of the trailing.
 *
 * @exports
 * @param {Function} func Callable to be throttled.
 * @param {boolean} [immediate=false] Flag to indicate that the function should be called at the leading edge of the timeout.
 * @return {Function} The throttled function
 */
export const rAFthrottle = (func, immediate = false) => {
	if (typeof func !== 'function') {
		throw new ErrorFunctionExpected();
	}

	let rAFid;

	return function throttled(...args) {
		const later = () => {
			rAFid = null;
			if (!immediate) {
				func.apply(this, args);
			}
		};
		const callNow = immediate && !rAFid;

		if (!rAFid) {
			rAFid = requestAnimationFrame(later);
		}
		if (callNow) {
			func.apply(this, args);
		}
	};
};
