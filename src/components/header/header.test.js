import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Header />', () => {
  it('should render header', () => {
    const component = shallow(<Header/>);
    expect(toJson(component)).toMatchSnapshot();
  });

});