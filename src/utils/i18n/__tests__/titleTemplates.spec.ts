import { expect } from 'chai';
import { TFunction } from 'i18next';
import {
  defaultTitleTemplate,
  getSectionTitleTemplate,
} from '../titleTemplates';

const siteName = 'The Mocked Site Name';
const tMocked: TFunction = (key: string): string =>
  key === 'global.siteName' ? siteName : key;

describe('titleTemplates', function () {
  describe('defaultTitleTemplate', function () {
    it('returns a string containing the site name', function () {
      expect(defaultTitleTemplate(tMocked))
        .to.be.a('string')
        .and.contains(siteName);
    });
  });
  describe('getSectionTitleTemplate', function () {
    it('returns a function', function () {
      expect(getSectionTitleTemplate(tMocked)).to.be.a('function');
    });

    it('returns a function that returns a string containing the given section title', function () {
      const sectionTitle = 'test.section.name';
      expect(getSectionTitleTemplate(tMocked)(sectionTitle))
        .to.be.a('string')
        .and.contain(sectionTitle);
    });

    it('returns a function that returns a string containing the site name', function () {
      expect(getSectionTitleTemplate(tMocked)('')).to.contain(siteName);
    });
  });
});
