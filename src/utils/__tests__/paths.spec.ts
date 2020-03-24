import { isSubPath } from '../paths';
import { expect } from 'chai';

describe('isSubPath', () => {
  it('returns false on non matches', () => {
    expect(isSubPath('/a', '/b')).to.be.false;
  });

  it('returns true for exact matches', () => {
    expect(isSubPath('/a', '/a')).to.be.true;
  });

  it('returns false for partial directory names', () => {
    expect(isSubPath('/ab', '/a')).to.be.false;
  });

  it('returns true for subdirectories', () => {
    expect(isSubPath('/a/b', '/a')).to.be.true;
  });
});
