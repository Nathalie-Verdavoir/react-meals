import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './noAds';
import App from './App';

import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import { createBrowserHistory } from 'history';
const store = createStore(
  rootReducer 
)
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


