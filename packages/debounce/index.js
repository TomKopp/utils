/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @see {@link https://davidwalsh.name/javascript-debounce-function|javascript-debounce-function} for further information.
 * @exports
 * @param {Function} func Callable that will be debounced.
 * @param {number} wait Time to wait before the function could be called. In Milliseconds.
 * @param {boolean} [immediate=false] Flag to indicate, that the function should be called at the leading edge of the timeout.
 * @return {Function} The debounced function.
 * @throws {TypeError} If `func` is not a function.
 */
export const debounce = (func, wait, immediate = false) => {
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
