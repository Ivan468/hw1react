//we have decided that we are using redux so we have to install and  import it
import { createStore } from "redux";

import postReducer from './redusers/postReducer';


export const storeTwo = createStore(postReducer);



//we need our data to put in the database
// import state from "./state";
// import reducers from "./redusers/index";

// var storeTwo = createStore(
//   reducers,
//   state,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default storeTwo;
