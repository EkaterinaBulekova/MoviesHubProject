import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from './footer';
import toJson from 'enzyme-to-json';

describe('<Footer />', () => {
  it('should render footer', () => {
    const component = shallow(<AppFooter/>);
    expect(toJson(component)).toMatchSnapshot();
  });

});