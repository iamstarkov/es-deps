/* eslint-disable no-underscore-dangle */
import esDepsFromString from 'es-deps-from-string';
import R from 'ramda';
import pify from 'pify';
import Promise from 'pinkie-promise';
import fs from 'fs';
import contract from 'neat-contract';

const memoizedEsDepsFromString = R.memoize(esDepsFromString);


// toPromise :: a -> Promise a
const toPromise = Promise.resolve.bind(Promise);


// readFile :: String -> Promise String
const readFile = R.flip(pify(fs.readFile, Promise));


// addFileNameToError :: String -> SyntaxError -> Promise.reject SyntaxError
const addFileNameToError = R.curry((file, _err) => {
  const err = _err;
  err.message += ` in ${file}`;
  return Promise.reject(err);
});


// parsing :: String -> String -> Promise [String]
const parsing = R.curry((file, content) => Promise.resolve(content)
  .then(memoizedEsDepsFromString)
  .catch(addFileNameToError(file))
);


// esDeps :: String -> Promise [String]
function esDeps(file) {
  return R.pipeP(toPromise,
    contract('file', String),
    readFile('utf8'),
    parsing(file)
  )(file);
}

export default esDeps;
