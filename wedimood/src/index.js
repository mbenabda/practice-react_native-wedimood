import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'

import Settings from './scenes/Settings'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Settings />
      </Provider>
    )
  }
}
module.exports = App
