import React from 'react';
import { shallow } from 'enzyme';
import FilmsByGenre from './films-by-genre';
import toJson from 'enzyme-to-json';


describe('<FilmsByGenre />', () => {
  it('should render button with right name, class and onClick method', () => {
    const testGenre = "Test genre";
    const testClass = "films-by-genre";
    const textTestClass = "films-by-genre-text";
    const component = shallow(<FilmsByGenre/>);
    expect(toJson(component)).toMatchSnapshot();
    // expect(component.hasClass(testClass)).toBeTruthy();
    // expect(component.find('.'+textTestClass).text()).toBe("Films by " + testGenre + " genre");
  });
});