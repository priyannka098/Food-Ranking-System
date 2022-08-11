import React from 'react';   //packages
import ReactDOM from 'react-dom/client';     //its react library which bring virtual Dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DishesContextProvider} from './context/DishesContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DishesContextProvider>    
    <App />
    </DishesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
