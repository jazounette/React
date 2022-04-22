import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import CompteurReducer from './réducteurs/CompteurReducer';
import RéduitKiki from './réducteurs/RéduitKiki';
// import store from './store/store';

// const store = configureStore({reducer:CompteurReducer});
const store = configureStore({reducer:RéduitKiki});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();