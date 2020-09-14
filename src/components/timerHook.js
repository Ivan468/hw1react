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

  let int = props.int;
  let inttime = int * 1000;

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - int);
  
      }, inttime);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      {console.log(` ${props.name}  залишилось ${seconds} секунд  `)}
      {console.log(`  ${props.autostart}   `)}
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
