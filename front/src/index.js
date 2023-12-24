import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import Header from './Component/Header/Header';
import CopyrightFooter from './Component/Footer/CopyrightFooter';
import Footer from './Component/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <CopyrightFooter />
  </React.StrictMode>
);
reportWebVitals();
