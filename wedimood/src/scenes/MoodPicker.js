import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native'

import { connect } from 'react-redux'
import GridView from 'react-native-grid-view'

const MOODS_PER_ROW = 3

class MoodPicker extends Component {
  constructor(props) {
    super(props);
  }

  renderMood(mood) {
      return (
        <Text style={styles.mood} key={mood}>
          {mood}
        </Text>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <GridView
          itemsPerRow={MOODS_PER_ROW}
          renderItem={this.renderMood}
          items={this.props.moods}
          style={styles.grid}
        />
        <Text>yolo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  grid: {

  },

  mood: {
    width: 100,
    height: 100,
    padding: 20,
    margin: 5,
    borderRadius:50,
    borderColor: 'black',
  }
})

module.exports = connect(
  (state) => ({
    moods: [
      "angry", "sad", "bored",
      "fine", "happy", "awesome"
    ]
  }),
  (dispatch) => ({})
)(MoodPicker)
