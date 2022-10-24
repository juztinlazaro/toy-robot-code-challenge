import React, { useState } from 'react';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';

import {
  CARDINAL_DIRECTION,
  ICardinalDirection,
} from '../../common/constant/cardinalDirection.constant';

interface IPlaceRobotProps {
  onPlaceRobotPost: (x: number, y: number, f: number) => void;
}

const { Option } = Select;

const PlaceRobot: React.FC<IPlaceRobotProps> = ({ onPlaceRobotPost }) => {
  const [robotFaceDirection, setRobotFaceDirection] = useState<number>(0);
  const [robotPositionX, setRobotPositionX] = useState<number>(0);
  const [robotPositionY, setRobotPositionY] = useState<number>(0);

  const handleOnInputXChange = (event: any) => {
    const value = event.currentTarget.value;
    setRobotPositionX(Number(value));
  };

  const handleOnInputYChange = (event: any) => {
    const value = event.currentTarget.value;
    setRobotPositionY(Number(value));
  };

  const handleSelectedFace = (value: any) => {
    setRobotFaceDirection(Number(value));
  };

  const handlePlaceCommand = () => {
    onPlaceRobotPost(robotPositionX, robotPositionY, robotFaceDirection);
  };

  return (
    <div className="place-robot-section">
      <h4>Place the Robot on table first</h4>

      <Input
        id="input-x"
        placeholder="Robot Position X"
        className="input-x"
        onChange={handleOnInputXChange}
      />

      <Input
        id="input-y"
        placeholder="Robot Position Y"
        className="input-y"
        onChange={handleOnInputYChange}
      />

      <Select
        id="select-position"
        className="select-position"
        placeholder="ex. North"
        onChange={handleSelectedFace}
      >
        {CARDINAL_DIRECTION.map((cardinal: ICardinalDirection) => {
          return (
            <Option
              className="cardinal-option-value"
              key={cardinal.id}
              value={cardinal.direction}
            >
              {cardinal.name}
            </Option>
          );
        })}
      </Select>

      <Button
        className="place-robot-btn"
        type="primary"
        onClick={handlePlaceCommand}
      >
        PLACE
      </Button>
    </div>
  );
};

export default PlaceRobot;
