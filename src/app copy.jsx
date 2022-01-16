
import './app.css';

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Year from './components/year';

const YEARS = 30
class App extends Component {
  state = {

    yearList : [...Array(YEARS).keys()].map((idx) => idx + new Date().getFullYear() - parseInt(YEARS / 2))
}

  render() {
    return (
    <>
    <Navbar />    
    <Year yearList = {this.state.yearList}/>
    
    </>      
    );
  }
}

export default App;

