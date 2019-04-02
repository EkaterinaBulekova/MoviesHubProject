import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './custom-input';

describe('<CustomInput />', () => {
  it('should render input with right title, class and onChange and onEnter methods', () => {
    const eventOnChange = {
      target: { value: 'value' }
    };
    const eventOnEnter = {
      key: 'Enter'
    };
    const testTitle = "Test title";
    const testClass = "test-class";
    const onChange = jest.fn();
    const onEnter = jest.fn();
    const component = shallow(<CustomInput className={testClass} onChange={onChange} onEnter={onEnter} title={testTitle} />);
    const input = component.find('input');
    expect(component.hasClass(testClass)).toBeTruthy();
    expect(input.hasClass(testClass+'-input')).toBeTruthy();
    expect(component.find('.'+testClass+'-title').text()).toBe(testTitle);
    input.simulate('change', eventOnChange);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith('value');
    input.simulate('keyup', eventOnEnter);
    expect(onEnter.mock.calls.length).toBe(1);
    expect(onEnter).toBeCalled();
    expect(onEnter).toBeCalledWith(true);
  });
});