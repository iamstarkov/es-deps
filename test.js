import test from 'ava';
import esDeps from './index';
import { join } from 'path';

test('should esDeps', async t => {
  const actual = await esDeps(join(__dirname, './fixtures/index.js'));
  const expected = [
    'out', './local',
    'q', 'fs', './local-cjs', 'globalImport',
  ];
  t.deepEqual(actual, expected);
});

test('throw decent error on bad files', t => {
  t.throws(
    esDeps(join(__dirname, './fixtures/bad.js')),
    `Unexpected token (1:0) in ${join(__dirname, './fixtures/bad.js')}`
  );
});

test('empty input', t => t.throws(esDeps(), TypeError));
test('invalid input', t => t.throws(esDeps(2), TypeError));
