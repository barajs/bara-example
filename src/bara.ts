import {useTouchableOpacityStream} from 'bara-react';
import {useWelcome} from './features/welcome';

export default () => {
  useTouchableOpacityStream();
  useWelcome();
};
