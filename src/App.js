import React from "react";
import Users from "./components/users";

// import Contacts from "./components/contacts";
import AppSear from "./components/searchfilter";
import Timer from "./components/timer";
import { userList } from "./components/info-json";
import TimerTwo from "./components/timer_two";
import TimerHook from "./components/timerHook";

function App() {
  return (
    <div>
      {userList.map((user) => (
        <Users {...user} />
      ))}
      {/* <Contacts/>   */}
      <AppSear />
      {/* <Timer /> */}
      {/* <TimerTwo/> */}
      <h2 style={{marginTop: "40px"}}>Timer</h2>
      <TimerHook time="1000" autostart="true"  />
      <TimerHook time="100" autostart="false"/> 
    </div>
  );
}

export default App;
