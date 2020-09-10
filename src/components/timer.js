import React, { Component } from "react";
import "./css/likes.css";
import likesimg from "./img/heart.svg";
import likesimgfull from "./img/heart1.svg";
import { userList } from "./info-json";

export default class Timer extends Component {
  state = {
    isActive: false,
  };

  get likesCount() {
    const base = userList[1].likes; //OR 510 
    const { isActive } = this.state;
    return base + (isActive ? 1 : 0);
  }

  likesToogle = (e) => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className="lekes_wrapper">
        {/* <h2> hw3 React Методи життєвого циклу </h2> */}
        <div className="Likes-count">{this.likesCount}</div>
        <img
          src={isActive ? likesimgfull : likesimg}
          alt=""
          className={`like`}
          onClick={this.likesToogle}
        />
      </div>
    );
  }
}
