import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {

  // better to have the list at the top level, so that 
  // everything below it can also use the data from the list
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {
          item: "",
          units: "",
          quantity: 0,
          isPurchased: false
        },

        {
          item: "",
          units: "",
          quantity: "",
          isPurchased: false
        }

      ]
    }
  }

  render() {

    return (
      <div className="App">
        <List listprop = {this.state}/>
        {/* <List /> */}
      </div>
    )
  }

}


export default App;
