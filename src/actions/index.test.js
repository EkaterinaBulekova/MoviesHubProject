import * as actions from '.'
import * as types from './types'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

describe('setSearch', () => {
  it('should create an action to set a search', () => {
    const search = 'test'
    const expectedAction = {
      type: types.SET_SEARCH,
      payload: search,
    }
    expect(actions.setSearch(search)).toEqual(expectedAction)
  })
})

describe('setSearchBy', () => {
    it('should create an action to set a searchBy', () => {
      const searchBy = 'test'
      const expectedAction = {
        type: types.SET_SEARCH_BY,
        payload: searchBy,
      }
      expect(actions.setSearchBy(searchBy)).toEqual(expectedAction)
    })
  })

  describe('setSortBy', () => {
    it('should create an action to set a sortBy', () => {
      const sortBy = 'test'
      const expectedAction = {
        type: types.SET_SORT_BY,
        payload: sortBy,
      }
      expect(actions.setSortBy(sortBy)).toEqual(expectedAction)
    })
  })

  describe('setMovies', () => {
    it('should create an action to set a movies', () => {
      const testMovies = [
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
      ];
      const expectedAction = {
        type: types.SET_MOVIES_BY_FILTER,
        payload: testMovies,
      }
      expect(actions.setMovies(testMovies)).toEqual(expectedAction)
    })
  })

  describe('setMovie', () => {
    it('should create an action to set a movie', () => {
      const testMovie = {
            id: 1,
            title: "Test movie1",
            poster_path: "http://test-path",
            release_date:"2019-01-05",
            genres: "test genre1"
        };
      const expectedAction = {
        type: types.SET_MOVIE,
        payload: testMovie,
      }
      expect(actions.setMovie(testMovie)).toEqual(expectedAction)
    })
  })


  jest.mock('../utils/data-provider/data-provider.js');
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  
  describe('async fetchFilteredMovies', () => {

    it('should create an async action to set a movies', () => { 
      const expectedActions = [
        { type: types.SET_MOVIES_BY_FILTER, payload: [
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
          ] }
      ]
      const store = mockStore({ movies: [] })
  
      return store.dispatch(actions.fetchFilteredMovies({search:'search', searchBy:'searchBy', sortBy:'sortBy'})).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
 })

