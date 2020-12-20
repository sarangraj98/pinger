import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../style/dashboard.css'
import SideBar from './SideBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import Log from './Log';
export default function Dashboard(props) {
    const userSignIn = useSelector(state => state.userSignIn)
    const { loading, error, userInfo } = userSignIn
    useEffect(() => {
        if (userInfo) {

        }
        else {
            props.history.push('/login');
        }
        return () => {

        }
    }, [userInfo])

    return (
        <>

            
            
            <Router>
               
                    <SideBar />
                    <Route exact path="/dashboard" component={HomePage} />
                    <Route exact path="/dashboard/logs" component={Log} />
           
            </Router>
        </>
    )
}
