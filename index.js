/**
 * @format
 */

import {register} from 'bara';
import {useReactApp, useTouchableOpacityStream} from 'bara-react';
import App from './src/App';
import {name as appName} from './app.json';
import registerBaraFeatures from './src/bara';

register(() => {
  useReactApp({name: appName, isNative: true, App});
  registerBaraFeatures();
});
