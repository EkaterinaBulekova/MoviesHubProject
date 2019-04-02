import React from 'react';
import { mount } from 'enzyme';
import { Page } from './page';
import toJson from 'enzyme-to-json';

describe('<Page />', () => {
  it('should render as expect', () => {
    const component = mount(<Page name={'test-name'}/>);
    component.instance().handleMovieClick = jest.fn();
    component.instance().handleSearchClick = jest.fn();
    component.instance().handleSortByClick = jest.fn();
    component.update();

    const searchButton = component.find('button.search-button');

    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('div.header-name').text()).toBe('test-name');
    searchButton.simulate('click');
    expect(component.instance().handleSearchClick).toHaveBeenCalledTimes(1);

    component.unmount();
  });
});