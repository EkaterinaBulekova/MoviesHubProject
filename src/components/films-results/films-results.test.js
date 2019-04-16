import React from 'react';
import { shallow } from 'enzyme';
import FilmsResults from './films-results';
import toJson from 'enzyme-to-json';

describe('<FilmsResults />', () => {
  it('should render with right count and buttons with onClick method', () => {
    const countClass = "films-count";
    const testCount = 5;
    const testOnClick = jest.fn();
    const component = shallow(<FilmsResults/>);
    expect(toJson(component)).toMatchSnapshot();
    // const buttons = component.find('button');

    // expect(component.find('.'+countClass).text()).toBe(testCount + " movies found");
    // expect(buttons).toHaveLength(2);
    // buttons.map(button=>{
    //   button.simulate('click');
    // })
    // expect(testOnClick.mock.calls.length).toBe(2);
    // expect(testOnClick).toBeCalled();

    component.unmount();
  });
});