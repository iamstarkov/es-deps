import test from 'ava';
import esDeps from './index';

test('should esDeps', (t) =>
  t.is(esDeps('unicorns'), 'unicorns'));

test('should throw on empty input', t => t.throws(() => { esDeps(); }, TypeError));
test('should throw on invalid input', t => t.throws(() => { esDeps(2); }, TypeError));
