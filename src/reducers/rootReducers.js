import {combineReducers} from 'redux';
import {postReducer} from "./postReducer"


export const RootReducer = combineReducers( {
    posts: postReducer
}
)