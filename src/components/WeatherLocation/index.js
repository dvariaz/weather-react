import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import './styles.css';

const location = "Cartago,co";
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ api_key }`;

class WeatherLocation extends Component {
        
        state = {
                        city : 'Cartago',
                        data : null
                };
        
        handleUpdateClick = () => {
                fetch(api_weather).then(data => {
                        return data.json();
                }).then( weather_data => {
                        const data = transformWeather(weather_data);
                        this.setState({ data });
                });
                /*
                this.setState({ data: data2 });
                */
        };
        
        componentWillMount() {
                this.handleUpdateClick();
        }
        
        render = () => {
                const { city, data } = this.state;
                
                return(
                        <div className="WeatherLocationCont">
                                <Location city={ city } />
                                <WeatherData data={ data } />
                                <button onClick={ this.handleUpdateClick }>Actualizar</button>
                        </div>
                );
        };
};
    
export default WeatherLocation;