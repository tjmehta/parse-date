var describe = global.describe
var it = global.it

var expect = require('code').expect

var parse = require('../index.js')

describe('date-parse', function () {
  it('should parse a valid date', function () {
    var d
    d = new Date()
    expect(parse(d)).to.be.an.instanceOf(Date)
    expect(parse(d).toString()).to.equal(d.toString())
    d = Date.now()
    expect(parse(d)).to.be.an.instanceOf(Date)
    expect(parse(d).toString()).to.equal(new Date(d).toString())
    d = new Date().toString()
    expect(parse(d)).to.be.an.instanceOf(Date)
    expect(parse(d).toString()).to.equal(d.toString())
  })

  it('should throw for null date', function () {
    expect(function () {
      parse(null)
    }).to.throw(/Invalid date:.*null/)
    expect(function () {
      parse(undefined)
    }).to.throw(/Invalid date:.*undefined/)
  })

  it('should throw for invalid date', function () {
    expect(function () {
      parse('foobar')
    }).to.throw(/Invalid date: foobar/)
  })
})