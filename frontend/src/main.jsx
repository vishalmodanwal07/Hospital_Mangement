import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggablez
        pauseOnHover
        theme="dark"
        // transition={Slide}
      />
      <Provider store={store}>
      <App />
      </Provider>

    </ThemeProvider>
  </StrictMode>,
)
