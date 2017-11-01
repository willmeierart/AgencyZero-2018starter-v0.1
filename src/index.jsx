import React from 'react'
import ReactDOM from 'react-dom'
import AppProvider from './__config/AppProvider'
import registerServiceWorker from './__config/registerServiceWorker'

ReactDOM.render(
  <AppProvider/>,
  document.getElementById('root')
)
registerServiceWorker()
