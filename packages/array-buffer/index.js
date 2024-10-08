/**
 * Converts an ArrayBuffer to a binary string that can be used with btoa.
 *
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @return {string} The resulting binary string.
 */
export const arrayBufferToBinaryString = (buffer) => Array.from(new Uint8Array(buffer), (x) => String.fromCodePoint(x)).join('');

/**
 * Converts a binary string to an ArrayBuffer that can be used with atob.
 *
 * @param {string} binaryString - The binary string to convert.
 * @return {ArrayBuffer} The resulting ArrayBuffer.
 */
export const binaryStringToArrayBuffer = (binaryString) => Uint8Array.from(binaryString, (m) => m.codePointAt(0)).buffer;

/**
 * Converts an ArrayBuffer to a Base64 encoded string.
 *
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @return {string} The Base64 encoded string.
 */
export const arrayBufferToBase64 = (buffer) => btoa(arrayBufferToBinaryString(buffer));

/**
 * Converts a Base64 encoded string to an ArrayBuffer.
 *
 * @param {string} base64 - The Base64 encoded string to convert.
 * @return {ArrayBuffer} The resulting ArrayBuffer.
 */
export const base64ToArrayBuffer = (base64) => binaryStringToArrayBuffer(atob(base64));
