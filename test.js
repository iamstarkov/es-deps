import test from 'ava';
import esDeps from './index';

const expected = [
  'out', './local',
  'q', 'fs', './local-cjs', 'globalImport',
];

test('should esDeps', t => esDeps('./fixture.js')
  .then(result => t.same(result, expected)));

test('should reject on empty input', t => t.throws(esDeps(), TypeError));
test('should reject on invalid input', t => t.throws(esDeps(2), TypeError));
