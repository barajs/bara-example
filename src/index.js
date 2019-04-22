/**
 * @format
 */

import { register } from 'bara'
import { useReactApp } from 'bara-react'
import App from './App'
import registerBaraFeatures from './bara'

register(() => {
  registerBaraFeatures()
  useReactApp({ name: 'bara-demo', isNative: false, App })
})
