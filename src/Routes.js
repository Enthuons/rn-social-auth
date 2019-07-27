import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Splash from './pages/Splash';
 
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#008080',}} 
                titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                    <Scene key="splash" component={Splash}/>
                    <Scene key="auth" title="Home">
                        <Scene key="home" component={Home} hideNavBar/>
                    </Scene>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}
 
const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}