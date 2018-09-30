import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../../services/transformForecast';

import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem
            key={ `${forecast.weekDay}${forecast.hour}` }
            weekDay={ forecast.weekDay }
            hour={ forecast.hour }
            data={ forecast.data } />)
    );
}
    
const renderProgress = () => {
    return "Cargando pronóstico extendido";
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <div className='forecast-title'>Pronostico Extendido para { city }</div>
        { forecastData ?
            renderForecastItemDays(forecastData) : 
            renderProgress()
        }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;