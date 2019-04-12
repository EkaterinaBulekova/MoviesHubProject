import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';
import toJson from 'enzyme-to-json';

describe('<Search />', () => {
  it('should render as expect', () => {
    const testOnClick = jest.fn(); 
    const component = shallow(<Search/>);
//    const filterButtons = component.find('button.search-filter-button');
    // const form = component.find('form');
    // component.instance().onSearchByClick = jest.fn();
    // component.update();

    expect(toJson(component)).toMatchSnapshot();

    // expect(component.find('div.search-field-title').text()).toBe('FIND YOUR MOVIE');
    // const event = {
    //   target:[
    //     {value: 'test'}
    //   ]
    // }

    // form.simulate('submit', event);
    // expect(testOnClick).toBeCalled();
    // expect(testOnClick).toBeCalledWith({search:'test', searchBy: 'title'});

    // expect(component.find('div.search-filter-title').text()).toBe('SEARCH BY');
    // expect(filterButtons).toHaveLength(2);
    // filterButtons.at('1').simulate('click');
    // expect(component.instance().onSearchByClick).toBeCalled();
    // expect(component.instance().onSearchByClick).toBeCalledWith('genres');

    component.unmount();
  });
});