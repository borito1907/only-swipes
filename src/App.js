import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
// use later for navigation
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>Login Page</h1>
        <div><Navbar /></div>
      </div>
    );
  }  
}

export default App;
