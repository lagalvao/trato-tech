import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'
import store from './store'

import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
