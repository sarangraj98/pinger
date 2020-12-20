import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { userSignInReducer } from "./reducers/authReducer";
import { pingReducer } from "./reducers/pingReducer";
const initialState = {}; 
const reducer = combineReducers({
  userSignIn:userSignInReducer,
  checkURL:pingReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))
export default store;