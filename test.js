import test from 'ava';
import esDeps from './index';

test('should esDeps', async t => {
  const actual = await esDeps('./fixtures/index.js');
  const expected = [
    'out', './local',
    'q', 'fs', './local-cjs', 'globalImport',
  ];
  t.deepEqual(actual, expected);
});

test('throw decent error on bad files', t => {
  t.throws(
    esDeps('./fixtures/bad.js'),
    'Unexpected token (1:0) in ./fixtures/bad.js'
  );
});

test('empty input', t => t.throws(esDeps(), TypeError));
test('invalid input', t => t.throws(esDeps(2), TypeError));
