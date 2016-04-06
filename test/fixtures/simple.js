// es2015+ modules
import out from 'out';
import local from './local';

console.log('modules');

// CommonJS modules
var qName = require('q');
var fsName = require('fs');
var localName = require('./local-cjs');
var n = 1;

require('yo' + 1); // dynamic requires wont work

require('globalImport');

console.log('cjs');
