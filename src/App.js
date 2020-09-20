import React from "react";
import Page1 from "./page/page1";

import SignIn from "./components/login/login";
import SignUp from "./components/login/signUp";
import AppSear from "./components/searchfilter";
import TimerHook from "./components/timerHook";
// import Contacts from "./components/contacts";
// import TimerTwo from "./components/timer_two";
// import Timer from "./components/timer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <ul>
            <li>
              <Link to="/hw1">hw1 HW "ReactJS. Основи"</Link>
            </li>
            <li>
              <Link to="/hw2">hw2 HW "ReactJS. Класові компоненти"</Link>
            </li>
            <li>
              <Link to="/hw3">
                hw3 HW "ReactJS. Методи життєвого циклу. Хуки"
              </Link>
            </li>
            <li>
              <Link to="/hw4">
                hw4 HW "ReactJS. Підходи до стилізації. StyledComponents.
                Animations""
              </Link>
            </li>
          </ul>
        </Route>

        {/* <Contacts/>*/}
        {/* <Timer /> */}
        {/* <TimerTwo/> */}
        <Switch>
          <Route path="/hw4">
            <SignUp />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/hw1">
            <Page1 />
          </Route>
          <Route path="/hw2">
            <AppSear />
          </Route>
          <Route path="/hw3">
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
