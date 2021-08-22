import React from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/NavBar.css";
//Views
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
//
//React-Router-DOM
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
      <Router>
        <div className='App'>
        <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/About' component={About}/>
          </Switch>
      </div>
      </Router>
    );
  }
export default App;