import React from 'react';
import { shallow } from 'enzyme';
import FilmsByGenre from './films-by-genre';


describe('<FilmsByGenre />', () => {
  it('should render button with right name, class and onClick method', () => {
    const testGenre = "Test genre";
    const testClass = "films-by-genre";
    const textTestClass = "films-by-genre-text";
    const component = shallow(<FilmsByGenre genres={testGenre} />);

    expect(component.hasClass(testClass)).toBeTruthy();
    expect(component.find('.'+textTestClass).text()).toBe("Films by " + testGenre + " genre");
  });
});