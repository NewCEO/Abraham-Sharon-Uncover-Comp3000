
import { useState, useEffect } from 'react';

const TimerComponent = ({ onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      onTimerEnd();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onTimerEnd]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="timer">
       Time left: {formatTime(timeLeft)}
    </div>
  );
};

export default TimerComponent;
