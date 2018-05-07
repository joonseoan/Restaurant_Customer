import { USER_LOGIN } from '../actions/fetch_guestbooks';

export default function(state = null, action) {

    switch(action.type) {

        case USER_LOGIN:
        
        console.log('login action: ', action.payload)
        return action.payload || true;

    }

    return state;

}