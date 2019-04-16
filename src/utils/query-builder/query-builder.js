export default function getQueryUrl({search, searchBy, sortBy}){
  var resultUrl = 'http://react-cdp-api.herokuapp.com/movies?';
  const filter = 'filter=';
  if(searchBy === 'genres' && Array.isArray(search) && search.length > 1){
    search.map((value, index) => resultUrl += (index) ? ('&' + filter + value) : (filter + value));
  }else{
    resultUrl += 'search=' + search + '&' + 'searchBy=' + searchBy;
  }
  resultUrl += '&sortBy=' + sortBy + '&sortOrder=desc';
  console.log(resultUrl);
  return resultUrl;
}

