/**
 * Converts an unsigned byte sized integer into its hex representation
 *
 * @param  {number} number The number between 0 and 255
 * @return {string} Hexadecimal representation of the number
 */
export const uByte2hex = (number) => {
	const val = Math.abs(Number(number));
	const uByte = 256;
	const baseHex = 16;

	return val < uByte ? val.toString(baseHex) : 0;
};
