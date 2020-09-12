import React, { Component } from "react";
import "./css/likes.css";
import likesimg from "./img/heart.svg";
import likesimgfull from "./img/heart1.svg";


  
export default class Timer extends Component {
  state = {
    isActive: false,
     count: 123,
  };
  
  get likesCount() {
    // const base = 50; //OR 510 
    const { isActive, count } = this.state;
    return count + (isActive ? 1 : 0);
  }
  componentDidMount(){
    setInterval(this.increseLikesCount, 1000)
  }

  likesToogle = (e) => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };

  increseLikesCount = () => {
      this.setState((prevState)=>{
        return {
          count: prevState.count + 1
        }
      })


  }

  

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
