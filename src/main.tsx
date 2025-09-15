import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { Dashboard } from './root/dashboard'
import { ServicesPage } from './root/servicesPage'
import { AboutPage } from './root/about'
import { ContactPage } from './root/contact'

createRoot(document.getElementById('root')!).render(
  <StrictMode>    
    <Dashboard />
    <ServicesPage />
    <AboutPage />
    <ContactPage />
  </StrictMode>
)
