import React, { Component } from 'react';
import PropTypes from "prop-types";

function Tweets(props){

  let tweetDivs = props.tweets.map((tweet)=>{
    return <div>{tweet}</div>
  });
  return <div>{tweetDivs}</div>
}
Tweets.propTypes = {
  tweets:PropTypes.array.isRequired
}

export default Tweets