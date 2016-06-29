> Benchmarked comparative selection algorithm plugin for d-pac platform

 [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

See [d-pac.plugin specifications for more information](http://d-pac.github.io/d-pac.docs/developer/plugin%20specification.html)

## Description

This algorithm selects two elements out of an array of representations

## Install

```sh
$ npm install --save benchmarked-comparative-selection
```

## Usage

```js
var bcs = require('benchmarked-comparative-selection');
const selected = bcs.select( {
  representations: representations,
  comparisons: comparisons,
  assessment: assessment,
  assessor: assessorId
} );
```

## Development

### Testing

```sh
$ npm test
```

### Linting

```sh
$ npm run lint
```

## License

GPL v3 © [d-pac](http://www.d-pac.be)

[npm-url]: https://npmjs.org/package/benchmarked-comparative-selection
[npm-image]: https://badge.fury.io/js/benchmarked-comparative-selection.svg
[travis-url]: https://travis-ci.org/d-pac/benchmarked-comparative-selection
[travis-image]: https://travis-ci.org/d-pac/benchmarked-comparative-selection.svg?branch=master
[daviddm-url]: https://david-dm.org/d-pac/benchmarked-comparative-selection.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/d-pac/benchmarked-comparative-selection
