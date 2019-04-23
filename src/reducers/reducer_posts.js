import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST  } from '../actions';

export default function( state = {}, action) { //state = {} is just defaulting state to an object
    switch (action.type) {
        case FETCH_POST:
        return  {...state, [action.payload.data.id]: action.payload.data}//get action
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')//get action
        // return {...state} //action.payload.data - action that has fetched data is new array
        // case FETCH_POSTS: //get action
        //     const post = action.payload.data
        //     const newState = {...state};
        //     newState[post.id] = post; 
        // return {...state, [action.payload.data.id]: action.payload.data}
        default:
            return state;
    }
}

