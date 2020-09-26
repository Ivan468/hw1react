import { connect } from 'react-redux';
import Tweets  from "../Tweets";

function mapStateToProps(state){
 return{
   tweets:state.tweets
 }
}


const TweetsContainer = connect(mapStateToProps)(Tweets);
export default TweetsContainer