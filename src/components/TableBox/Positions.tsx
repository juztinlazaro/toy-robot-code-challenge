import React from 'react';

const Positions: React.FC<{ rowBoxes: number; block?: boolean }> = ({
  rowBoxes,
  block,
}) => {
  return (
    <section className={`position-section ${block ? '-block' : '-inline'}`}>
      {Array(rowBoxes)
        .fill(Math.random())
        .map((box: number, index: number) => (
          <span className="position-label" key={index}>
            {index}
          </span>
        ))}
    </section>
  );
};

export default Positions;
