import getQueryUrl from '../query-builder/query-builder';

export default function getData(filter){
  return fetch(getQueryUrl(filter))
    .then(res => res.json())
}
