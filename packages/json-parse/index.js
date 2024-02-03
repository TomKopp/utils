/**
 * Asynchronous wrapper around JSON.parse to catch any errors
 *
 * @exports
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
 * @typedef {object} jsonParseSyncReturn
 * @property {object} data The parsed object
 * @property {SyntaxError} error The syntax error if parsing failed, otherwise undefined
 *
 * @exports
 * @param  {string} data The json string
 * @return {jsonParseSyncReturn} Returns an object with an error property if parsing failed, otherwise data is populated
 */
export const jsonParseSync = (data) => {
	let ret = {};

	try {
		ret.data = JSON.parse(data);
	} catch (error) {
		// @value {SyntaxError} error json parse throws SyntaxError
		ret.error = error;
	}

	return ret;
};
