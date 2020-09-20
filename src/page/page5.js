import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from './galery';


const Page5 = () => (
    <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/page1">cartinki</Link>
          </li>
          <li>
            <Link to="/page2">About</Link>
          </li>
          <li>
            <Link to="/page3">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/page1">
            <Gallery/>
          </Route>
          <Route path="/page2">
              About
          </Route>
          <Route path="/page3">
            hekildsa
          </Route>
        </Switch>
      </div>
    </Router>



    </div>



);


export default Page5;