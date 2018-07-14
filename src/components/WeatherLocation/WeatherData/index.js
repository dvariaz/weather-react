import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../../constants/weathers';

import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const WeatherData = ({ data }) => {
    if(data){
        const { temperature, weatherState, humidity, wind } = data;
        return (
            <div className="weatherDataCont">
                <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>
        );
    }else{
        return (
            <div className="weatherDataCont">
                <CircularProgress size={60} />
            </div>
        );
    }
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherData;