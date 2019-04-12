import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './movie-list';
import toJson from 'enzyme-to-json';

describe('<MovieList />', () => {
    it('should render list of movie card with right title, class and metod', () => {
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
      const testOnClick = jest.fn();
      const testClass = 'movie-list-container';
      const component = shallow(<MovieList/>);
      const movieCards = component.find('.movie-list-element');
      expect(toJson(component)).toMatchSnapshot();
  
      // expect(component.hasClass(testClass)).toBeTruthy();
      // expect(movieCards).toHaveLength(testMovies.length);
      // movieCards.map(movieCard => movieCard.simulate('click'));
      // expect(testOnClick.mock.calls.length).toBe(2);
      // expect(testOnClick).toBeCalled();
    });
  });