import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

let reactElement = document.getElementById('container')
render(
  <Provider store={store}>testtttt
    <Books />
  </Provider>,
  reactElement
)
