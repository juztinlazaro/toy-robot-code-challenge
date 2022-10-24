export const NORTH = 'North';
export const EAST = 'East';
export const SOUTH = 'South';
export const WEST = 'West';

export const CARDINAL_DIRECTION = [
  {
    direction: 0,
    id: 1,
    name: NORTH,
  },
  {
    direction: 90,
    id: 2,
    name: EAST,
  },
  {
    direction: 180,
    id: 3,
    name: SOUTH,
  },
  {
    direction: 270,
    id: 4,
    name: WEST,
  },
];

export interface ICardinalDirection {
  direction?: number;
  id?: number;
  name?: string;
}
