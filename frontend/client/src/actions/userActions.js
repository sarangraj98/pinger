import { GET_RESPONSE_TIME_FAIL, GET_RESPONSE_TIME_REQUEST, GET_RESPONSE_TIME_SUCCESS, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS } from "../constants/UserConstants"
import axios from 'axios'
import Cookie from 'js-cookie'
import jwt_decose from 'jwt-decode'

const signin = (email,password) => async(dispatch) =>{
  dispatch({type:USER_SIGN_IN_REQUEST,payload:{email,password}});
  try {
      const {data} = await axios.post('/user/login',{email,password});
      const result = jwt_decose(data.token)
      dispatch({type:USER_SIGN_IN_SUCCESS,payload:result});
      Cookie.set('token',JSON.stringify(data));
  } catch (error) {
    dispatch({type:USER_SIGN_IN_FAIL,payload:error.message})
  }
}

const CheckSpeed = (url,time)=>async (dispatch)=>{
  dispatch({type:GET_RESPONSE_TIME_REQUEST,payload:{time,url}});
  try {
    const {data} = await axios.get('/url/checkTime',{time,url});
    dispatch({type:GET_RESPONSE_TIME_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:GET_RESPONSE_TIME_FAIL,payload:error.message});
  }

}



export  {signin,CheckSpeed};