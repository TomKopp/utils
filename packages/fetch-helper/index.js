/**
 * Extracts the content from the body of a Response object either
 * as json (if Content-Type=application/json),
 * as text (if Content-Type=text/*),
 * or as a Blob if all else fails.
 *
 * @param {Response} response The response object either from the browser api or the compatible node-fetch module
 * @return {Promise<string|object|Blob>} The content of the response
 */
export const responseExtractContent = (response) => {
	const contentType = response.headers.get('Content-Type');
	if (!contentType) {
		return response.blob();
	}
	if (contentType.includes('application/json')) {
		return response.json();
	}
	if (contentType.includes('text/')) {
		return response.text();
	}
	return response.blob();
};
