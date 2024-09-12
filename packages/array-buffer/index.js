/**
 * Converts an ArrayBuffer to a Base64 encoded string.
 *
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @return {string} The Base64 encoded string.
 */
export const arrayBufferToBase64 = (buffer) => btoa(Array.from(new Uint8Array(buffer), (x) => String.fromCodePoint(x)).join(''));

/**
 * Converts a Base64 encoded string to an ArrayBuffer.
 *
 * @param {string} base64 - The Base64 encoded string to convert.
 * @return {ArrayBuffer} The resulting ArrayBuffer.
 */
export const base64ToArrayBuffer = (base64) => Uint8Array.from(atob(base64), (m) => m.codePointAt(0)).buffer;
