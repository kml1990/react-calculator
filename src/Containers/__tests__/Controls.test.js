import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';
import Button from '../../Components/Button';

describe("Controls", function() {
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

