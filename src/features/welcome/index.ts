import { nameOfTouchableOpacity, useTouchableOpacityPress } from 'bara-react'

export function useWelcome() {
  return useTouchableOpacityPress(
    { nameOf: nameOfTouchableOpacity('bara-button') },
    () => {
      return
    },
  )
}
