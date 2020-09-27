import React, { Component, render } from "react";
import PropTypes from "prop-types";
import { Users } from "./RenderC";

function Tweets(props) {
  console.log("Tweets -> props", props.names);
  let result = Object.keys(props).map((key) => [key, props[key]]);
  console.log("Tweets -> result", result);

  let tweetDivs = props.tweets.map((tweet)=>{
    return <div>{tweet}</div>
  });
  let tweetName = props.names.map((name)=>{
    return <div>{name}</div>
  });
  return <div  >{tweetDivs}{tweetName}</div>
}
Tweets.propTypes = {
  tweets: PropTypes.array.isRequired,
  //   names:PropTypes.array.isRequired  names
};

export default Tweets;
