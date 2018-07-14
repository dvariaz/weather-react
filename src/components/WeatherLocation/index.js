import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ api_key }`;

const data1 = {
        temperature: 30,
        weatherState: SUN,
        humidity: 50,
        wind: '20 m/s'
};

class WeatherLocation extends Component {
        
        state = {
                        city : 'Buenos Aires',
                        data : data1
                };
                
        getWeatherState = (weather_data) => {
                return SUN;
        };
                
        getTemperature = kelvin => {
                return convert(kelvin).from('K').to('C');
        };
        
        getData = (weather_data) => {
                const { humidity, temp } = weather_data.main;
                const { speed } = weather_data.wind;
                const weatherState = this.getWeatherState(this.weather);
                const temperature = this.getTemperature(temp);
                
                const data = {
                        humidity,
                        temperature,
                        weatherState,
                        wind: `${speed} m/s`
                }
                
                return data;
        };
        
        handleUpdateClick = () => {
                fetch(api_weather).then(data => {
                        return data.json();
                }).then( weather_data => {
                        const data = this.getData(weather_data);
                        this.setState({ data });
                });
                /*
                this.setState({ data: data2 });
                */
        };
        
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