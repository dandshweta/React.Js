import { useState } from "react";
let interval = null;
const Stopwatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onStartTimer = () => {
    clearInterval(interval);
    setStartTime(new Date().getTime());
    interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 100);
  };

  const onStopTimer = () => {
    clearInterval(interval);
    setStartTime(0);
    setCurrentTime(0);
  };

  let secondsPassed = 0;
  let MiliSecondPass = 0;
  if (startTime !== 0 && currentTime !== 0) {
    const result = (currentTime - startTime) / 1000;
    secondsPassed = result.toFixed(0);
    MiliSecondPass = result.toFixed(2).split(".")[1];
  }

  return (
    <>
      <p>{secondsPassed} s</p>
      <p>{MiliSecondPass} </p>
      <button onClick={onStartTimer}>start</button>
      <button onClick={onStopTimer}>Stop</button>
    </>
  );
};

export default Stopwatch;
