import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import { connect } from 'react-redux'
import { actions } from '../model/mood'

class MoodPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(props.ratings)
    }
  }

  renderRating(rating) {
    const onRateMood = () => {
      this.props.onRateMood(rating.id)
    }

    return (
      <TouchableOpacity onPress={onRateMood.bind(this)}>
        <View style={styles.ratingContainer}>
          <View style={[styles.smiley, styles['rating_' + rating.id]]} />

          <Text style={styles.rating} key={rating.id}>
            {rating.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRating.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ratingContainer: {

  },

  smiley: {
      backgroundColor: '#f4f499',
      borderRadius: 40,
      height: 80,
      width: 80,
      borderColor: 'black',
      borderWidth: 3,
      margin: 5,
      alignItems: 'center',
      alignSelf: 'center'
  },

  rating_angry: { backgroundColor: '#d73b3e' },
  rating_awesome: { backgroundColor: '#00ff00' },

  rating: {
  }
})

module.exports = connect(
  ({mood}) => ({
    ratings: mood.availableRatings
  }),
  (dispatch) => ({
      onRateMood: (rating) => {
        dispatch(actions.rateMood(rating))
      }
  })
)(MoodPicker)
