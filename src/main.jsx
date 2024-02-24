import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx'
import { Router } from './router/Router.jsx'
import { AuthProvider } from './auth/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)
