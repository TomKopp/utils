/**
 * Converts a number into its nearest hex representation
 *
 * @param  {number} number The number between 0 and 255
 * @return {string} Hexadecimal representation of the number
 */
export const number2hex = (number) => Math.round(Math.abs(Number(number))).toString(16);
