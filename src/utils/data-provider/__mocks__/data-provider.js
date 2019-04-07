const value = {"data":
[
  {
    id:447365,
    title:"Guardians of the Galaxy Vol. 3",
    vote_average:0,
    release_date:"2020-05-01",
    poster_path:"https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    overview:"The third film based on Marvel's Guardians of the Galaxy.",
    genres:["Action","Adventure","Science Fiction"],
    runtime:null
  },
  {
    id:424785,
    title:"Transformers 7",
    vote_average:0,
    release_date:"2019-06-26",
    poster_path:"https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
    overview:"Plot unknown.","budget":0,"revenue":0,
    genres:["Science Fiction","Action","Adventure"],
    runtime:null
  }
]}
  const testGetData = jest.fn().mockImplementation(() => Promise.resolve(value)); 