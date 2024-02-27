import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from '@src/Router';
import '@sass/main.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
