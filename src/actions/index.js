import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=09098989";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request // Actual action (in this case a network request) the redux-promise middleware will automatically resolve the request whenever it sees it in the project
    }
}

export function createPost(values) {
    const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
    return {
        type: CREATE_POST,
        payload: request
    }
}