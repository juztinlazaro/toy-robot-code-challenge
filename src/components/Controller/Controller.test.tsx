import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Controller from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST CONTROLLER Component', () => {
  const right = sinon.spy();
  const left = sinon.spy();
  const move = sinon.spy();

  const ControllerWrapper = shallow(
    <Controller right={right} left={left} move={move} />,
  );

  it('Should click left button', () => {
    ControllerWrapper.find('.left-button').simulate('click');
    expect(left).toHaveProperty('callCount', 1);
  });

  it('Should click right button', () => {
    ControllerWrapper.find('.right-button').simulate('click');
    expect(right).toHaveProperty('callCount', 1);
  });

  it('Should click move button', () => {
    ControllerWrapper.find('.move-button').simulate('click');
    expect(move).toHaveProperty('callCount', 1);
  });
});
