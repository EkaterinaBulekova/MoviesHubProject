import reducer from './movie-reducer'
import * as types from '../actions/types'

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  it('should handle SET_MOVIE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_MOVIE,
        payload: {id:1, title:'title'}
      })
    ).toEqual({id:1, title:'title'})

    expect(
        reducer({id:1, title:'title'}, {
          type: types.SET_MOVIE,
          payload: {id:2, title:'title2'}
        })
      ).toEqual({id:2, title:'title2'})

  })
})