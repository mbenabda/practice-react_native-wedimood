import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './createStore'

import Categorize from './scenes/Categorize'
import MoodPicker from './scenes/MoodPicker'

class App extends Component {
  render() {
    // return (
    //   <Provider store={store}>
    //     <Categorize />
    //   </Provider>
    // )

    return (
      <Provider store={store}>
        <MoodPicker />
      </Provider>
    )
  }
}
module.exports = App
