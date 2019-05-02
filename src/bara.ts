import { useInitStream } from 'bara'
import { useComponentsStream } from 'bara-react'

import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useInitStream()
  useComponentsStream()
}

export const useTriggers = () => {
  useWelcome()
}

export default () => {
  useStreams()
  useTriggers()
}
