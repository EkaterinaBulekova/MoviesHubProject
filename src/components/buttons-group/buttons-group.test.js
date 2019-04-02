import React from 'react';
import { shallow } from 'enzyme';
import ButtonsGroup from './buttons-group';

describe('<ButtonGroup />', () => {
  it('should render button group with right title, class and button set', () => {
    const testGroup = {
      className: "test-class",
      title: "Test title",
      buttons: [
        {
          name:"test button 1", 
          result:"test_result1"}, 
        {
          name:"test button 2", 
          result:"test_result2"},
      ],
    };
    const activeResult = "test_result1";
    const activeName = "test button 1";
    const testOnClick = jest.fn();
    const component = shallow(<ButtonsGroup group={testGroup} active={activeResult} onClick={testOnClick}/>);
    const buttons = component.find('.'+testGroup.className+'-button');
    const activeButton = component.find('.'+testGroup.className+'-button.active');

    expect(component.find('.'+testGroup.className+'-title').text()).toBe(testGroup.title);
    expect(component.hasClass(testGroup.className)).toBeTruthy();
    expect(buttons).toHaveLength(testGroup.buttons.length);
    buttons.map((button, index)=>{expect(button.prop('name')).toBe(testGroup.buttons[index].name);});
    expect(activeButton.prop('name')).toBe(activeName);
    activeButton.simulate('click');
    expect(testOnClick.mock.calls.length).toBe(1);
    expect(testOnClick).toBeCalled();
  });
});