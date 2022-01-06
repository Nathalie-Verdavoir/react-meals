import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './noAds';
import App from './App';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { mealApi } from './services/mealApi';
import { drinkApi } from './services/drinkApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


const store = configureStore({
  reducer: rootReducer,
  middleware: ( getDefaultMiddleware ) =>
      getDefaultMiddleware().concat( mealApi.middleware ).concat( drinkApi.middleware ),
}
)

setupListeners(store.dispatch)
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


