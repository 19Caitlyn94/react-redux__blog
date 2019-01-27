import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function( state = {}, action) { //state = {} is just defaulting state to an object
    switch (action.type) {
        case FETCH_POSTS: //get action
            return _.mapKeys(action.payload.data, 'id'); //action.payload.data - action that has fetched data is new array
        default:
            return state;
    }
}

