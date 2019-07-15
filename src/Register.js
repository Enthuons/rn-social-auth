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

class Register extends Component {


  onClickBack() {
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      <ScrollView vertical={true}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Register</Text>
          <View>
            <View style={styles.formGroup}>
              <Text style={styles.InputLabel}>Email</Text>
              <TextInput
                style={styles.InputField}
                placeholder="enter email ID"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.InputLabel}>Password</Text>
              <TextInput
                style={styles.InputField}
                secureTextEntry={true}
                placeholder="enter Password"
              />
            </View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text >
                Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.loginText}>Register as Social Media</Text>
          {/* <View style={styles.borderRed}> */}
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <ScrollView horizontal={true}>
                <TouchableOpacity
                  style={styles.buttonContainerSocial}
                  style={{
                    backgroundColor: '#4a91e8',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Facebook
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#e24c38',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Google
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f24179',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Instagram
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#58aed8',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    LinkdIn
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ff4c4c',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Pintrest
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5db7ef',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Twiter
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f7b647',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Amazon
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#bc68e2',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Github
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4aa1db',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    WordPress
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#9443db',
                    width: 100,
                    padding: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Yahoo
                </Text>
                </TouchableOpacity>
              </ScrollView>
            {/* </View> */}
          </View>
        </View>

        <View style={[styles.container, {marginBottom: 30,}]}>
          <Text style={styles.loginText}>Not a user</Text>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text >
                  Go back
                </Text>
              </TouchableOpacity>
            </View>
        </View>

        </ScrollView>
      </View>
    );
  }
}

export default Register;
