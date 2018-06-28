/**
 * Clamp value between min and max (inclusive)
 * @param {Number} val value to clamp
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @returns {Number} min <= val <= max
 */
export const clampValue = (val, min, max) => Math.min(Math.max(min, val), max);
