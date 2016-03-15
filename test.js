'use strict'

var test = require('tape')
var min = require('./')

test('sync', function (t) {
  t.plan(3)

  var run = min(fn)

  run(1, function (err, value) {
    if (err) return t.end(err)
    t.equal(value, 2)
  })

  function fn (value, callback) {
    t.equal(value, 1)
    t.equal(typeof callback, 'function')
    callback(null, 2)
  }
})

test('async', function (t) {
  t.plan(4)

  var run = min(fn, 50)

  var start = Date.now()
  run(1, function (err, value) {
    if (err) return t.end(err)
    t.equal(value, 2)
    t.ok(Math.abs(Date.now() - start - 50) < 10)
  })

  function fn (value, callback) {
    t.equal(value, 1)
    t.equal(typeof callback, 'function')
    setTimeout(function () {
      callback(null, 2)
    }, 20)
  }
})

test('async - long run', function (t) {
  t.plan(4)

  var run = min(fn, 50)

  var start = Date.now()
  run(1, function (err, value) {
    if (err) return t.end(err)
    t.equal(value, 2)
    t.ok(Math.abs(Date.now() - start - 100) < 10)
  })

  function fn (value, callback) {
    t.equal(value, 1)
    t.equal(typeof callback, 'function')
    setTimeout(function () {
      callback(null, 2)
    }, 100)
  }
})
