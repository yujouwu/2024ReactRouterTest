import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

// import './index.css'
import './assets/scss/all.scss'
import router from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
