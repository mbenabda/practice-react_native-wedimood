import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native'

class ArrayItemPickerWithLabel extends Component {
  _renderItem({id, name}) {
    return (
      <Picker.Item label={name} value={id} key={id}/>
    )
  }

  render() {
    const {selectedValue, onValueChange, items} = this.props

    return (
      <View>
        <Text style={styles.label}>{this.props.label}</Text>
        <Picker style={styles.picker} selectedValue={selectedValue} onValueChange={onValueChange}>
          {items.map(this._renderItem)}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },

  picker: {
  }
})

module.exports = ArrayItemPickerWithLabel
