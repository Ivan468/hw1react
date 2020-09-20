import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./galery";

const Page5 = () => (
  <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/page2">Зображення і текст</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route path="/page2">
            <h2> Текст і pображення</h2>
            <img
              src="https://images.unsplash.com/photo-1591082053831-f9626f2bfca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
              alt=" "
              style={{ width: "1100px", height: "auto" }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default Page5;
