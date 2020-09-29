import React from "react";
import Page1 from "./page/page1";

import SignIn from "./components/login/login";
import SignUp from "./components/login/signUp";
import AppSear from "./components/searchfilter";

import Header from "./page/header";
import Page3 from "./page/page3";
import Page5 from "./page/page5";

// import Contacts from "./components/contacts";
// import TimerTwo from "./components/timer_two";
// import Timer from "./components/timer";

import { storeTwo } from "./tweets/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import PostForm from "./tweets/PostForm";
import AllPost from "./tweets/AllPost";

import "./tweets/css/index.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Header />
        </Route>
        {/* <Contacts/>*/}
        {/* <Timer /> */}
        {/* <TimerTwo/> */}
        <Switch>
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
            <Page3 />
          </Route>
          <Route path="/hw4">
            <SignUp />
          </Route>
          <Route path="/hw5">
            <Page5 />
          </Route>
          <Route path="/test6">
            {/* <PostForm />
            <Posts /> */}
            Test
          </Route>
          <Route path="/hw6">
            <Provider store={storeTwo}>
              {/* test */}
              <div className="App">
                <div className="navbar">
                  <PostForm />
                  <AllPost />
                </div>
              </div>
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
