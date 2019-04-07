import React from 'react';
import { shallow } from 'enzyme';
import { AppFooter } from './footer';


describe('<Footer />', () => {
  it('should render movie card with right data, class and onClick method', () => {
    const testName='TestName';
    const testClass="app-footer"
    const component = shallow(<AppFooter name={testName}/>);
    
    expect(component.hasClass(testClass)).toBeTruthy();
    expect(component.find('.'+testClass+'-name').text()).toBe(testName);
  });

});