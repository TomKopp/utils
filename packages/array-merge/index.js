// https://stackoverflow.com/a/13847481/860099
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

// https://stackoverflow.com/a/27664971/860099
export const merge2 = (a, b) => [...new Set([...a, ...b])];
