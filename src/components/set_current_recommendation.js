import React, { Component } from 'react';
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

        const getWeather = regexFilter(mainWeather);
        
        let feelTemp = _.round((temperature - 32) / 1.8);
        feelTemp = parseInt(feelTemp);
       
        const indexValue = setWeather(getWeather);
        console.log('indexValue: ', indexValue);
    
        // const  { soup, main, side, drink } = inputMenus;
    
        return (

            
            
            
                <RecommendedMenu menu = { inputMenus } temp = { feelTemp } value = { indexValue } />
                /*<File menu = { inputMenus } temp = { feelTemp } value = { indexValue } />
                <Price menu = { inputMenus } temp = { feelTemp } value = { indexValue } /> */
              
            
    
        );

    
    
}

/*
    
    console.log('InputMenus: ', inputMenus)
    const RecommendedMenues = [];

    
    if (indexValue >= 0 && indexValue < 2) {

        

        
        

        console.log(menu.soup[0]);


    } else if (indexValue >= 2 && indexValue < 4) {

        console.log(menu.soup[1]);

        return (

            menu.soup[1].id_1
        );


    } else {

        return (
            menu.soup[2].id_2

        );

        console.log(menu.soup[2]);

    }
    */

    





/*
    switch (getWeather) {

        case 'Clear':

            indexValue = weather_food_index[0];

            if (feelTemp > 20) {

                indexValue = indexValue + temp_food_index[0];

            } else if (feelTemp > 15 && feelTemp <= 20) {

                indexValue = indexValue + temp_food_index[1];

            } else if (feelTemp > 10 && feelTemp <= 15) {

                indexValue = indexValue + temp_food_index[2];
            
            } else if (feelTemp > 5 && feelTemp <= 10) {

                indexValue = indexValue + temp_food_index[3];

            } else {

                indexValue = indexValue + temp_food_index[4];

            }

            break;
        
            default:
            

    }*/

