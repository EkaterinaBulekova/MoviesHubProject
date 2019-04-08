import React from 'react';
import { shallow } from 'enzyme';
import Movie from './movie';

describe('<Movie />', () => {
  it('should render movie card with right data, class and onClick method', () => {
    const testMovie = {
        title: "Test movie",
        poster_path: "http://test-path",
        release_date:"2019-01-05",
        genres: "test genre"
    };
    const component = shallow(<Movie movie={testMovie}/>);

    expect(component.find('.movie-title').text()).toBe(testMovie.title);
    expect(component.find('.movie-genres').text()).toBe(testMovie.genres.toString());
    expect(component.find('.movie-release-date').text()).toBe((new Date(testMovie.release_date)).getFullYear().toString());
  });

});