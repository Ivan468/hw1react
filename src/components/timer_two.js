import React, { Component } from "react";

export default class TimerTwo extends Component {
  state = {
    isActive: false,
    count: 201,
  };

  get likesCount() {
    // const base = 50; //OR 510
    const { isActive, count } = this.state;
    return count + (isActive ? 1 : 0);
  }
  componentDidMount() {
    setInterval(this.increseLikesCount, 1000);
  }

  likesToogle = (e) => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };

  onTick = () => {
    console.log("tick залишилось часу " + this.state.count);
  };

  increseLikesCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    this.onTick();
    // console.log("tick залишилось часу " + this.state.count)
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className="timer">
        <h2> hw3 React Методи життєвого циклу </h2>
        <h3 className="Likes-count">{this.likesCount}</h3>
      </div>
    );
  }
}
