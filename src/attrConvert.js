/**
 * Converts an attribute string value to boolean
 *
 * @exports
 * @param {string} val attribute value
 * @return {boolean} boolean interpretation of attribute
 */
export const attr2bool = (val) => val !== null;

/**
 * Converts a boolean value to a boolean attribute value
 *
 * @exports
 * @param {boolean} val a boolean
 * @return {(string | null)} empty strign if attribute should exist, else null
 */
export const bool2attr = (val) => (val ? '' : null);
