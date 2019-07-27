import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {user:{}};
  }

  componentDidMount() {
    this.init();
  };

  async init () {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    this.setState({ user });
  }

  signout() {
    AsyncStorage.removeItem('user');
    Actions.login({type: 'reset'});
  }

  render() {
    const {name, email} = this.state.user;
    if (!name) {
      return (<Text>Loading...</Text>)
    }

    return (
      <View style={styles.container}>

          <View style={styles.info}>
            <Text style={styles.title}> Name of User </Text>
            <Text style={styles.title}> :  {name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.title}> Email Address </Text>
            <Text style={styles.title}> :  {email}</Text>
          </View>

          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Want to login from another account ?</Text>
            <TouchableOpacity onPress={this.signout.bind(this)}><Text style={styles.signupButton}>Signout</Text></TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toptitle: {
    backgroundColor: '#81ebeb',
    color: '#008080',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: "center",
    height: 30,
    paddingTop: 2,
  },

  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000000',
    backgroundColor: '#cbf7f4',
  },
  info: {
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'center',
    color: "#008080",
  },
  userhead: {
    fontSize: 18,
    alignSelf: 'center',
    color: "#008080",
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#008080',
    fontSize: 16,
  },
  signupButton: {
    color: '#008080',
    fontSize: 16,
    fontWeight: '500',
  }

});

export default Home;
