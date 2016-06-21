import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

class Action extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.action}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  action: {
  },
})

module.exports = Action
