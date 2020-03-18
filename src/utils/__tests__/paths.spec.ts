import { isSubPath } from '../paths';

describe('isSubPath', () => {
  it('returns false on non matches', () => {
    expect(isSubPath('/a', '/b')).toBe(false);
  });

  it('returns true for exact matches', () => {
    expect(isSubPath('/a', '/a')).toBe(true);
  });

  it('returns false for partial directory names', () => {
    expect(isSubPath('/ab', '/a')).toBe(false);
  });

  it('returns true for subdirectories', () => {
    expect(isSubPath('/a/b', '/a')).toBe(true);
  });
});
