import React from "react";
import Users from "./components/users";

// import Contacts from "./components/contacts";
import AppSear from "./components/searchfilter";
// import Timer from "./components/timer";
import { userList } from "./components/info-json";
// import TimerTwo from "./components/timer_two";
import TimerHook from "./components/timerHook";
import Login from "./components/login/login";
import SignUp from "./components/login/signUp";

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
      <TimerHook time="1000" autostart="true" int="1" name="першому таймеру"/>
      <TimerHook time="100" autostart="false" int="3" name="другому таймеру" /> 
      <TimerHook time="120" autostart="false" int="3" name="Третьому таймеру" /> 
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
