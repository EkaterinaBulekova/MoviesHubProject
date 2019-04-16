import reducer from './filter-reducer'
import * as types from '../actions/types'

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            searchBy: 'title',
            search: '',
            sortBy: 'release_date'
        }
    )
  })

  it('should handle SET_SEARCH', () => {
    expect(
      reducer(undefined, {
        type: types.SET_SEARCH,
        payload: 'search'
      })
    ).toEqual(
      {
        searchBy: 'title',
        search: 'search',
        sortBy: 'release_date'
      }
    )
  })

  it('should handle SET_SEARCH_BY', () => {
    expect(
      reducer(undefined, {
        type: types.SET_SEARCH_BY,
        payload: 'searchBy'
      })
    ).toEqual(
      {
        searchBy: 'searchBy',
        search: '',
        sortBy: 'release_date'
      }
    )
  })

  it('should handle SET_SORT_BY', () => {
    expect(
      reducer(undefined, {
        type: types.SET_SORT_BY,
        payload: 'sortBy'
      })
    ).toEqual(
      {
        searchBy: 'title',
        search: '',
        sortBy: 'sortBy'
      }
    )
  })
})