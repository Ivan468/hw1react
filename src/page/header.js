import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../components/css/header.scss";

export const Header = () => (
  <nav role="custom-dropdown">
    <ul>
      <li>
        <Link to="/hw1">hw1 HW "ReactJS. Основи"</Link>
      </li>
      <li>
        <Link to="/hw2">hw2 HW "ReactJS. Класові компоненти"</Link>
      </li>
      <li>
        <Link to="/hw3">hw3 HW "ReactJS. Методи життєвого циклу. Хуки"</Link>
      </li>
      <li>
        <Link to="/hw4">
          hw4 HW "ReactJS. Підходи до стилізації. StyledComponents. Animations"
        </Link>
      </li>
      <li>
        <Link to="/hw5">hw5 HW "ReactJS. Поняття SPA. Навігація."</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
