import { useInitStream } from 'bara'
import { useTouchableOpacityStream } from 'bara-react'
import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useInitStream()
  useTouchableOpacityStream()
}

export const useTriggers = () => {
  useWelcome()
}

export default () => {
  useStreams()
  useTriggers()
}
