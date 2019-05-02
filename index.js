/**
 * @format
 */

import { register } from 'bara'
import { withBara } from 'bara-react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import registerBaraFeatures from './src/bara'

AppRegistry.registerComponent(appName, () =>
  withBara(App, registerBaraFeatures),
)
