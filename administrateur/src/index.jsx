import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider }  from "react-auth-kit"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider 
  authType={'cookie'}
  authName={'_auth_name'}
  cookieDomain={window.location.hostname}
  cookieSecure={window.location.protocol === 'https:'}
  cookieSameSite={'Strict'}>
    <Router>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
    </AuthProvider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
