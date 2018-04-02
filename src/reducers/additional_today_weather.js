import { FETCH_ADDITIONAL_TODAY_WEATHER } from '../actions/fetch_weather';

export default function (state = null, action) {

   // console.log('action', action);

    switch (action.type) {

        case FETCH_ADDITIONAL_TODAY_WEATHER:
        //console.log('additionalWeather', action.payload.data);
        return action.payload.data;
    
    }

    //console.log('additionalWeathe', state);

    return state;    

}