import React, { useState, useEffect } from "react";
import "./css/timerhook.css";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.time);
  const [isActive, setIsActive] = useState(props.autostart);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(100);
    setIsActive(false);
  }

  let int = props.int;
  let inttime = int * 1000;

  useEffect(() => {
    let interval = null;

    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - int);
      }, inttime);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  

  function Sec() {
    let procent = 100;
    if (seconds > 100) {

      return procent  = procent -(procent/seconds) 
    } else {
      return seconds
    }
    
  }

  const divStyle = {
    backgroundColor: "blue",
    height: "100px",
    width: `${Sec()}%`,
  };

  return (
    <div className="app">
      <div className="time">{seconds} сек</div>
      {console.log(` ${props.name}  залишилось ${seconds} секунд  `)}
      {console.log(`  ${props.autostart}   `)}
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive  && seconds !== 0 ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <div style={divStyle}> </div>
      </div>
    </div>
  );
};

export default Timer;
