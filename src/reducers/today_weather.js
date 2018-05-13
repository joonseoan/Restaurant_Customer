import { FETCH_TODAY_WEATHER } from '../actions/fetch_weather';

export default function (state = null, action) {

    switch (action.type) {

        case FETCH_TODAY_WEATHER:

        // console.log('TODAY_WEATHER action.payload', action.payload);
        return action.payload;
    
    }

    return state;    

}

