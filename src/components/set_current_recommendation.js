import React from 'react';
import _ from 'lodash';

import RecommendedMenu from './recommended_menu';


const weatherCategories = [ 'Clear', 'Cloud', 'Drizzle', 'Mist', 'Rain', 'Snow' ];

function regexFilter(weather) {
    
    let result;
    weatherCategories.map( (data) => {

        const patt = new RegExp(`${data}+`, 'i');

        if (weather.match(patt))
        result = weather.match(patt);

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

        console.log('inputMenu', inputMenus)

        const getWeather = regexFilter(mainWeather);
        
        let feelTemp = _.round((temperature - 32) / 1.8);
        feelTemp = parseInt(feelTemp);
       
        const indexValue = setWeather(getWeather);
        console.log('indexValue: ', indexValue);
    
        return (

                <RecommendedMenu menu = { inputMenus } temp = { feelTemp } value = { indexValue } />
               
        );

}

