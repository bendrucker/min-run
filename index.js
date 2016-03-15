'use strict'

var toArray = require('to-array')
var ap = require('ap')

module.exports = minimum

function minimum (fn, time) {
  time = time || 0

  return function timed () {
    var args = toArray(arguments)
    var callback = args.pop()

    var start = Date.now()

    return fn.apply(null, args.concat(done))

    function done () {
      var delta = Date.now() - start
      schedule(ap(toArray(arguments), callback), time - delta)
    }
  }
}

function schedule (fn, delay) {
  if (delay <= 0) return fn()
  setTimeout(fn, delay)
}
