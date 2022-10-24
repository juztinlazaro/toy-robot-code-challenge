import React from 'react';

const Box: React.FC<{
  rowBoxes: number;
}> = ({ rowBoxes }) => {
  return (
    <div className="square-position-container">
      {Array(rowBoxes)
        .fill(Math.random())
        .map((box: number, index: number) => (
          <div className="square-box" key={index} />
        ))}
    </div>
  );
};

export default Box;
