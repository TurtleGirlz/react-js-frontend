/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from "react-moralis";

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appId ='enter id here'
const serverUrl ='enter serverurl here'


root.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>

    <App />
    </MoralisProvider>,

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

