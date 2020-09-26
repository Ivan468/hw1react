import React, { Component } from 'react';
import PropTypes from "prop-types";

function Tweets(props){
console.log("Tweets -> props", props)

  let tweetDivs = props.tweets.map((tweet)=>{
    return <div>{tweet}</div>
  });
  let tweetName = props.names.map((name)=>{
    return <div>{name}</div>
  });
  return <div  >{tweetDivs}{tweetName}</div>
}
Tweets.propTypes = {
  tweets:PropTypes.array.isRequired,
//   names:PropTypes.array.isRequired  names
}

export default Tweets