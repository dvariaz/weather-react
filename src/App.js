import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
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
        <AppBar position="static">
          <Typography variant="title" color="inherit">
            Weather App
          </Typography>
        </AppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={ cities } 
              onSelectedLocation= { this.handleSelectedLocation }/>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className='detail'></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;