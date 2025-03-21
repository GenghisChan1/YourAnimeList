import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalcontextProvider } from './context/global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalcontextProvider>
      <App />
    </GlobalcontextProvider>
  </StrictMode>,
)
