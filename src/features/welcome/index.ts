import {useTouchableOpacityPress, nameOfTouchableOpacity} from 'bara-react';

export function useWelcome() {
  return useTouchableOpacityPress(
    {nameOf: nameOfTouchableOpacity('bara-button')},
    () => {
      alert('Hello from Bara Button!');
    },
  );
}
