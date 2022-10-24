export const isPositionNorth = (position: number) =>
  position === 0 || position === 1 || position === -1;

export const isPositionEast = (position: number) =>
  position === 90 || position === -270;

export const isPositionSouth = (position: number) =>
  position === 180 || position === -180;

export const isPositionWest = (position: number) =>
  position === 270 || position === -90;
