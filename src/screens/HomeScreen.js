// eslint-disable-next-line no-unresolved, extensions
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { Sentry, SentrySeverity } from 'react-native-sentry';
import Config from 'react-native-config'

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

Sentry.config('https://6d68a84b890644159355ad7107b163d9:1d17963096ed45cba1d452d34146284c@sentry.io/192733').install();

Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

Sentry.setUserContext({
  email: 'donovanchabrat@hotmail.fr',
  userID: '134572',
  username: 'lenteurman',
  extra: {
    isAdmin: false,
  },
});

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  navigateToGreetings() {
    Sentry.captureMessage('NavigateToGreetings', {
      level: SentrySeverity.Info,
    });
    throw new Error('Ouups !');
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('NavigateToJsx', {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title={Config.ENV}
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title={Config.API_URL}
          />
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.string.isRequired,
};
