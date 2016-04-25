# es-deps

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> ECMAScript 2015+/CommonJS module dependencies array

This package handles es2015+ modules, and 'cause CommonJS won't go away anytime soon, it also
takes care of non-dynamic `require`s.

## Install

    npm install --save es-deps

## Usage

```js
import esDeps from 'es-deps';

esDeps('./fixture.js')
  .then(result => console.log(result)); /* [
    'out', './local',
    'q', 'fs', './local-cjs', 'globalImport',
  ] */
```

## API

### esDeps(file)

    // esDeps :: String -> Promise Array[String]

Return a promise that resolves to dependencies array of String.

#### file

*Required*  
Type: `String`

Path to JavaScript file.

## Related

* [es-deps-from-string][es-deps-from-string] — ECMAScript 2015+/CommonJS module dependencies array from string
* [es-deps-resolved][es-deps-resolved] — ECMAScript 2015+/CommonJS module dependencies resolved array
* [es-dep-unit][es-dep-unit] — Constructor for ECMAScript 2015+/CommonJS dependency unit `Object { requested, from, resolved }`

[es-deps-from-string]: https://github.com/iamstarkov/es-deps-from-string
[es-deps-resolved]: https://github.com/iamstarkov/es-deps-resolved
[es-dep-unit]: https://github.com/iamstarkov/es-dep-unit

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/es-deps
[npm-image]: https://img.shields.io/npm/v/es-deps.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/es-deps
[travis-image]: https://img.shields.io/travis/iamstarkov/es-deps.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/es-deps
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/es-deps.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/es-deps
[depstat-image]: https://david-dm.org/iamstarkov/es-deps.svg?style=flat-square
