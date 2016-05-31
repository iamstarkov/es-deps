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

// parsing :: String :: String -> Promise [String]
const parsing = file => m => Promise.resolve(m)
  .then(R.memoize(esDepsFromString))
  .catch(_err => {
    const err = _err;
    err.message += ` in ${file}`;
    return Promise.reject(err);
  });

// esDeps :: String -> Promise [String]
function esDeps(file) {
  return R.pipeP(toPromise,
    contract('file', String),
    readFile(R.__, 'utf8'),
    parsing(file)
  )(file);
}

export default esDeps;
