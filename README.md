# morph-object [![Build Status](https://travis-ci.org/sdepold/morph-object.svg?branch=master)](https://travis-ci.org/sdepold/morph-object)

Tiny helper lib that morphs objects.

## Installation

```
npm install morph-object
```

## Usage

```js
var assert = require('assert');
var morph  = require('morph-object');

assert.deepEqual(
  morph({ bucket: 'my-bucket', key: 'my-key' }, { key: 'prefix' }),
  { bucket: 'my-bucket', prefix: 'my-key' }
);

assert.deepEqual(
  morph({ bucket: 'my-bucket', key: 'my-key' }, { bucket: 'folder', key: 'prefix' }),
  { folder: 'my-bucket', prefix: 'my-key' }
);

assert.deepEqual(
  morph.swapKey({ a: 1 }, 'a', 'b'),
  { b: 1 }
);
```

## License

MIT
