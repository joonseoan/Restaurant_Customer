import { combineReducers } from 'redux';

import selectedCityWeather  from './selected_city_weather';
import branchLocation from './branch_location';
import todayWeather from './today_weather';
import additionalTodayWeather from './additional_today_weather';
import menu from './menu';

const reducers = combineReducers({
    
    selectedCityWeather,
    branchLocation,
    todayWeather,
    additionalTodayWeather,
    menu

});

//console.log('selectedCityWeather:  ', selectedCityWeather);

export default reducers;