import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchPage } from './search-page';
import { Promise } from 'q';

describe('<SearchPage />', () => {
  it('should render as expect', () => {
    const value = {"data":
    [
      {
        id:447365,
        title:"Guardians of the Galaxy Vol. 3",
        vote_average:0,
        release_date:"2020-05-01",
        poster_path:"https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        overview:"The third film based on Marvel's Guardians of the Galaxy.",
        genres:["Action","Adventure","Science Fiction"],
        runtime:null
      },
      {
        id:424785,
        title:"Transformers 7",
        vote_average:0,
        release_date:"2019-06-26",
        poster_path:"https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
        overview:"Plot unknown.","budget":0,"revenue":0,
        genres:["Science Fiction","Action","Adventure"],
        runtime:null
      }
    ]}
    const testOnClick = jest.fn(); 
    const testGetData = jest.fn().mockImplementation(() => Promise.resolve(value)); 
    const testName = 'test'; 
    const component = mount(<SearchPage name={testName} getData={testGetData} onReturn={testOnClick}/>);
    const form = component.find('form');
    component.instance().onSearchClick = jest.fn();
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    expect(component.find('div.search-field-title').text()).toBe('FIND YOUR MOVIE');
    const event = {
      target:[
        {value: 'test'}
      ]
    }

    form.simulate('submit', event);
    expect(testGetData).toHaveBeenCalled();
    return component.instance().performSearch()
            .then(()=>expect(component.state().movies).toHaveLength(2))
            .then(()=>component.unmount());
  });
});