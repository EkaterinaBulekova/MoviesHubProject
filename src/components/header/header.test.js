import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import { Header } from './header';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render with name', () => {
    var testName = "Test name of app"
    act(() => {
      ReactDOM.render(<Header name={testName} />, container);
    });
    const header = container.querySelector('.app-header .header-name');
    expect(header.textContent).toBe(testName);
});