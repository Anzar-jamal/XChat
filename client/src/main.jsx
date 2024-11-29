import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CssbaseLine} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CssbaseLine/>

      <App/>
    </HelmetProvider>
  </StrictMode>,
)