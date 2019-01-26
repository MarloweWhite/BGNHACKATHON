import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from './card.js'


class App extends Component {
  render() {
    return (
      <div className="title">
        Lantern
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet"></link>
        <div class="container">
          <Card className="cards"></Card>
          <Card className="cards"></Card>
          <Card className="cards"></Card>
        </div>
      </div>
      
    );

  }
}

export default App;
