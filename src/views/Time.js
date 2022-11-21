import { useEffect, useRef, useState } from "react";

function Time() {
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      if (running) setSecond((current) => ++current);
    }, 1_000);

    // Clean up
    return () => clearInterval(ref.current);
  }, [running]);

  function startHandler() {
    setRunning(true);
  }

  function stopHandler() {
    setRunning(false);
  }

  function restartHandler() {
    setTimeout(() => {
      setSecond(0);
    }, 400);
  }

  return (
    <div>
      <h1>SetInterVal : {second}</h1>
      <button disabled={running} onClick={startHandler}>
        Run
      </button>
      <button disabled={!running} onClick={stopHandler}>
        Pause
      </button>
      <button disabled={!second} onClick={restartHandler}>
        Restart
      </button>
    </div>
  );
}

export default Time;
