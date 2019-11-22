export const jsonParse = (data) => new Promise((resolve, reject) => {
	try {
		resolve(JSON.parse(data));
	} catch (error) {
		// @value {SyntaxError} error json parse throws SyntaxError
		reject(error);
	}
});

export const jsonParseSync = (data) => {
	let ret;

	try {
		ret = JSON.parse(data);
	} catch (error) {
		// @value {SyntaxError} error json parse throws SyntaxError
		ret = error;
	}

	return ret;
};
