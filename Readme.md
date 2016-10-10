
# find

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Lookup an element in a list using a predicate

## Installation

    $ npm install @f/find

## Usage

```js
var find = require('@f/find')


find(users, user => user.username === 'micro-js')
```

## API

### find(arr, fn, fromIndex)

- `arr` - The array to search
- `fn` - The predicate to use to search the array (accepts an item in the list and returns `true/false`).
- `fromIndex` - Optional, starting index. Defaults to zero.

**Returns:** Either the first element within `arr` for which `fn` returns true, or `null` if none is found.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/find.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/find
[git-image]: https://img.shields.io/github/tag/micro-js/find.svg?style=flat-square
[git-url]: https://github.com/micro-js/find
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/find.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/find
