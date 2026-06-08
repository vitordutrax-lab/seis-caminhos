import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
} from 'react-router-dom'

import {
  Toaster,
} from 'react-hot-toast'

import App from './App'

import { AuthProvider } from './contexts/AuthContext'

import './styles/global.css'

ReactDOM.createRoot(
  document.getElementById(
    'root',
  )!,
).render(
  <AuthProvider>

    <BrowserRouter>

      <App />

      <Toaster
        position="top-right"

        toastOptions={{
          duration: 3200,

          style: {
            background:
              'linear-gradient(to bottom, #121212, #080808)',

            color:
              '#f0d39a',

            border:
              '1px solid rgba(184, 139, 69, 0.35)',

            borderRadius:
              '12px',

            padding:
              '14px 16px',

            fontSize:
              '15px',

            boxShadow:
              '0 0 24px rgba(0,0,0,0.55)',

            textShadow:
              '0 0 8px rgba(240, 211, 154, 0.12)',
          },

          success: {
            iconTheme: {
              primary:
                '#b88b45',

              secondary:
                '#111',
            },
          },

          error: {
            iconTheme: {
              primary:
                '#d97b7b',

              secondary:
                '#111',
            },
          },
        }}
      />

    </BrowserRouter>

  </AuthProvider>,
)