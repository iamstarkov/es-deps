/* eslint-disable no-underscore-dangle */
import esDepsFromString from 'es-deps-from-string';
import R from 'ramda';
import pify from 'pify';
import Promise from 'pinkie-promise';
import _fs from 'fs';
import contract from 'neat-contract';

// readFile :: String -> Promise
const readFile = R.curryN(2, pify(_fs.readFile, Promise));

// toPromise :: a -> Promise a
const toPromise = Promise.resolve.bind(Promise);

// esDeps :: String -> Promise Array[String]
const esDeps = R.unary(R.pipeP(toPromise,
  contract('file', String),
  readFile(R.__, 'utf8'),
  R.memoize(esDepsFromString)
));

export default esDeps;
