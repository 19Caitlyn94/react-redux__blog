import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import PostsIndex from './components/posts_index' ;
import PostsNew from './components/posts_new' ;
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Home extends React.Component {
  render() { return <div>Home!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/posts/new" component={PostsNew} /> {/* Bugfix - most specific routes at the top */}
      <Route exact path="/" component={PostsIndex} />
    </Switch>
    </div>
  </BrowserRouter> 
  </Provider>
  , document.querySelector('.container'));
