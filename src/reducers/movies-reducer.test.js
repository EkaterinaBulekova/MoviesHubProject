import reducer from './movies-reducer'
import * as types from '../actions/types'

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle SET_MOVIES', () => {
    expect(
      reducer(undefined, {
        type: types.SET_MOVIES_BY_FILTER,
        payload: [{id:1, title:'title'}, {id:2, title:'title2'}]
      })
    ).toEqual([{id:1, title:'title'}, {id:2, title:'title2'}])

    expect(
        reducer([{id:1, title:'title'}], {
          type: types.SET_MOVIES_BY_FILTER,
          payload: [{id:2, title:'title2'}, {id:3, title:'title3'}]
        })
      ).toEqual([{id:2, title:'title2'}, {id:3, title:'title3'}])

  })
})