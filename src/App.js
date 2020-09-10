import React from "react";
import Users from "./components/users";

// import Contacts from "./components/contacts";
import AppSear from "./components/searchfilter";
import Timer from "./components/timer";
import { userList } from "./components/info-json";

function App() {
  return (
    <div>
      {userList.map((user) => (
        <Users {...user} />
      ))}
      {/* <Contacts/>   */}
      <AppSear />
      <Timer />
    </div>
  );
}

export default App;
