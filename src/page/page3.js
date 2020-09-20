import React from 'react';
import TimerHook from "../components/timerHook";
const Page3 = () => (
    <div> 
    <TimerHook
    time="1000"
    autostart="true"
    int="1"
    name="першому таймеру"
  />
  <TimerHook
    time="100"
    autostart="false"
    int="3"
    name="другому таймеру"
  />
  <TimerHook
    time="120"
    autostart="false"
    int="3"
    name="Третьому таймеру"
  />
  </div>
);

export default Page3;