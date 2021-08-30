import React from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/NavBar.css";
import Footer from "./views/Footer/Footer";
//Views
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
//React-Router-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
      <Router>
        <div className='App'>
        <NavBar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Category/:categoryId' component={ItemListContainer} />
            <Route path='/Item/:id' component={ItemDetailContainer} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Cart' component={Cart} />
          </Switch>
          <Footer />
      </div>
      </Router>
    );
  }
export default App;