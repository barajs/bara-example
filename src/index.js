/**
 * @format
 */

import { register } from 'bara'
import { useReactApp } from 'bara-react'
import App from './App'
import registerBaraFeatures from './bara'

const bara = register(() => {
  useReactApp({ name: 'bara-demo', isNative: false, App })
  registerBaraFeatures()
})