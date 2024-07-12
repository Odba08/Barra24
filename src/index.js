import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hero from './Components/Hero/hero';
import App from './Components/slider/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Hero />
    {/* <App /> */}
  </React.StrictMode>
);


reportWebVitals();
