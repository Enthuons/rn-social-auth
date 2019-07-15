// import React, { Component } from 'react';
// import Root from './Root'

// class App extends Component {
//   render() {
//     return (
//         <Root />
//     );
//   }
// }

// export default App;

// ----------------------------


import React, { Component } from 'react';
// import { Provider, connect } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './Login';
import Register from './Register';

import Welcome from './Welcome';
import Home from './Home';

// import store from './store';
import AppRoutes from './navigation';

// const RouterWithRedux = connect()(Router);

class App extends Component {
  render() {
    return (
      // <Provider>
      //   <RouterWithRedux scenes={AppRoutes} />
      // </Provider>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" initial = {true}/>
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Register} title="Register"/>
        </Stack>
      </Router>
    );
  }
}

export default App;
