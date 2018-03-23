import axios from 'axios';
//import DarkSkyApi from 'dark-sky-api';

import { FETCH_FIVE_DAYS_WEATHER,
         FETCH_LOCATION, 
         FETCH_TODAY_WEATHER } from './fetch_weather';

import { Open_Weather_Key,
         DarkSky_Weather_Key,
         Gmap_Api_Key } from './keyValue';

//const TodayURL = `http://api.openweathermap.org/data/2.5/weather?appid=${Weather_Key}`;
const FiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Open_Weather_Key}`;
const GoogleURL = 'https://maps.googleapis.com/maps/api/geocode/json?address';


export function weatherInfo(branch_city) {

    const URL = `${ FiveDaysURL }&q=${ branch_city },canada`;

    const request = axios.get(URL);

    return ({

        type: FETCH_FIVE_DAYS_WEATHER,
        payload: request 

    });

}

export function location(branch_city) {
    console.log('action location', branch_city)

    const  URL = `${GoogleURL}=${branch_city}&key=${Gmap_Api_Key}`;

    const request = axios.get(URL);

    return ({

        type: FETCH_LOCATION,
        payload: request
        
    });

}

export function todayWeatherInfo (lat, lng) {

    const URL = `https://api.darksky.net/forecast/${DarkSky_Weather_Key}/${lat},${lng}`;

    const request = axios.get(URL);
    /*
    const position = { 
    
            latitude: lat, 
            longitude: lng
    
    };

    DarkSkyApi.apiKey = DarkSky_Weather_Key;
    const request = DarkSkyApi.loadCurrent(position);
    
    //  console.log('request in Fetch Today Weather : ', request);
    */
    return ({

        type: FETCH_TODAY_WEATHER,
        payload: request
        
    });
                        
}




/*
export function todayWeatherInfo (branch_city) {

    const URL = `${ TodayURL }&q=${ branch_city },ca`;

    const request = axios.get(URL);

   // console.log('request in actions: ', request)

   

    return ({

        type: FETCH_TODAY_WEATHER,
        payload: request 

    });
                        
}
*/




/*
export function location(branch_city) {

    console.log(googleURL);

    const geoURL = `${googleURL}=${branch_city}&key=${Gmap_Api_Key}`;

    const request = axios.get(geoURL);

        return ({

            type: FETCH_LOCATION,
            payload: request 
    
        });

}
*/




