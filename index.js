import esDepsFromString from 'es-deps-from-string';
import R from 'ramda';
import pify from 'pify';
import Promise from 'pinkie-promise';
import _fs from 'fs';

const fs = pify(_fs, Promise);

const resolve = Promise.resolve.bind(Promise);
const reject = Promise.reject.bind(Promise);

// contract :: String -> Constructor -> a -> a | Promise.reject TypeError
const contract = R.curry((name, ctor, param) => R.unless(
  R.is(ctor),
  () => reject(
    new TypeError(`\`${name}\` should be \`${R.type(ctor())}\`, but got \`${R.type(param)}\``)
  )
)(param));

// esDeps :: String -> Promise Array[String]
const esDeps = R.binary(R.pipeP(resolve,
  contract('file', String),
  file => fs.readFile(file, 'utf8'),
  esDepsFromString
));

export default esDeps;
