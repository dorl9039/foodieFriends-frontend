import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './hooks/useAuth.jsx'
import App from './App.jsx'
import './index.css'
import '@fontsource/aileron/400.css';
import "@fontsource/aileron/600.css";
import "@fontsource/source-serif-pro/600.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)
