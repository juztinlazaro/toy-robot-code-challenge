import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import RobotMoveLogs from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST BOX COMPONENT EMPTY RECORDS', () => {
  const TestRecords = [] as any;
  let RobotMoveLogsWrapper: any;

  const handlePlaceRobot = (x: number, y: number, f: number) => {
    console.log(f, x, y);
  };

  beforeEach(() => {
    RobotMoveLogsWrapper = shallow(
      <RobotMoveLogs
        records={TestRecords}
        onPlaceRobotPost={handlePlaceRobot}
      />,
    );
  });

  it(`Render Empty slate when no robot move records`, () => {
    expect(RobotMoveLogsWrapper.find('.empty-slate')).toHaveLength(1);
  });

  it(`hide terminal wrapper if no robot move records`, () => {
    expect(RobotMoveLogsWrapper.find('.terminal-wrapper')).toHaveLength(0);
  });
});

describe('LETS TEST BOX COMPONENT WITH RECORDS', () => {
  const TestRecords = [
    {
      facePosition: 4,
      id: 1,
      robotPositionX: 2,
      robotPositionY: 3,
    },
  ] as any;

  let RobotMoveLogsWrapper: any;

  const handlePlaceRobot = (x: number, y: number, f: number) => {
    console.log(f, x, y);
  };

  beforeEach(() => {
    RobotMoveLogsWrapper = shallow(
      <RobotMoveLogs
        records={TestRecords}
        onPlaceRobotPost={handlePlaceRobot}
      />,
    );
  });

  it(`hide empty slate if has records`, () => {
    expect(RobotMoveLogsWrapper.find('.empty-slate')).toHaveLength(0);
  });

  it(`show terminal wrapper if has records`, () => {
    expect(RobotMoveLogsWrapper.find('.terminal-wrapper')).toHaveLength(1);
  });
});
