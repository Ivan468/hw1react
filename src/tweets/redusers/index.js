import {combineReducers} from 'redux';


function tweets(state = [],action){
 if(action.type === "ADD_TWEET"){
   if(action.value === "Curse word"){
     return state;
   }
   return [...state,action.value];
 }
 return state;
}

function followers(state = 0,action){

 return state;
}


const rootReducer = combineReducers({
 tweets, followers 
});
export default rootReducer;