import React from 'react';
import { mount } from 'enzyme';
import FilmsResults from './films-results';



describe('<FilmsResults />', () => {
  it('should render with right count and buttons with onClick method', () => {
    const countClass = "films-count";
    const testCount = 5;
    const testOnClick = jest.fn();
    const component = mount(<FilmsResults count={testCount} sortBy={'rating'} onClick={testOnClick}/>);
    const buttons = component.find('button');

    expect(component.find('.'+countClass).text()).toBe(testCount + " movies found");
    expect(buttons).toHaveLength(2);
    buttons.map(button=>{
      button.simulate('click');
    })
    expect(testOnClick.mock.calls.length).toBe(2);
    expect(testOnClick).toBeCalled();

    component.unmount();
  });
});