import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {App} from './App';
import { SearchPage } from '../search-page/search-page';

jest.mock('../../utils/data-provider/data-provider.js');

describe('<App />', () => {
  it('should render as expect', () => {
    const testName = 'test'; 
    const component = shallow(<App name={testName}/>);
    expect(component.hasClass('App')).toBeTruthy();
    expect(component.children(SearchPage).length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});;
