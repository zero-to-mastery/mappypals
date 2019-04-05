# empty-dir [![Build Status](https://secure.travis-ci.org/tkellen/node-empty-dir.png?branch=master)](http://travis-ci.org/tkellen/node-empty-dir)
> Check if a directory is empty.

[![NPM](https://nodei.co/npm/empty-dir.png)](https://nodei.co/npm/empty-dir/)

## Example
```js
const emptyDir = require('empty-dir');

emptyDir('./', function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory is empty:', result);
  }
});

var result = emptyDir.sync('./test/empty');
console.log('Directory is empty:', result);

```

## Release History

* 2014-05-08 - v0.1.0 - initial release
