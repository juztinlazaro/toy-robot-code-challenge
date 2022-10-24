export interface IState {
  isPlaced: boolean;
  moveRecords: IMoveRecords[];
  robotFaceDirection: number;
  robotPositionX: number;
  robotPositionY: number;
  type: string;
}

export interface IMoveRecords {
  facePosition: number;
  id: number;
  robotPositionX: number;
  time: Date;
  robotPositionY: number;
  type: string;
}
