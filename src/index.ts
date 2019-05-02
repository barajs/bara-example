/**
 * @format
 */

// Security precaution
;(window as any).eval = global.eval = (payload: string) => {
  const error = new Error(`This app does not allow window.eval().`)
  Object.assign(error, { payload })

  throw error
}

import '@babel/polyfill'
import 'react-app-polyfill/ie9'

import { withBara } from 'bara-react'
import { ComponentType } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import registerBaraFeatures from './bara'

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('bara-demo', () =>
    withBara(AppComponent, registerBaraFeatures),
  )
  AppRegistry.runApplication('bara-demo', {
    rootTag: document.getElementById('root'),
  })
}

render(App)
