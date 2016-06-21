import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'

import Categorize from './scenes/Categorize'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Categorize />
      </Provider>
    )
  }
}
module.exports = App
