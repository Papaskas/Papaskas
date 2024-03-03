import React from 'react'
import Router from '@src/Router'
import ReactDOM from 'react-dom/client'
import '@sass/main.scss'
import '@src/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
