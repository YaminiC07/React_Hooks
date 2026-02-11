import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <h2>{time} seconds</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
