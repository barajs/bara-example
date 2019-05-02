import { nameOfTouchableOpacity, whenTouchableOpacityPress } from 'bara-react'

export function useWelcome() {
  return whenTouchableOpacityPress(nameOfTouchableOpacity('bara-button'))(
    () => {
      return
    },
  )
}
