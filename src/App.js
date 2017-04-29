import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/component';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Navbar from "./Home/component"
import "./Home/Style.css"
import {connect} from "react-redux"
import {fetchEvents} from "./action"
import  SignUp from './Signup/component'

import  EventList from './Events/EventList';

const Home = ({ match }) => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Home}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

class App extends Component {

    componentWillMount(){
        this.props.dispatch(fetchEvents())

    }
    render() {
        console.log(this.props)
        return (
            <Router>
                <div>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to Intellimeet</h2>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/eventlist">LIst</Link></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/eventlist" component={EventList}/>
                    <Route exact path="/" component={Navbar}/>
                </div>
            </Router>
        )
    }
}

const AppContainer=connect(state=>state)(App)
export default AppContainer
