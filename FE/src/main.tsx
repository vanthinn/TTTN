// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './contexts/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 //  <React.StrictMode>
 <BrowserRouter>
  <AuthProvider>
   <App />
  </AuthProvider>
  <ToastContainer />
 </BrowserRouter>,
 //  </React.StrictMode>,
)
