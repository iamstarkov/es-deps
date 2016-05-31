import test from 'ava';
import esDeps from './index';

const expected = [
  'out', './local',
  'q', 'fs', './local-cjs', 'globalImport',
];

test('should esDeps', async t => t.deepEqual(
  await esDeps('./fixtures/index.js'),
  expected
));

test('throw decent error on bad files', t => t.throws(
  esDeps('./fixtures/bad.js'),
  'Unexpected token (1:0) in ./fixtures/bad.js'
));

test('empty input', t => t.throws(esDeps(), TypeError));
test('invalid input', t => t.throws(esDeps(2), TypeError));
