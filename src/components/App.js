import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogsContainer from '../containers/HogsContainer';

class App extends Component {
  
  
  
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        <HogsContainer />
      </div>
    );
  }
}

export default App;
