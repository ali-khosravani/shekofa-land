import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import { BrowserRouter } from 'react-router-dom';

/* Vendor CSS Files */
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>    
    <App />        
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
