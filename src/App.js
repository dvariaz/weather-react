import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import orange from '@material-ui/core/colors/purple';

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2294d1',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

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
      <MuiThemeProvider theme={ theme }>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton style={{ 
                    position: 'absolute'
                }} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ 
                    margin: 'auto',
                    display: 'flex'
                }} color="inherit">
              <img className="App-logo" src="/img/logos/weather_logo.png" />
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid fluid style={{ padding: 0 }}>
          <Row style={{ margin: 0 }}>
            <Col xs={12} md={6} className="LocationList-container">
              <LocationListContainer cities={ cities }/>
            </Col>
            <Col xs={12} md={6} style={{ padding: 0 }}>
              <Paper zDepth={4}>
                <div className='detail'>
                  <ForecastExtendedContainer/>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;