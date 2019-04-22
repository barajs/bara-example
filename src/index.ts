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

import { register } from 'bara'
import { useReactApp } from 'bara-react'
import App from './App'
import registerBaraFeatures from './bara'

register(() => {
  registerBaraFeatures()
  useReactApp({ name: 'bara-demo', isNative: false, App })
})
