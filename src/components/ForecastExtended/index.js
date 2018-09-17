import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../../services/transformForecast';

import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: '10 m/s'
};
*/

const api_url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';

class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    
    componentDidMount(){
        this.updateCity(this.props.city);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const url_forecast = `${api_url}?q=${city}&appId=${api_key}`;
        
        fetch(url_forecast).then( 
            data => (data.json())
        ).then(
            weather_data => {
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                //console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }
    
    renderForecastItemDays(){
        return this.state.forecastData.map( forecast => (
            <ForecastItem
                key={ `${forecast.weekDay}${forecast.hour}` }
                weekDay={ forecast.weekDay }
                hour={ forecast.hour }
                data={ forecast.data } />)
        );
    }
    
    renderProgress = () => {
        return "Cargando pronóstico extendido";
    }
    
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        
        return (
            <div>
                <div className='forecast-title'>Pronostico Extendido para { city }</div>
                { forecastData ?
                    this.renderForecastItemDays() : 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;