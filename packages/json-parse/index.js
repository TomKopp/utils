/**
 * Asynchronous wrapper around JSON.parse to catch any errors
 *
 * @param  {string} data The json string
 * @return {Promise} Promise, that fulfills with the data or rejects on error
 */
export const jsonParse = (data) => new Promise((resolve, reject) => {
	try {
		resolve(JSON.parse(data));
	} catch (error) {
		// @value {SyntaxError} error json parse throws SyntaxError
		reject(error);
	}
});

/**
 * Synchronous wrapper around JSON.parse to catch any errors
 *
 * @param  {string} data The json string
 * @return {(object|SyntaxError)} Returns the parsed object on success or syntax error on failure
 */
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
