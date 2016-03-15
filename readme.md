# min-run [![Build Status](https://travis-ci.org/bendrucker/min-run.svg?branch=master)](https://travis-ci.org/bendrucker/min-run)

> Wrap an async function to run for at least n milliseconds


## Install

```
$ npm install --save min-run
```


## Usage

```js
var min = require('min-run')

var getUser = min(fetch, 100)

getUser(1, function (err, user) {
  //=> at least 100ms will elapse before calling  
})

function fetch (id, callback) {
  // ...
}
```

## API

#### `min(fn, [time])` -> `function`

##### fn

*Required*  
Type: `function`

A Node-style async function to wrap.

##### time

Type: `number`  
Default: `0`

The minimum run time for the `fn`.


## License

MIT © [Ben Drucker](http://bendrucker.me)
