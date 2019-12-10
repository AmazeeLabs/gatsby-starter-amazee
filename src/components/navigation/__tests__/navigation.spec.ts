import { isSubPathOf } from '../navigation';

describe('isSubPathOf', () => {
  it('returns false on non matches', () => {
    expect(isSubPathOf('/a', '/b')).toBe(false);
  });

  it('returns true for exact matches', () => {
    expect(isSubPathOf('/a', '/a')).toBe(true);
  });

  it('returns false for partial directory names', () => {
    expect(isSubPathOf('/ab', '/a')).toBe(false);
  });

  it('returns true for subdirectories', () => {
    expect(isSubPathOf('/a/b', '/a')).toBe(true);
  });
});
