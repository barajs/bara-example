import { useTouchableOpacityStream } from 'bara-react'
import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useTouchableOpacityStream()
}

export const useTriggers = () => {
  useWelcome()
}

export default () => {
  useStreams()
  useTriggers()
}
