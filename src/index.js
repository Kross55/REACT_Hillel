import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './Redux_Todos_Thunk/App';
import "./Redux_Todos_Thunk/index.css"
import todoReducer from './Redux_Todos_Thunk/reducers/todoReducer';

const store = createStore(todoReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <Provider store={store}>
      <App />
    </Provider>     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


