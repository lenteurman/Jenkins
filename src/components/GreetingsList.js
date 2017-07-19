import React, { Component, PropTypes } from 'react';
import { View, Alert } from 'react-native';
import _ from 'lodash';
import Greeting from './Greeting';

export default class GreetingsList extends Component {

  handleFunction() {
    Alert.alert(`Received: ${JSON.stringify(this.param)}`);
  }

  render() {
    const greetings = _.map(this.props.names, name => (
      <Greeting key={name} name={name} handleFunction={this.handleFunction} />));
    const alignement = 'center';
    return (
      <View style={{ alignItems: alignement }}>
        {greetings}
      </View>
    );
  }
}

GreetingsList.defaultProps = {
  names: [],
};

GreetingsList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
