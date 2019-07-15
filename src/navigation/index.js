/**
 * App Navigation
 */
import React from 'react';
import { View } from 'react-native';
import { Actions, Scene, Drawer } from 'react-native-router-flux';

import Test from './test/Welcome.js';

/* Routes */
export default Actions.create(
  <Scene
    key="root"
    hideNavBar
    titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}
    renderRightButton={() => <View />}
  >
    <Scene
      key="test"
      component={Test}
      title="Test"
      hideNavBar
    />
  </Scene>,
);
