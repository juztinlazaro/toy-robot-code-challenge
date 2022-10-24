import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import PlaceRobot from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST PlaceRobot Component', () => {
  let PlaceRobotWrapper: any;

  const onPlaceRobotPost = sinon.spy();

  beforeEach(() => {
    PlaceRobotWrapper = shallow(
      <PlaceRobot onPlaceRobotPost={onPlaceRobotPost} />,
    );
  });

  it('should have input position x', () => {
    expect(PlaceRobotWrapper.find('#input-x')).toHaveLength(1);
  });

  it('should have input position y', () => {
    expect(PlaceRobotWrapper.find('#input-y')).toHaveLength(1);
  });

  it('should have selected position', () => {
    expect(PlaceRobotWrapper.find('#select-position')).toHaveLength(1);
  });

  it('should have place robot button', () => {
    expect(PlaceRobotWrapper.find('.place-robot-btn')).toHaveLength(1);
  });

  it('should Cardinal Direction select must has 4 option', () => {
    expect(PlaceRobotWrapper.find('.cardinal-option-value')).toHaveLength(4);
  });

  it('Should click Place button', () => {
    PlaceRobotWrapper.find('.place-robot-btn').simulate('click');
    expect(onPlaceRobotPost).toHaveProperty('callCount', 1);
  });
});
