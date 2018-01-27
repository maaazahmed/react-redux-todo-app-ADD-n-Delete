// import reducer from "./reducer"
// import { combineReducers } from "redux"



// export default combineReducers({
//     root:reducer
// });

import {combineReducers} from "redux";
import reducer from "./reducer"

export default combineReducers({
   root : reducer
})