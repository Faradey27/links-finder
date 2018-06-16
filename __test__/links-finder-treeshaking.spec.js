import { findLinks, wrapLinks } from './../index';

describe('links-finder', () => {
  it('should return empty array for empty string', () => {
    expect(findLinks('')).toEqual([]);
  });

  it('should return empty array for empty string', () => {
    expect(findLinks('magic')).toEqual([]);
  });

  it('should return link coordinates', () => {
    expect(findLinks('magic http://blah.com another')).toEqual([{start: 6, end: 20}]);
  });

  it('should return links coordinates', () => {
    expect(findLinks('magic http://blah.com and https://x.com')).toEqual([{start: 6, end: 20}, {start: 26, end: 38}]);
  });

  it('should return links without http', () => {
    expect(findLinks('magic www.blah.com and some')).toEqual([{start: 6, end: 17}]);
  });

  it('should return link without http and without www', () => {
    expect(findLinks('magic blah.com')).toEqual([{start: 6, end: 13}]);
  });

  it('should wrap link with <a>', () => {
    expect(wrapLinks('magic http://blah.com', {
      onMatch: (link) => `<a href="${link}">${link}</a>`
    })).toBe('magic <a href=\"http://blah.com\">http://blah.com</a>')
  });

  it('should wrap links with <a>', () => {
    expect(wrapLinks('magic http://blah.com and https://x.com', {
      onMatch: (link) => `<a href="${link}">${link}</a>`
    })).toBe('magic <a href=\"http://blah.com\">http://blah.com</a> and <a href=\"https://x.com\">https://x.com</a>');
  });

  it('should remove links', () => {
    expect(wrapLinks('magic http://blah.com', {
      onMatch: () => ''
    })).toBe('magic ');
  });

  it('should do nothing if callback not passed', () => {
    expect(wrapLinks('magic http://blah.com')).toBe('magic http://blah.com');
  });
});
