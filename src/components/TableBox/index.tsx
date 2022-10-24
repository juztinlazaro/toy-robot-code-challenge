import React from 'react';

import Box from '../Box';
import Positions from './Positions';

const TableBox: React.FC<{
  rowBoxes?: number;
}> = ({ rowBoxes }) => {
  const boxes = rowBoxes ? rowBoxes : 5;

  return (
    <div className="table-box-section">
      <Positions rowBoxes={boxes} />
      <div className="table-item">
        <div>
          <Positions rowBoxes={boxes} block={true} />
        </div>

        <div>
          {Array(boxes)
            .fill(Math.random())
            .map((box: number, index: number) => (
              <Box key={index} rowBoxes={boxes} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default TableBox;
