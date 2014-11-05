# morph-object [![Build Status](https://travis-ci.org/sdepold/morph-object.svg?branch=master)](https://travis-ci.org/sdepold/morph-object)

Tiny helper lib that morphs objects.

## Installation

```
npm install morph-object
```

## Usage

```js
var morph = require('morph-object');

morph({ bucket: 'my-bucket', key: 'my-key' }, { key: 'prefix' });
```

This will result in:

```js
{
  bucket: 'my-bucket',
  prefix: 'my-key'
}
```

## License

MIT
