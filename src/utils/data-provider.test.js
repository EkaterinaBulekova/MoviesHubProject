import getData from "./data-provider";


describe('getData', () => {
  it('getData will fetch with right url', () => {
    const url = "http://react-cdp-api.herokuapp.com/movies?search=search&searchBy=searchBy&sortBy=sortBy&sortOrder=desc";
    const testData={search: 'search', searchBy: 'searchBy', sortBy: 'sortBy'};
    global.fetch = jest.fn(() => new Promise(resolve => resolve({
        json: () => {
          return 'test';
        }})));
    expect.assertions(1);
    return getData(testData).then(result => expect(result).toEqual('test'));

  });

});