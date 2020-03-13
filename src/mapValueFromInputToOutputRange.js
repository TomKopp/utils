/**
 * Mapps a value in an input range onto an output ragne
 *
 * @exports
 * @param {number} val value to map
 * @param {number} inputMin input range minimum
 * @param {number} inputMax input range maximum
 * @param {number} outputMin output range minimum
 * @param {number} outputMax output range maximum
 * @return {number} mapped value
 */
export const mapValueFromInputToOutputRange = (val, inputMin, inputMax, outputMin, outputMax) => (outputMax - outputMin) * (val - inputMin) / (inputMax - inputMin) + outputMin;
