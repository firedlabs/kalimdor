import React from 'react'
import ReactDOM from 'react-dom'
import { Styles } from '@firedlabs/design-system'
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <Styles />

    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
