import axios from 'axios';
import DarkSkyApi from 'dark-sky-api';

import { FETCH_LOCATION, 
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
         USER_LOGIN,
         FETCH_LOGIN_GUESTBOOK } from './fetch_guestbooks';

const TodayURL = `http://api.openweathermap.org/data/2.5/weather?appid=${Open_Weather_Key}`;
const GoogleURL = 'https://maps.googleapis.com/maps/api/geocode/json?address';
const guestbookURL = 'https://vast-wave-33154.herokuapp.com';

export function location(branch_city) {

    const  URL = `${GoogleURL}=${branch_city}&key=${Gmap_Api_Key}`;

    const request = axios.get(URL);

    return ({

        type: FETCH_LOCATION,
        payload: request
        
    });

}

export function todayWeatherInfo (lat, lng) {
    console.log(lat, lng)
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

    // const url = 'http://localhost:3000/guests';

    const request = axios.get(url);

    return ({

        type: FETCH_GUESTBOOKS,
        payload: request 

    });
                        
}

export function createGuestbook(guestbook, callback) {

    const url = `${ guestbookURL }/guests`;

    // const url = 'http://localhost:3000/guests';

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

    return {

        type: MENU_ORDERED,
        payload: orders

    }

}

export function fetchGuestbook(id) {

    const url = `${ guestbookURL }/guests/${ id }`;
    
    // const url = `http://localhost:3000/guests/${id}`;

    const request = axios.get(url);

    return ({

        type : FETCH_GUESTBOOK,
        payload: request
            
    });

}

export function userGuestbookLogin(loginInfo, callback) {

    const url = `${ guestbookURL }/guests/login`;
    
    // const url = 'http://localhost:3000/guests/login';

    return ({

        type : USER_LOGIN,
        payload: axios.post(url, loginInfo).then(() => {

               callback();

         })

    }); 
        
}

export function fetchLoginUserGuestbooks() {

    const url = `${ guestbookURL }/loginGuestbooks`;

    // const url = 'http://localhost:3000/loginGuestbooks';

    const request = axios.get(url);

    console.log('request: ', request);

    return ({

        type: FETCH_LOGIN_GUESTBOOK,
        payload: request 

    });
                        
}

export function deleteLoginUserGuestbook(id, callback) {

    axios.delete(`${ guestbookURL }/guests/${id}`)
        .then(() => {

            callback();

        });

    return {

        type: DELETE_GUESTBOOK,
        payload: id

    }

}
