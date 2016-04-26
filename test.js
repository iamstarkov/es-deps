import test from 'ava';
import esDeps from './index';

const expected = [
  'out', './local',
  'q', 'fs', './local-cjs', 'globalImport',
];


test('should esDeps', async t => t.deepEqual(
  await esDeps('./fixture.js'),
  expected
));

test('empty input', t => t.throws(esDeps(), TypeError));
test('invalid input', t => t.throws(esDeps(2), TypeError));
