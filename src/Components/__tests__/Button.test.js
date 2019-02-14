import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe("Render buttons", function() {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it('renders buttons without crashing', () => {
    let mountedButton = shallow(<Button />)
  });

  it('renders an anchor button', () => {
    const anchorButton = mountedButton.find('button');
    expect(anchorButton.length).toBe(1);
  });
});

describe("When events are added to button", function() {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      name: '=',
      value: '='
    }

    mountedButton = shallow(<Button name={props.name} value={props.value} />)
  });

  it('it displays correct symbol when passed name', () => {
    const anchorButton = mountedButton.find('button')
    
    expect(anchorButton.text()).toBe('=')
  });

  it('call a function passed to it when clicked', ()=> {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallBack = shallow(<Button onClick={mockCallBack} />)
    mountedButtonWithCallBack.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
  
});

