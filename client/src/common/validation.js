/**
 * Indicates whether a specified string is null, empty, or consists only of
 * white-space characters.
 *
 * @param {string} value The string to test.
 * @returns true if the value parameter is null or Empty, or if value consists
 * exclusively of white-space characters.
 */
export function isNullOrWhitespace(value) {
  return !value || value.replace(/\s/g, "").length == 0;
}
