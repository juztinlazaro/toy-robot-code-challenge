import React from 'react';
import Button from 'antd/lib/button';

interface IControllerProps {
  left: () => void;
  right: () => void;
  move: () => void;
}

const Controller: React.FC<IControllerProps> = ({ left, right, move }) => {
  const handleRotateLeft = () => {
    left();
  };

  const handleRotateRight = () => {
    right();
  };

  const handleMoveForward = () => {
    move();
  };

  return (
    <div className="direction-section _spacer-md">
      <h4 className="title">Move and Directions</h4>

      <p>
        You can use your arrow keys left, right to turn face direction and up to
        move.
      </p>

      <Button
        className="left-button ui-button-primary"
        onClick={handleRotateLeft}
      >
        LEFT
      </Button>

      <Button
        className="move-button ui-button-amethyst"
        onClick={handleMoveForward}
      >
        MOVE
      </Button>

      <Button
        className="right-button ui-button-primary"
        onClick={handleRotateRight}
      >
        RIGHT
      </Button>
    </div>
  );
};

export default Controller;
