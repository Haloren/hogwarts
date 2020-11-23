import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogsContainer from '../containers/HogsContainer';
import Filter from "./Filter"

class App extends Component {
  state = {
    greasedButton: false,
    weightSort: false
  }
  
  // greasedToggle = () => this.setState({greasedButton: !this.state.greasedButton})
  toggle = (key) => this.setState({[key]: !this.state[key]})


  filteredHogs = () => this.state.greasedButton ? hogs.filter(hog => !!hog.greased) : hogs

  sortedHogs = () => this.state.weightSort 
  ? this.filteredHogs().sort((a, b) => b.weight - a.weight)
  : this.filteredHogs().sort((a, b) => a.name.localeCompare(b.name))

  render() {
    console.log("Greased Button", this.state.greasedButton )
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        {/* <Filter greasedToggle={() => this.toggle("greasedButton")} weightToggle={() => this.toggle("weightSort")} isGreased={this.state.greasedButton} /> */}
        <Filter greasedToggle={() => this.toggle("greasedButton")} weightToggle={() => this.toggle("weightSort")} {...this.state} />
        {/* <HogsContainer hogs={this.filteredHogs()} /> */}
        <HogsContainer hogs={this.sortedHogs()} />
      </div>
    );
  }
}

export default App;
