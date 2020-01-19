/**
 * Converts an attribute string value to boolean
 *
 * @exports
 * @param {string} val attribute value
 * @returns {boolean} boolean interpretation of attribute
 */
export const attr2bool = (val) => { return val !== null; }

/**
 * Converts a boolean value to a boolean attribute value
 *
 * @exports
 * @param {boolean} val a boolean
 * @returns {(string | null)} empty strign if attribute should exist, else null
 */
export const bool2attr = (val) => { return val ? '' : null; }
