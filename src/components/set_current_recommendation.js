import React from 'react';
import _ from 'lodash';

import RecommendedMenu from './recommended_menu';

const weatherCategories = [ 'Clear', 'Cloud', 'Drizzle', 'Mist', 'Rain', 'Snow', 'Haze', 'Thunderstorm' ];

function regexFilter(weather) {
    
    console.log('weather:', weather);

    let result;
    weatherCategories.map( (data) => {

        const patt = new RegExp(`${data}+`, 'i');

        if (weather.match(patt))
        result = weather.match(patt);

        return;
    
    });

    return result[0];

}

function setWeather (getWeather) {

    let indexValue
    weatherCategories.map((weather) => {

        if (getWeather === weather) {

            indexValue = weatherCategories.indexOf(getWeather);

        }

    });

    return indexValue;

}

export default function SetCurrentRecommendation (props) {

        const { inputMenus, temperature, mainWeather } = props;

        const getWeather = regexFilter(mainWeather);
        
        let feelTemp = _.round((temperature - 32) / 1.8);
        feelTemp = parseInt(feelTemp);
       
        const indexValue = setWeather(getWeather);
    
        return (

                <RecommendedMenu menu = { inputMenus } temp = { feelTemp } value = { indexValue } />
               
        );

}

