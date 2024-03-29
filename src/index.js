import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

/* Import Styles ------------------------------ */ 

// Base Styles
import './style/Base/reset.scss';
import './style/Base/Variables.scss';
import './style/Base/Type.scss';

// Page Styles
import './style/Pages/IntroPage.scss';
import './style/Pages/WorkPage.scss';
import './style/Pages/AboutPage.scss';
import './style/Pages/ProjectPage.scss';
import './style/Pages/ProjectPageSpecs.scss';

// Component Styles
import './style/Elements/Tooltip.scss';
import './style/Elements/NavBar.scss';
import './style/Elements/BackButton.scss';
import './style/Elements/ProjectGallery.scss';

/* Render Web App ------------------------------ */ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
