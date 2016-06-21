import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native'

import { connect } from 'react-redux'

class MoodPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(props.moods)
    }
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMood}
        />
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
