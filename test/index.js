/**
 * Imports
 */

var find = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var res = find([{b: 2}, {a: 1, c: 3}], function (item) { return item.a === 1})
  t.equal(res.c, 3)

  var res = find([{b: 2}, {a: 1, c: 3}], function (item) { return item.b === 1})
  t.equal(res, null)

  t.end()
})
