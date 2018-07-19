import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
  
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${ city }`);
    
  };
  
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className='red'>MD</div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className='green'>MD</div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className='blue'>MD</div>
          </Col>
        </Row>
      </Grid>
      /*<div className="App">
        <LocationList cities={ cities } 
          onSelectedLocation= { this.handleSelectedLocation }/>
      </div>*/
    );
  }
}

export default App;