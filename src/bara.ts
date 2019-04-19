import { useBarnStream, useInitStream, useTimerStream } from 'bara'
import { useTouchableOpacityStream } from 'bara-react'
import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useInitStream()
  useTimerStream()
  useTouchableOpacityStream()
  useBarnStream({
    section: '',
    videoTopicList: [],
    videoList: [],
    audioData: [],
  })
}

export const useTriggers = () => {
  useWelcome()
}

export default () => {
  useStreams()
  useTriggers()
}
