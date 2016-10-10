/**
 * Expose find
 */

module.exports = find

/**
 * find
 */

function find (arr, fn, fromIndex) {
  fromIndex = fromIndex || 0

  for (var i = fromIndex, len = arr.length; i < len; ++i) {
    if (fn(arr[i])) return arr[i]
  }

  return null
}
