import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import './styles.css';

const api_url = 'http://api.openweathermap.org/data/2.5/weather';
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';

class WeatherLocation extends Component {
        
        constructor({ city }){
                super();
                this.state = {
                        city,
                        data: null
                };
        }
        
        componentWillMount() {
                const { city } = this.state; 
                const api_weather = `${ api_url }?q=${ city }&appid=${ api_key }`;
                fetch(api_weather).then(data => {
                        return data.json();
                }).then( weather_data => {
                        if(weather_data.cod === '404'){
                                this.setState({
                                        city: 'Ciudad no encontrada',
                                        data: null
                                });
                        }else{
                                const data = transformWeather(weather_data);
                                this.setState({ data });
                        }
                });
        }
        
        render = () => {
                const { city, data } = this.state;
                
                return(
                        <div className="WeatherLocationCont">
                                <Location city={ city } />
                                <WeatherData data={ data } />
                        </div>
                );
        };
}
    
    
WeatherLocation.propTypes = {
        city: PropTypes.string
}

export default WeatherLocation;