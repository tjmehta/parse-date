var assert = require('assert')

var exists = require('101/exists')

module.exports = parse

/**
 * parse date from literal
 * @param  {*} val
 * @throws {TypeError} If `val` is not a valid date
 * @return {Date}     [description]
 */
function parse (val) {
  assert(exists(val), 'Invalid date: ' + val)
  var date = new Date(val)
  assert(!isNaN(date.valueOf()), 'Invalid date: ' + val)
  return date
}