import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './custom-input';

describe('<CustomInput />', () => {
  it('should render input with right title and class', () => {
    const testTitle = "Test title";
    const testClass = "test-class";
    const component = shallow(<CustomInput className={testClass} title={testTitle} />);
    const input = component.find('input');
    expect(component.hasClass(testClass)).toBeTruthy();
    expect(input.hasClass(testClass+'-input')).toBeTruthy();
    expect(component.find('.'+testClass+'-title').text()).toBe(testTitle);
  });
});