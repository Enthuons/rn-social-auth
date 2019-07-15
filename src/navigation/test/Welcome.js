import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // container: {
  //   marginTop: 10,
  //   paddingHorizontal: 20,
  //   paddingVertical: 30,
  //   backgroundColor: '#FFF',
  //   borderColor: '#FFF',
  //   borderRadius: 10,
  //   borderWidth: 2,
  // },
  welcomeText: {
    marginTop: 20,
    color: 'green',
    fontSize: 30,
  },
})

class Welcome extends Component {
render() {
  return(
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
  );
}
}

export default Welcome;
