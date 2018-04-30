import { MENU_ORDERED } from '../actions/fetch_guestbooks';

export default function (state = [], action) {

    switch (action.type) {

        case MENU_ORDERED:
        console.log('action', action.payload);
        return action.payload;
    
    }

    return state;    

}