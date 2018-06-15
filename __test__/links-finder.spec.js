import linksFinder from './../index';

describe('links-finder', () => {
  it('should return empty array for empty string', () => {
    expect(linksFinder.findLinks('')).toEqual([]);
  });
});
