import React from 'react';
import RobotSvg from './Robot';
import RobotTest from '../../assets/images/robot.svg'

interface IRobotProps {
  xPosition: number;
  yPosition: number;
  facePosition: number;
  isPlaced: boolean;
}

const Robot: React.FC<IRobotProps> = ({
  xPosition,
  yPosition,
  facePosition,
  isPlaced,
}) => {
  React.useEffect(() => {
    const robot = document.getElementById('robot') as any;
    if (!isPlaced) {
      robot.style.display = 'none';
      return;
    }

    const calculateX = xPosition * 120 + 60;
    const calculateY = yPosition * 123 + 55;

    robot.style.display = 'block';
    robot.style.transform = `translate(${calculateX}px,${calculateY}px) rotate(${facePosition}deg)`;
  }, [xPosition, yPosition, facePosition, isPlaced]);

  return <div className="robot-container" id="robot" style={{backgroundImage: `url(${RobotTest})`, }} />;
};

export default Robot;
