const assert = require('chai').assert
const Btgen = require('../lib/btgen')

const engine = new Btgen([""]);

describe('btgen', function() {
  describe('class definition', function() {
    it('is a valid constructor', function() {
      assert.isObject(engine)
    })

    it('have a config object', function() {
      assert.exists(engine.config)
    })
  })

  describe('plugins array', function() {
    it('plugins exists', function() {
      assert.exists(engine.plugins)
    })
    it('plugins is an array', function() {
      assert.isArray(engine.plugins)
    })
    it('plugins is an empty array', function() {
      assert.isEmpty(engine.plugins)
    })
  })

  describe('print help', function() {
    it('have a printHelp method', function() {
      assert.exists(engine.printHelp) && assert.isFunction(engine.printHelp)
    })
  })
})