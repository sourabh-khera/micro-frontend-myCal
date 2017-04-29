/**
 * Created by sourabh on 29/4/17.
 */


import React from "react"
import {
    BrowserRouter as Router,
    Link, Route, Redirect
} from 'react-router-dom';

export default class Navbar extends React.Component{

    render(){
        return(
            <Router>
            <div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/calender">Calender</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/preferences">Preferences</Link></li>
                    </ul>
                </div>
                {/*<Route path="/calender" component={}/>*/}
                {/*<Route path="/dashboard" component={}/>*/}
                {/*<Route path="/preferences" component={}/>*/}
            </div>
            </Router>
        )
    }
}