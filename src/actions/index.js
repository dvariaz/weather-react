import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const api_url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${api_url}?q=${payload}&appId=${api_key}`;
        
        // Activar en el estado un indicador de busqueda de datos
        
        dispatch(setCity(payload));
        
        return fetch(url_forecast).then( 
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                // Modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
        
        return;
    }
};