const value = {"data":
[
  {
      id: 1,
      title: "Test movie1",
      poster_path: "http://test-path",
      release_date:"2019-01-05",
      genres: "test genre1"
  },
  {
      id: 2,
      title: "Test movie2",
      poster_path: "http://test-path",
      release_date:"2019-01-05",
      genres: "test genre2"
  }
]}
  const getData = jest.fn().mockImplementation(() => Promise.resolve(value)); 
  export default getData