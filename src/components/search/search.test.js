import React from 'react';
import { mount } from 'enzyme';
import Search from './search';
import toJson from 'enzyme-to-json';

describe('<Search />', () => {
  it('should render as expect', () => {
    const testOnClick = jest.fn(); 
    const component = mount(<Search onSearchClick={testOnClick}/>);
    const searchButton = component.find('button.search-button');
    const filterButtons = component.find('button.search-filter-button');
    const input = component.find('input');
    component.instance().setState = jest.fn();
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    expect(component.find('div.search-field-title').text()).toBe('FIND YOUR MOVIE');
    
    expect(input.hasClass('search-field-input'));
    input.simulate('keyUp',{key:'Enter'});
    expect(testOnClick.mock.calls.length).toBe(1);
    expect(testOnClick).toBeCalled();
    input.simulate('change',{value:'value'});
    expect(component.instance().setState).toBeCalled();
    //expect(component.instance().setState).toBeCalledWith({search:'value'});

    searchButton.simulate('click');
    expect(testOnClick.mock.calls.length).toBe(2);
    expect(testOnClick).toBeCalled();

    expect(component.find('div.search-filter-title').text()).toBe('SEARCH BY');
    expect(filterButtons).toHaveLength(2);
    filterButtons.at('1').simulate('click');
    expect(component.instance().setState).toBeCalled();
    expect(component.instance().setState).toBeCalledWith({searchBy:'genres'});
    //expect(component.state().searchBy).toBe('genres');
    filterButtons.at('0').simulate('click');

    component.unmount();
  });
});