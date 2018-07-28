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

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

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
  
  constructor(){
    super();
    this.state = { city: null };
  }
  
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${ city }`);
    
  };
  
  render() {
    const { city } = this.state;
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
                    margin: 'auto'
                }} color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={ cities } 
                onSelectedLocation= { this.handleSelectedLocation }/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  { 
                    city && <ForecastExtended city={ city }/>
                    
                  }
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