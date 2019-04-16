import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './app';

jest.mock('../../utils/data-provider/data-provider.js');
describe('<App />', () => {
  it('should render as expect', () => {
    const component = shallow(<App/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});;
