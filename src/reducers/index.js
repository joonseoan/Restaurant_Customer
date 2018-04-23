import { combineReducers } from 'redux';

import selectedCityWeather  from './selected_city_weather';
import branchLocation from './branch_location';
import todayWeather from './today_weather';
import additionalTodayWeather from './additional_today_weather';
import menu from './menu';
import guestbooks from './guestbooks';

const reducers = combineReducers({
    
    selectedCityWeather,
    branchLocation,
    todayWeather,
    additionalTodayWeather,
    menu,
    guestbooks

});

export default reducers;