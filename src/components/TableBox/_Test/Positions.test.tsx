import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { MAXIMUM_ROW_BOXES } from '../../../common/constant/app.constant';

import Positions from '../Positions';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST POSITION LABEL', () => {
  let firstTestWrapper: any;

  beforeEach(() => {
    firstTestWrapper = shallow(<Positions rowBoxes={MAXIMUM_ROW_BOXES} />);
  });

  it(`Render POSITION LABEL base on MAXIMUM_ROW_BOXES ${MAXIMUM_ROW_BOXES}`, () => {
    expect(firstTestWrapper.find('.position-label')).toHaveLength(
      MAXIMUM_ROW_BOXES,
    );
  });
});
