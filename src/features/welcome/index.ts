import core from '@vgm/tv-core'
import { setBarnState, useTimerElapsed } from 'bara'
import {
  classOfTouchableOpacity,
  nameOfTouchableOpacity,
  useBarnState,
  useTouchableOpacityPress,
} from 'bara-react'

export function useWelcome() {
  useTimerElapsed(5, () => {
    setBarnState('section', 'Video')
  })
  return useTouchableOpacityPress(
    { classOf: classOfTouchableOpacity('button') },
    ({ name }) => {
      setBarnState('section', name)
    },
  )
}
