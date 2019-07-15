import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'column',
    // backgroundColor: '#000',
    // borderRadius: 4,
    // borderWidth: 0.5,
    borderColor: '#888',
  },

  container: {
    // flex: 1,
    padding: 10,
    marginTop: 20,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffe',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#888',
    // opacity: 0.8,
  },

  borderRed: {
    // borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },

  loginText: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },

  formGroup: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    // paddingHorizontal: 10,
  },
  InputLabel: {
    color: '#8392A7',
    padding: 10,
    // marginBottom: 10,
    fontSize: 16,
  },
  input: {
    // flex: 1,
    marginLeft: 20,
    // textAlign: 'right',
    borderBottomWidth: 0.25,
    borderBottomColor: '#111',
  },

  buttonContainer: {
    width: 160,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',
  },

  buttonContainerSocial: {
    width: 100,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#222',
    marginLeft: 10,
  },

  InputField: {
    padding: 10,
    backgroundColor: '#ffe',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',
    width: 240,
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

})

class Login extends Component {


  onClickLogin() {
    console.log('goto login page');
    Actions.login();
  }

  onClickRegister() {
    console.log('goto register page');
    Actions.register();
  }




  render() {
    return (
      <View style={styles.mainContainer}>
      <ScrollView vertical={true}>
        <View style={[styles.container, {marginBottom: 30,}]}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}
                onPress={this.onClickLogin}
              >
                <Text >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}
                onPress={this.onClickRegister}
              >
                <Text >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
        {/* </View> */}
        {/* <View style={[styles.container, {marginBottom: 30,}]}> */}
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text >
                  Guest
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
