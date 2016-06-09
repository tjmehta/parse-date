var exists = require('101/exists')

module.exports = parse

/**
 * parse date from literal
 * @param  {*} val
 * @throws {TypeError} If `val` is not a valid date
 * @return {Date}     [description]
 */
function parse (val) {
  if (!exists(val)) { return null }
  var date = new Date(val)
  return isNaN(date.valueOf()) ? null : date
}