import axios from 'axios';
import DarkSkyApi from 'dark-sky-api';

import { FETCH_FIVE_DAYS_WEATHER,
         FETCH_LOCATION, 
         FETCH_TODAY_WEATHER,
         FETCH_ADDITIONAL_TODAY_WEATHER } from './fetch_weather';

import { Open_Weather_Key,
         DarkSky_Weather_Key,
         Gmap_Api_Key } from './keyValue';

import { FETCH_GUESTBOOKS,
         CREATE_GUESTBOOK,
         MENU_ORDERED,
         FETCH_GUESTBOOK,
         DELETE_GUESTBOOK,
         FETCH_USER_GUESTBOOK } from './fetch_guestbooks';

const TodayURL = `http://api.openweathermap.org/data/2.5/weather?appid=${Open_Weather_Key}`;
const FiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Open_Weather_Key}`;
const GoogleURL = 'https://maps.googleapis.com/maps/api/geocode/json?address';
const guestbookURL = 'https://vast-wave-33154.herokuapp.com';

export function weatherInfo(branch_city) {

    const URL = `${ FiveDaysURL }&q=${ branch_city },canada`;

    const request = axios.get(URL);

    return ({

        type: FETCH_FIVE_DAYS_WEATHER,
        payload: request 

    });

}

export function location(branch_city) {

    const  URL = `${GoogleURL}=${branch_city}&key=${Gmap_Api_Key}`;

    const request = axios.get(URL);

    return ({

        type: FETCH_LOCATION,
        payload: request
        
    });

}

export function todayWeatherInfo (lat, lng) {
    
    const position = { 
    
            latitude: lat, 
            longitude: lng
    
    };

    DarkSkyApi.apiKey = DarkSky_Weather_Key;
    const request = DarkSkyApi.loadCurrent(position);
    
    return ({

        type: FETCH_TODAY_WEATHER,
        payload: request
        
    });
                        
}

export function additionalTodayWeatherInfo (branch_city) {

    const URL = `${ TodayURL }&q=${ branch_city },ca`;

    const request = axios.get(URL);

    return ({

        type: FETCH_ADDITIONAL_TODAY_WEATHER,
        payload: request 

    });
                        
}

export function fetchGuesbookLists() {

    const url = `${ guestbookURL }/guests`;

    const request = axios.get(url);

    console.log('request of fetchGuestbookLists: ', request);

    return ({

        type: FETCH_GUESTBOOKS,
        payload: request 

    });
                        
}

export function createGuestbook(guestbook, callback) {

    console.log(guestbook);

    const url = `${ guestbookURL }/guests`;

    const request = axios.post(url, guestbook)
        .then(() => {

            callback();

        });
    
    return ({

        type : CREATE_GUESTBOOK,
        payload: request
            
    });

}

export function storeOrders(orders) {

    console.log(orders, 'orders in action');
    return {

        type: MENU_ORDERED,
        payload: orders

    }

}

export function fetchGuestbook(id) {

    const url = `${ guestbookURL }/guests/${ id }`;

    const request = axios.get(url);
    console.log('request: ', request);

    return ({

        type : FETCH_GUESTBOOK,
        payload: request
            
    });

}

export function fetchUserGuestbook(loginInfo, callback) {

    const url = `${ guestbookURL }/guests/login`;

    const request = axios.post(url, loginInfo)
        .then(() => {

             callback();

        });

    console.log('request: ', request);

    return ({
        
        type : FETCH_USER_GUESTBOOK,
        payload: request
            
    });

}
