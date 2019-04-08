import React from 'react';
import { mount } from 'enzyme';
import SearchFilter from './search-filter';

describe('<SearchFilter />', () => {
  it('should render buttons with onClick method', () => {
    const testOnClick = jest.fn();
    const component = mount(<SearchFilter searchBy={'drama'} onClick={testOnClick}/>);
    const buttons = component.find('button');

    expect(buttons).toHaveLength(2);
    buttons.map(button=>{
      button.simulate('click');
    })
    expect(testOnClick.mock.calls.length).toBe(2);
    expect(testOnClick).toBeCalled();

    component.unmount();
  });
});