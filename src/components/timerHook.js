import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.time);
  const [isActive, setIsActive] = useState(props.autostart);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
  
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      {console.log(` залишилось ${seconds} секунд  `)}
      <div className="row">
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
