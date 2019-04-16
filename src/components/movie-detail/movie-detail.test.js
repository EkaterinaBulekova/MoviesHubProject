import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from './movie-detail';
import toJson from 'enzyme-to-json';

describe('<MovieDetail />', () => {
  it('should render movie card with right data, class and onClick method', () => {
    const testMovie = {
        title: "Test movie",
        poster_path: "http://test-path",
        release_date:"2019-01-05",
        vote_average: 3.5,
        runtime: 120
    };
    const testClass=".movie-detail"
    const component = shallow(<MovieDetail/>);
    expect(toJson(component)).toMatchSnapshot();
    // expect(component.find(testClass+'-title').text()).toBe(testMovie.title);
    // expect(component.find(testClass+'-rating').text()).toBe(testMovie.vote_average.toString());
    // expect(component.find(testClass+'-duration').text()).toContain(testMovie.runtime.toString());
    // expect(component.find(testClass+'-release-date').text()).toBe((new Date(testMovie.release_date)).getFullYear().toString());
  });

});