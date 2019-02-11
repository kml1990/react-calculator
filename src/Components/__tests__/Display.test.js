import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display';

describe("display", function() {

  let mountedDisplay;
  beforeEach(() => {
    mountedDisplay = shallow(<Display />);
  });

  it('renders display without crashing', () => {
    let mountedDisplay = shallow(<Display />)
  });

})

