import React from 'react';
import { mount } from 'enzyme';
import { MoviesContainer } from './movies-container';
import toJson from 'enzyme-to-json';

describe('<MoviesContainer />', () => {
  it('should render list of movie card with right title, class and metod', () => {
    const getTestData = jest.fn(() => Promise.resolve({data:[
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
      }]}));
    const testFilter = {search: 'value', searchBy: 'title', sortBy: 'rating'};

    const testOnClick = jest.fn();
    const testOnUpdate = jest.fn();
    const component = mount(<MoviesContainer filter={testFilter} onClick={testOnClick} getData={getTestData} onUpdate={testOnUpdate}/>);

    expect(toJson(component)).toMatchSnapshot();
    expect(getTestData).toHaveBeenCalledTimes(1);
    expect(getTestData.mock.calls.length).toBe(1);
    expect(getTestData).toBeCalled();
    expect(getTestData).toBeCalledWith(testFilter);
    component.update();
    expect(component.s)

  })

});