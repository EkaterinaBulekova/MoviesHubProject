import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import Message from './message';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render with text', () => {
    var testMessage = "Test message text"
    act(() => {
      ReactDOM.render(<Message text={testMessage} />, container);
    });
    const message = container.querySelector('div');
    expect(message.textContent).toBe(testMessage);
});