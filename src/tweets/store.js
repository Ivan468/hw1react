//we have decided that we are using redux so we have to install and  import it
import {createStore} from 'redux';
//we need our data to put in the database
import state from "./state";
import reducers from "./redusers/index";

var storeTwo = createStore(reducers, state);


export default storeTwo;