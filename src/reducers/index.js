import { combineReducers } from 'redux';

import selectedCityWeather  from './selected_city_weather';
import branchLocation from './branch_location';
import todayWeather from './today_weather';

const reducers = combineReducers({
    
    selectedCityWeather,
    branchLocation,
    todayWeather

});

//console.log('selectedCityWeather:  ', selectedCityWeather);

export default reducers;