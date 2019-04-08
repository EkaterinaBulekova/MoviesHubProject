import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './error-boundary';

function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; // eslint-disable-line
}

describe('<ErrorBoundary />', () => {
  const testClass = 'test-clss';
  const testTitle = 'Something went wrong.'
  const testError = 'Error thrown from problem child';
  const Something = () => null;

//   it('renders an throw error', () => {
//     const wrapper = shallow(<ErrorBoundary><ProblemChild /></ErrorBoundary>);
//     expect(() => { wrapper.dive().html(); }).toThrowError(testError);
//   });

  it('renders markup of error boundary', () => {
    const wrapper = shallow(<ErrorBoundary><Something/></ErrorBoundary>);
    wrapper.simulateError(testError);
    expect(wrapper.hasClass(testClass));
    expect(wrapper.find('h2').text()).toBe(testTitle);
    expect(wrapper.find('details').text()).toContain(testError);
  });
});
