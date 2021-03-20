/**
 * Maps a value in an input range to an output range
 *
 * @exports
 * @param {number} val value to map
 * @param {number} inputMin input range minimum
 * @param {number} inputMax input range maximum
 * @param {number} outputMin output range minimum
 * @param {number} outputMax output range maximum
 * @return {number} mapped value
 */
export const mapValueRange = (val, inputMin, inputMax, outputMin, outputMax) => (outputMax - outputMin) * (val - inputMin) / (inputMax - inputMin) + outputMin;
