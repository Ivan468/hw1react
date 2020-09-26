import React, { Component } from 'react';
import {addTweet, addName} from "./actions/index";
import { connect } from 'react-redux';


class AddTweet extends Component{
  constructor () {
    super()
    this.state  = {tweet:""}
    this.state  = {names:""}
  }

  render(){
    return (
      <div>
      <input value={this.state.tweet} onChange={(e)=>{
        this.setState({tweet:e.target.value});
      }} /> 
        <input value={this.state.names} onChange={(e)=>{
        this.setState({names:e.target.value});
      }} /> 
      <button onClick={()=>{
        this.props.addTheTweet(this.state.tweet)
        this.setState({tweet:""})
      }}>Add</button>
      <button onClick={()=>{
        this.props.addTheName(this.state.names)
        this.setState({names:""})
      }}>AddNAME</button>
      </div>
      )
  }
}

function mapDispatchToProps(dispatch){
 return {
   addTheTweet:function(tweet){
     var action = addTweet(tweet);
     dispatch(action);
   },
   addTheName:function(tweet){
    var action = addName(tweet);
    dispatch(action);
  }
 }
}
export default connect(null,mapDispatchToProps)(AddTweet);
