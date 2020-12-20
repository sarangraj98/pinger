import React from 'react'
import '../style/dashboard.css'
import {Link} from 'react-router-dom'
export default function SideBar() {
    return (
        <div>
            <div className="sidebar">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/logs">Log</Link>
            </div>
        </div>
    )
}
