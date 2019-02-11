import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Controls from '../Controls';
import Display from '../../Components/Display'

describe("App", function() {

  let mountedApp;
  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it('renders app without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders display without crashing', () => {
    const display = mountedApp.find('Display');
    expect(display.length).toBe(1);
  });

  it('renders controls without crashing', () => {
    const controls = mountedApp.find('Controls');
    expect(controls.length).toBe(1);
  });

});
