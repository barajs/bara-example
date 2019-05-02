import { nameOfTouchableOpacity, whenTouchableOpacityPress } from 'bara-react'

export function useWelcome() {
  return whenTouchableOpacityPress(nameOfTouchableOpacity('bara-button'))(
    () => {
      alert('Welcome to Bara React Native example!')
    },
  )
}
