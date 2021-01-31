import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sytle.css'
import { getFCP, getLCP, getFID, getCLS, getTTFB } from 'web-vitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


getFCP(console.log)
getLCP(console.log)
getFID(console.log)
getCLS(console.log, true)
getTTFB(console.log)