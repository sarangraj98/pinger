import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {CheckSpeed} from '../actions/userActions'
export default function HomePage() {
    const userSignIn = useSelector(state => state.userSignIn)
    const { loading, error, userInfo } = userSignIn
    const dispatch = useDispatch()
    const [url, seturl] = useState('')
    const [time, setTime] = useState('')
    const submitHandler = (e)=>{
      dispatch(CheckSpeed(url,time))
    }
    return (
        <div>
            <div className="content">
                <h2> Hello {userInfo.name} !</h2>
                <form noValidate onSubmit={submitHandler}>
                        <div className="input-field col s12">
                            <input
                                onChange={(e) => seturl(e.target.value)}
                                value={url}
                               placeholder="Enter URL"
                            />
                           
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={(e) => setTime(e.target.value)}
                                value={time}
                                type="number"
                               placeholder="Enter time"
                            />
                           
                        </div>
                        
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                CheckSpeed
                </button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
