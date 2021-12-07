import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Import Styles ------------------------------ */ 

// Base Styles
import './style/reset.css';
import './style/Variables.scss';
import './style/Type.scss';

// Component Styles
import './style/App.scss';
import './style/Work.scss';
import './style/Nav.scss';
import './style/About.scss';


/* Render Web App ------------------------------ */ 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
