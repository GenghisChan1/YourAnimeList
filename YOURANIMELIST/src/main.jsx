import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBouondary.jsx'
import { GlobalcontextProvider } from './globalcontext/global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <GlobalcontextProvider>
        <App />
      </GlobalcontextProvider>
    </ErrorBoundary>
  </StrictMode>,
)
