import React from 'react';
import './App.css';

//component
import "./components/NavBar";
import NavBar from './components/NavBar';
import './components/NavBar.css'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>LM Bicibleteria</h1>
        <NavBar />
      </div>
    );
  }
}
export default App;


