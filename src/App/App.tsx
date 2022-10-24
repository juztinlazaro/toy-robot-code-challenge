import React, { Component } from 'react';

import Notification from 'antd/lib/notification';

import MessageTypes from '../common/constant/message.constant';
import {
  isPositionNorth,
  isPositionEast,
  isPositionSouth,
  isPositionWest,
} from '../common/utils/positionValidation.util';

import Controller from '../components/Controller';
import Header from '../components/Header';
import PlaceRobot from '../components/PlaceRobot';
import Robot from '../components/Robot';
import TableBox from '../components/TableBox';

import { MAXIMUM_ROW_BOXES } from '../common/constant/app.constant';

import RobotMoveLogs from '../components/RobotMoveLogs';

import { IState } from './interface';

class Home extends Component<{}, IState> {
  state = {
    isPlaced: false,
    moveRecords: [] as any,
    robotFaceDirection: 0,
    robotPositionX: 0,
    robotPositionY: 0,
    type: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: any) => {
    if (event.which === 37) {
      this.handleLeftCommand();
    } else if (event.which === 39) {
      this.handleRightCommand();
    } else if (event.which === 38) {
      this.handleMoveCommand();
    }
  };

  handlePlaceRobot = (x: number, y: number, f: number) => {
    const maximumMove = MAXIMUM_ROW_BOXES - 1;
    if (x < 0 || x > maximumMove || y < 0 || y > maximumMove) {
      this.setState({
        type: MessageTypes.INVALID_POSITION,
      });

      this.handleShowErrorMessage(MessageTypes.INVALID_POSITION);

      return false;
    } else {
      this.setState({
        isPlaced: true,
        robotFaceDirection: f,
        robotPositionX: x,
        robotPositionY: y,
        type: '',
      });
    }

    return true;
  };

  handleLeftCommand = () => {
    if (!this.state.isPlaced) {
      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });

      this.handleShowErrorMessage(MessageTypes.ROBOT_NOT_PLACED);
      return false;
    }

    const nextDirection = this.state.robotFaceDirection - 90;

    this.setState({
      robotFaceDirection: nextDirection,
      type: '',
    });
    return true;
  };

  handleRightCommand = () => {
    if (!this.state.isPlaced) {
      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });

      this.handleShowErrorMessage(MessageTypes.ROBOT_NOT_PLACED);
      return false;
    }

    const nextDirection = this.state.robotFaceDirection + 90;

    this.setState({
      robotFaceDirection: nextDirection,
      type: '',
    });

    return true;
  };

  handleMoveCommand = () => {
    if (!this.state.isPlaced) {
      this.handleShowErrorMessage(MessageTypes.ROBOT_NOT_PLACED);

      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });
      return false;
    }

    const currentDirection = this.state.robotFaceDirection % 360;
    let xPosition = this.state.robotPositionX;
    let yPosition = this.state.robotPositionY;
    const maximumMove = MAXIMUM_ROW_BOXES - 1;

    if (isPositionNorth(currentDirection)) {
      yPosition--;
    } else if (isPositionEast(currentDirection)) {
      xPosition++;
    } else if (isPositionSouth(currentDirection)) {
      yPosition++;
    } else if (isPositionWest(currentDirection)) {
      xPosition--;
    }

    const isInvalidPosition =
      xPosition < 0 || xPosition > maximumMove || yPosition < 0 || yPosition > maximumMove;

    if (isInvalidPosition) {
      this.setState({
        type: MessageTypes.MOVE_NOT_ALLOWED,
      });

      this.handleShowErrorMessage(MessageTypes.MOVE_NOT_ALLOWED);

      return false;
    } else {
      this.setState({
        robotPositionX: xPosition,
        robotPositionY: yPosition,
        type: '',
      });
    }

    this.handleUpdateMoveRecords(currentDirection, xPosition, yPosition, '');
    return true;
  };

  handleUpdateMoveRecords = (
    currentDirection: number,
    y: number,
    x: number,
    message: string,
  ) => {
    this.setState((prevState: IState) => ({
      moveRecords: [
        {
          facePosition: currentDirection,
          id: Math.random(),
          robotPositionX: x,
          robotPositionY: y,
          time: new Date(),
          type: message,
        },
        ...prevState.moveRecords,
      ],
    }));
  };

  handleShowErrorMessage = (message: string) => {
    Notification.warning({
      description: message,
      message: 'Ops!!',
      placement: 'bottomRight',
    });

    this.handleUpdateMoveRecords(0, 0, 0, message);
  };

  render() {
    const { moveRecords } = this.state;

    return (
      <div className="home-section">
        <Header />

        <div className="items">
          <div className="item">
            <RobotMoveLogs
              records={moveRecords}
              onPlaceRobotPost={this.handlePlaceRobot}
            />
          </div>

          <div className="item">
            <div>
              <PlaceRobot onPlaceRobotPost={this.handlePlaceRobot} />

              <Controller
                move={this.handleMoveCommand}
                left={this.handleLeftCommand}
                right={this.handleRightCommand}
              />
            </div>

            <div className="table-container">
              <TableBox rowBoxes={MAXIMUM_ROW_BOXES} />

              <Robot
                xPosition={this.state.robotPositionX}
                yPosition={this.state.robotPositionY}
                facePosition={this.state.robotFaceDirection}
                isPlaced={this.state.isPlaced}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
