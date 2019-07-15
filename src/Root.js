import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';

import Login from './Login';
import Welcome from './Welcome';


class Root extends Component {
render() {
  return(
    <View>
      <Welcome />
      {/* <Login /> */}
    </View>
  );
}
}

export default Root;
