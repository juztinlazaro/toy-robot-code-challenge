import React from 'react';
import moment from 'moment';

import Button from 'antd/lib/button';

import { DATE_FORMAT } from '../../common/constant/formats.constant';
import { IMoveRecords } from '../../App/interface';

import Message from './Message';
import ErrorMessage from './ErrorMessage';

interface IRobotMoveLogsProps {
  records: IMoveRecords[];
  onPlaceRobotPost: (x: number, y: number, f: number) => void;
}

const RobotMoveLogs: React.FC<IRobotMoveLogsProps> = ({
  records,
  onPlaceRobotPost,
}) => {
  const handlePlaceRobot = () => {
    onPlaceRobotPost(0, 0, 0);
  };

  return (
    <section className="terminal-section">
      <h2>ROBOT MOVE LOGS</h2>

      <div className="terminal-container">
        {records.length !== 0 ? (
          <div className="terminal-wrapper">
            {records.map((record: IMoveRecords) => {
              const isNoError = record.type === '';
              return (
                <div key={record.id} className="record-content">
                  <span className="time">
                    {moment(record.time).format(DATE_FORMAT)}:
                  </span>

                  <span className="message">
                    {isNoError ? (
                      <Message
                        robotPositionX={record.robotPositionX}
                        robotPositionY={record.robotPositionY}
                        facePosition={record.facePosition}
                      />
                    ) : (
                      <ErrorMessage type={record.type} />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-slate">
            <div className="_text-center">
              <h3> NO ROBOT RECORD MOVE/S, PLEASE PLACE THE ROBOT AND MOVE </h3>
              <Button id="place-button" onClick={handlePlaceRobot}>
                Place Robot
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RobotMoveLogs;
