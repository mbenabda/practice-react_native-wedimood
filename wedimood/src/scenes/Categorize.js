import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
const { changeDepartment, changeTeam } = require('../model/me').actions

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

class Action extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.action}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

class Settings extends Component {
  constructor(props) {
    super(props)

    const pickADepartmentForMe = this.props.departments[0].id
    const pickATeamForMe = undefined

    this.state = {
      selectedDepartment: this.props.selectedDepartment || pickADepartmentForMe,
      selectedTeam: this.props.selectedTeam || pickATeamForMe,
    }

    this.onSave = (() => {
      this.props.onSave(this.state.selectedDepartment, this.state.selectedTeam)
    }).bind(this)

    this.onSkip = this.props.onSkip
  }

  _onDepartmentChange(deparment) {
    if(deparment !== this.state.selectedDepartment) {
      this.setState({
        selectedDepartment: deparment,
        selectedTeam: undefined
      })
    }
  }

  _onTeamChange(team) {
    this.setState({ selectedTeam: team })
  }

  _renderTeamPicker() {
    const teamsOfSelectedDepartment = this.props.teamsByDepartment[this.state.selectedDepartment] || []

    if(teamsOfSelectedDepartment.length === 0) {
      return null
    } else {
      return (
        <ArrayItemPickerWithLabel
          label="Pick your team"
          selectedValue={this.state.selectedTeam}
          items={teamsOfSelectedDepartment}
          onValueChange={this._onTeamChange.bind(this)}
          />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ArrayItemPickerWithLabel
          label="Pick your deparment"
          selectedValue={this.state.selectedDepartment}
          items={this.props.departments}
          onValueChange={this._onDepartmentChange.bind(this)}
          />

          {this._renderTeamPicker()}

        <Action text="OK" onPress={this.onSave}/>
        <Action text="Skip" onPress={this.onSkip}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontWeight: "bold",
  },

  picker: {
  }
});

module.exports = connect(
  ({me, organization}) => {
    return {
      departments: organization.departments,
      teamsByDepartment: organization.teamsByDepartment,
      selectedDepartment: me.department,
      selectedTeam: me.team,
    }
  },
  (dispatch) => {
    return {
      onSave: (department, team) => {
        dispatch(changeDepartment(department))
        .then(() => {
          dispatch(changeTeam(team))
        })
      },

      onSkip: () => {
        console.log("do nothing")
      },
    }
  }
)(Settings)
