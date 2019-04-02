import getQueryUrl from './query-builder';

describe('getQueryUrl', () => {
  let url = "http://react-cdp-api.herokuapp.com/movies?";
  it('getQueryUrl return url with single title or genre and right order', () => {
    const testData={search: 'search', searchBy: 'searchBy', sortBy: 'sortBy'};
    const res = getQueryUrl(testData);

    expect(res).toBe(url+'search=search&searchBy=searchBy&sortBy=sortBy&sortOrder=desc');
  });

  it('getQueryUrl return url with filters and right order', () => {
    const testData={search: ['genre1','genre2'], searchBy: 'genres', sortBy: 'sortBy'};
    const res = getQueryUrl(testData);

    expect(res).toBe(url+'filter=genre1&filter=genre2&sortBy=sortBy&sortOrder=desc');
  });

});
