import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { userSignInReducer } from "./reducers/authReducer";
const initialState = {}; 
const reducer = combineReducers({
  userSignIn:userSignInReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))
export default store;