import { FETCH_FIVE_DAYS_WEATHER } from '../actions/fetch_weather';

export default function (state = null, action) {

    switch (action.type) {

        case FETCH_FIVE_DAYS_WEATHER:

           // console.log('FETCH_FIVE_DAYS_WEATHER: ', action.payload.data);

            /** reminder: must use "payload" */
            //console.log('action.payload :  ', action.payload.data)
            return action.payload.data;
        /*
        case FETCH_TODAY_WEATHER:

            console.log('FETCH_TODAY_WEATHER: ', action.payload.data)
            return action.payload.data;
        */

    }

    return state;    

}