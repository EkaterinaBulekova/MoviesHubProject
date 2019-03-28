import getQueryUrl from './query-builder';

export default function getData(newState){
  return fetch(getQueryUrl(newState))
    .then(res => res.json())
}
