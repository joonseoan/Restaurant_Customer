import _ from 'lodash';

import { FETCH_LOGIN_GUESTBOOK } from '../actions/fetch_guestbooks';


export default function(state = null, action) {

    switch(action.type) {

        case FETCH_LOGIN_GUESTBOOK:
        
        //console.log('guestbook action.payload: ', action.payload.data);
        // return _.mapKeys(action.payload.data.list, '_id');

        console.log('action.payload.data: ', action.payload.data.guestbooks)
        return action.payload.data.guestbooks;
    
    }

    return state;

}