import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Promise } from 'q';
import {MoviePage} from './movie-page';

describe('<MoviePage />', () => {
  it('should render as expect', () => {
    const value = {data:
      [
      {id:1, title:'movie1', genres:'testGenre'},
      {id:2, title:'movie2', genres:'testGenre'},
      {id:3, title:'movie3', genres:'testGenre'}
    ]}
    const testOnClick = jest.fn(); 

    const testGetData = jest.fn().mockImplementation(() => Promise.resolve(value)); 
    const component = shallow(<MoviePage movie={value.data[0]} getMoviesByGenre={testGetData} initMovie={testOnClick}/>);
    component.find('.search-button').simulate(
      'click', 
      {preventDefault() {}}
    )
    expect(testGetData.mock.calls.length).toBe(1)
    expect(testOnClick.mock.calls.length).toBe(1);
    // const testMovieClick = jest.fn();
    // component.update();

    expect(toJson(component)).toMatchSnapshot();

    // expect(component.find('.films-by-genre-text').text()).toBe("Films by "+value.data[0].genres+" genre");

    // component.find('button').simulate('click');
    // expect(testOnClick).toHaveBeenCalled();

    // return component.instance().getMoviesByGenre({genres:'genre'})
    // .then(()=>expect(component.state().movies).toHaveLength(3))
    // .then(()=>component.unmount());
  });
});