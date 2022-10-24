import React from 'react';

import {
  NORTH,
  EAST,
  SOUTH,
  WEST,
} from '../../common/constant/cardinalDirection.constant';
import {
  isPositionNorth,
  isPositionEast,
  isPositionSouth,
  isPositionWest,
} from '../../common/utils/positionValidation.util';

interface IMessageProps {
  robotPositionX: number;
  robotPositionY: number;
  facePosition: number;
}

const Message: React.FC<IMessageProps> = ({
  robotPositionX,
  robotPositionY,
  facePosition,
}) => {
  const validateDirection = (position: number) => {
    if (isPositionNorth(position)) {
      return NORTH;
    } else if (isPositionEast(position)) {
      return EAST;
    } else if (isPositionSouth(position)) {
      return SOUTH;
    } else if (isPositionWest(position)) {
      return WEST;
    }

    return 'INVALID FACE POSITION';
  };

  return (
    <span className="message">
      <span className="intro"> Robot Move </span>

      <span className="x-position">X: {robotPositionX}</span>

      <span className="y-position">Y: {robotPositionY}</span>

      <span className="face-position">
        POSITION: {validateDirection(facePosition)}
      </span>
    </span>
  );
};

export default Message;
