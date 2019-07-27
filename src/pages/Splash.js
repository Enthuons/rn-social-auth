import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

class Splash extends Component {
  
  componentDidMount() {
    this.init();
  };

  async init () {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      Actions.auth({type: 'reset'});
    } else {
      Actions.login({type: 'reset'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Splash;
