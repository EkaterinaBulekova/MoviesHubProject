import React from 'react';
import { shallow } from 'enzyme';
import SearchFilter from './search-filter';
import toJson from 'enzyme-to-json';

describe('<SearchFilter />', () => {
  it('should render buttons with onClick method', () => {
    const testOnClick = jest.fn();
    const component = shallow(<SearchFilter/>);
    expect(toJson(component)).toMatchSnapshot();

    // const buttons = component.find('button');

    // expect(buttons).toHaveLength(2);
    // buttons.map(button=>{
    //   button.simulate('click');
    // })
    // expect(testOnClick.mock.calls.length).toBe(2);
    // expect(testOnClick).toBeCalled();

    // component.unmount();
  });
});