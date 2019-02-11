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

  it('renders a anchor button', () => {
    const anchorButton = mountedButton.find('a');
    expect(anchorButton.length).toBe(1);
  });
});

describe("When name and value are passed to it", function() {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      name: '=',
      value: '='
    }

    mountedButton = shallow(<Button name={props.name} value={props.value} />)
  });

  // it('it displays correct symbol when passed name', () => {
  //   expect(mountedButton.name()).to.equal('=');
  // });

  // it('it sets correct value', () => {
  //   const equal = mountedButton.find('.controls__item');
  //   expect(equal).to.have.property('value', '=');
  // });
  
});

