import { isSubPath } from '../paths';
import { expect } from 'chai';

describe('isSubPath', function () {
  it('returns false on non matches', function () {
    expect(isSubPath('/a', '/b')).to.be.false;
  });

  it('returns true for exact matches', function () {
    expect(isSubPath('/a', '/a')).to.be.true;
  });

  it('returns false for partial directory names', function () {
    expect(isSubPath('/ab', '/a')).to.be.false;
  });

  it('returns true for subdirectories', function () {
    expect(isSubPath('/a/b', '/a')).to.be.true;
  });
});
