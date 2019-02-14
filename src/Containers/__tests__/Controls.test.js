import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';
import Button from '../../Components/Button';

describe("Controls ui", function() {
  let mountedControls;
  beforeEach(() => {
    mountedControls = shallow(<Controls />);
  })

  it('renders controls container without crashing', () => {
    let mountedControls = shallow(<Controls />)
  });

  it('renders 20 buttons', () => {
    const buttons = mountedControls.find('Button');
    expect(buttons.length).toBe(20);
  });

})

describe('calculate', () => {
  it('adds a value to array when buttons is clicked',() => {
    let mountedControls = shallow(<Controls />);
    let mockEvent = {target:{value:'1'}};
    mountedControls.instance().handleClick(mockEvent);
    expect(mountedControls.instance().state.calculation.length).toBe(1)
  })
})

