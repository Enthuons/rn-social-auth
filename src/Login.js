import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

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


  componentDidMount() {

    console.log('GoogleSignin :', GoogleSignin);
    console.log('GoogleSigninButton :', GoogleSigninButton);
    


    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "768207801800-ototv0s2p4b9gdj0iogq1sl31lh0oi0d.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    })
    
     GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
        console.log('play service success');
      })
      .catch((err) => {
        console.log('play service error : ', err);
      });

   
  }

  facebookLogin() {
    console.log('facebook login');
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then(function(result){
        if(result.isCancelled) {
          console.log('login was cancelled');
        } else {
          console.log('login was success :', result.grantedPermissions.toString()); 
        }
      }, function(error) {
        console.log('An error occured : ', error);
      })
  }

  onClickSocialLogin(key) {
    if(key === 'facebook') {
      // facebook login
      this.facebookLogin();
    } else if (key === 'google') {
      console.log('google login');
      // google login
      this.googleLogin;
    }

  }

  onClickRegister() {
    console.log('goto register page');
    Actions.register();
  }


  render() {
    return (
      <View style={styles.mainContainer}>
      <ScrollView vertical={true}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
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
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.loginText}>Login as Social Media</Text>
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
                  onPress={() => this.onClickSocialLogin('facebook')}
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
                  onPress={() => this.onClickSocialLogin('google')}
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
          <Text style={styles.loginText}>Login as Facebook</Text>
            
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
              {/* <TouchableOpacity style={styles.buttonContainer}
                onPress={this.onClickRegister}
              >
                <Text >
                  Register Now
                </Text>
              </TouchableOpacity> */}

<View>
              <LoginButton
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      console.log("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          console.log(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.log("logout.")}/>
            </View>

            </View>

        </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
