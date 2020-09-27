import { connect } from 'react-redux';
import Tweets  from "../Tweets";

function mapStateToProps(state){
   
 return{
   tweets:state.tweets,
   names:state.followers
 }
 ///name, avatar,  nickname
}


const TweetsContainer = connect(mapStateToProps)(Tweets);
export default TweetsContainer