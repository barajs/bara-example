import React, { useEffect, useReducer } from 'react'
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { ActionButton } from '../action-button'
import { Title } from '../title'
import { TimeIndicator } from './CurrentTimeIndicator'
import { PlayerControls } from './PlayerControls'
import { ScreenOverlay } from './ScreenOverlay'
import { SeekBar } from './SeekBar'

const styles = StyleSheet.create({
  playerNormal: {
    position: 'relative',
    height: 180,
    width: '100%',
  },
  playerFullScreen: {
    backgroundColor: '#000',
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export function VideoPlayer() {
  const duration = 932
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      currentTime: 0,
      playPause: false,
      active: false,
      seeking: false,
      buttonPress: false,
      fullscreen: false,
      pan: new Animated.ValueXY(),
    },
  )

  function onPlayPause() {
    setState({ playPause: !state.playPause })
  }

  function handleSeekStart(value: number) {
    return setState({ currentTime: value, seeking: true })
  }

  function handleSeekEnd(value: number) {
    setState({ currentTime: value, seeking: false })
    value // this.player.seek(value)
  }

  useEffect(() => {
    const controlTimer = setTimeout(
      state.seeking && state.buttonPress ? showControls : hideControls,
      3000,
    )
    return () => {
      clearTimeout(controlTimer)
    }
  }, [state.active, state.seeking, state.buttonPress])
  const showControls = () => {
    setState({ active: true })
  }

  const hideControls = () => {
    setState({ active: false, buttonPress: false })
  }

  function setControlsVisible(active: boolean) {
    active ? showControls() : hideControls()
  }

  const playerFullScreen = () => {
    setState({ fullscreen: true })
  }

  const playerNormal = () => {
    setState({ fullscreen: false })
  }

  function setPlayerFullScreen(fullscreen: boolean) {
    fullscreen ? playerFullScreen() : playerNormal()
  }

  return (
    <Animated.View
      style={state.fullscreen ? styles.playerFullScreen : styles.playerNormal}
    >
      <TouchableWithoutFeedback
        onPress={() => setControlsVisible(!state.active)}
      >
        <Image
          style={{ width: '100%', height: 180 }}
          source={{
            uri:
              'https://slidesbase.com/wp-content/uploads/2015/11/gradient-background-for-powerpoint-red-green-blue-greydark-3.jpg',
          }}
        />
      </TouchableWithoutFeedback>
      {state.active && (
        <TouchableWithoutFeedback
          onPress={() => setControlsVisible(!state.active)}
        >
          <Animated.View
            style={{
              width: '100%',
              position: 'absolute',
            }}
          >
            <ScreenOverlay
              backgroundColor={'rgba(4,4,4,0.3)'}
              screenOverlayHeight={180}
            >
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ActionButton
                    iconName={'keyboard-arrow-down'}
                    iconColor={'white'}
                    iconSize={24}
                  />
                  <View style={{ width: 10 }} />
                  <Title title="who am I?" titleSize={12} numberOfLines={1} />
                </View>
                <PlayerControls
                  paused={state.playPause}
                  onPlayPause={onPlayPause}
                  onNext={() => {}}
                  onPrev={() => {}}
                  onReplay={() => {}}
                  onForward={() => {}}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <TimeIndicator
                    time={state.currentTime}
                    boxHeight={16}
                    fontSize={10}
                  />
                  <ActionButton
                    iconName={'fullscreen'}
                    iconColor={'white'}
                    iconSize={24}
                    onActionButtonPress={() =>
                      setPlayerFullScreen(!state.fullscreen)
                    }
                  />
                </View>
              </View>
              {state.fullscreen && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flex: 1,
                    width: '100%',
                  }}
                >
                  <SeekBar
                    triggerSeekBar={state.active}
                    thumbSize={12}
                    duration={duration}
                    value={state.currentTime}
                    onSeekStart={handleSeekStart}
                    onSeekEnd={handleSeekEnd}
                  />
                </View>
              )}
            </ScreenOverlay>
          </Animated.View>
        </TouchableWithoutFeedback>
      )}
      {!state.fullscreen && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flex: 1,
            width: '100%',
          }}
        >
          <SeekBar
            triggerSeekBar={state.active}
            thumbSize={12}
            duration={duration}
            value={state.currentTime}
            onSeekStart={handleSeekStart}
            onSeekEnd={handleSeekEnd}
          />
        </View>
      )}
    </Animated.View>
  )
}
