/**
 * Clamp value between min and max (inclusive)
 *
 * @param {number} val value to clamp
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @returns {number} min <= val <= max
 */
export const clampValue = (val, min, max) => Math.min(Math.max(min, val), max);
