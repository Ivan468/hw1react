import React, { Component } from "react";
import { userList } from "../components/info-json";

import Users from "../components/users";

export default class Page1 extends Component {
  render() {
    return (
      <div>
        {userList.map((user) => (
          <Users {...user} />
        ))}
        {/* <Contacts/>   */}

        {/* <Timer /> */}
        {/* <TimerTwo/> */}
      </div>
    );
  }
}
