/**
 * @format
 */

//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

import {register} from 'bara';
import {useReactApp, useTouchableOpacityStream} from 'bara-react';
import App from './App';

// App Features
import {useWelcome} from './features/welcome';

register(() => {
  useReactApp('bara-example', App);
  useTouchableOpacityStream();
  useWelcome();
});
