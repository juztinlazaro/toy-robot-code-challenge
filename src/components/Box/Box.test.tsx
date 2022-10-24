import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { MAXIMUM_ROW_BOXES } from '../../common/constant/app.constant';

import Box from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST BOX COMPONENT', () => {
  let BoxWrapper: any;

  beforeEach(() => {
    BoxWrapper = shallow(<Box rowBoxes={MAXIMUM_ROW_BOXES} />);
  });

  it(`Render SQUARE BOX base on MAXIMUM_ROW_BOXES ${MAXIMUM_ROW_BOXES}`, () => {
    expect(BoxWrapper.find('.square-box')).toHaveLength(MAXIMUM_ROW_BOXES);
  });
});
