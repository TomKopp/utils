/**
 * Merges two arrays into one, removing duplicate values.
 * This method uses a lookup to ensure that the resulting array contains only unique values.
 *
 * @see {@link https://stackoverflow.com/a/13847481/860099}
 * @exports
 * @param {Array} a - The first array to merge.
 * @param {Array} b - The second array to merge.
 * @return {Array} A new array containing unique values from both arrays.
 */
export const merge = (a, b) => {
	const hash = new Set();
	const ret = [];

	for (let i = 0; i < a.length; i++) {
		let e = a[i];
		if (!hash.has(e)) {
			hash.add(e);
			ret.push(e);
		}
	}

	for (let i = 0; i < b.length; i++) {
		let e = b[i];
		if (!hash.has(e)) {
			hash.add(e);
			ret.push(e);
		}
	}

	return ret;
};

/**
 * Merges two arrays into one, removing duplicate values.\
 * This method uses ES6 style with the spread syntax and Set.\
 * It is slower than the one using a lookup for large arrays.
 *
 * @see {@link https://stackoverflow.com/a/27664971/860099}
 * @exports
 * @param {Array} a - The first array to merge.
 * @param {Array} b - The second array to merge.
 * @return {Array} A new array containing unique values from both arrays.
 */
export const mergeES6 = (a, b) => [...new Set([...a, ...b])];
