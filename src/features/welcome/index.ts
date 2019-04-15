import {useTouchableOpacityPress, nameOfTouchableOpacity} from 'bara-react';

export function useWelcome() {
  return useTouchableOpacityPress(
    {nameOf: nameOfTouchableOpacity('bara-button')},
    () => {
      console.log('Hello from Bara Button!');
    },
  );
}
