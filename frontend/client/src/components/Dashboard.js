import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard(props) {
    const userSignIn = useSelector(state => state.userSignIn)

    const {loading,error,userInfo} = userSignIn
    useEffect(() => {
        if(userInfo){

        }
        else{
            props.history.push('/login');
        }
        return () => {
            
        }
    }, [userInfo])

    return (
        <div>
            hi
        </div>
    )
}
