export default function getQueryUrl(data){
  let resultUrl = "http://react-cdp-api.herokuapp.com/movies?";
  let filter = "filter=";
  if(data.searchBy === 'genres' && Array.isArray(data.search) && data.search.length > 1){
    data.search.map((value, index) => resultUrl += (index) ? ('&' + filter + value) : (filter + value));
  }else{
    let search = "search=" + data.search;
    let searchBy = "searchBy=" + data.searchBy;
    resultUrl += search + '&' + searchBy;
  }
  let sortBy = "sortBy=" + data.sortBy;
  let sortOrder = 'sortOrder=desc';
  resultUrl += '&' + sortBy + '&' + sortOrder;
  return resultUrl;
}

