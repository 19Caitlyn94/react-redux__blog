import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import PostsIndex from './components/posts_index' 

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Home extends React.Component {
  render() { return <div>Home!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Route exact path="/" component={PostsIndex} />
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
