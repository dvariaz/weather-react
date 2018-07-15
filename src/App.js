import React, { Component } from 'react';
import LocationList from './components/LocationList';

import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Bogotá,co',
    'Santiago,cl',
    'Washington,us',
    'Madrid,es'
  ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={ cities } />
      </div>
    );
  }
}

export default App;