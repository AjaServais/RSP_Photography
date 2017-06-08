import React, { Component } from 'react';import Home from "./components/Home";
import HomeCards from "./components/HomeCards";
import HomeWorkshop from "./components/HomeWorkshop";
import HomeJumbotron from "./components/HomeJumbotron";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Home/>
      <HomeCards/>
      <HomeWorkshop/>
      <HomeJumbotron/>

      </div>


    );
  }
}

export default App;
