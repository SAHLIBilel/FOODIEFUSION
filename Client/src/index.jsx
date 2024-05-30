import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider}  from "react-auth-kit"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider 
      authType={'cookie'}
      authName={'_auth_name'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
      cookieSameSite={'Strict'}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
 </AuthProvider>
);

reportWebVitals();
