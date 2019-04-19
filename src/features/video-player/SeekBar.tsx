import React, { useEffect, useReducer } from 'react'
import {
  Animated,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  touchabelBar: {
    height: 12,
    backgroundColor: 'transparent',
  },
  bar: {
    height: 4,
    backgroundColor: 'rgba(168, 168, 168, 0.5)',
  },
  progressBar: {
    position: 'absolute',
    height: 4,
    backgroundColor: 'rgba(43, 160, 144, 0.5)',
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'white',
  },
})

export function SeekBar(props: {
  thumbSize: number
  duration: number
  value: number
  triggerSeekBar: boolean
  onSeekStart?: (value: number) => void
  onSeekEnd?: (value: number) => void
}) {
  const thumbSize = props.thumbSize
  const [state, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      active: false,
      barWidth: 0,
      value: props.value,
      deltaValue: 0,
      seeking: false,
    },
  )

  const min = 0
  const max = props.duration

  useEffect(
    () => {
      const controlTimer = setTimeout(hideThumb, state.seeking ? 10000 : 3000)
      return () => {
        clearTimeout(controlTimer)
      }
    },
    [state.active, state.seeking, props.triggerSeekBar],
  )

  const showThumb = () => {
    setState({ active: true })
  }

  const hideThumb = () => {
    setState({ active: false })
  }

  function setThumbVisible(active: boolean) {
    active ? showThumb() : hideThumb()
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderStart: (_, gestureState) => onStart(gestureState),
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_, gestureState) => onMove(gestureState),
    onPanResponderRelease: () => onEndMove(),
  })

  function onBarLayout(event: LayoutChangeEvent) {
    return setState({ barWidth: event.nativeEvent.layout.width - thumbSize })
  }

  function onStart(gestureState: PanResponderGestureState) {
    gestureState.stateID && setState({ active: true })
  }

  function onMove(gestureState: PanResponderGestureState) {
    const newDeltaValue = getValueFromOffset(
      gestureState.dx,
      state.barWidth,
      min,
      max,
    )
    setState({ deltaValue: newDeltaValue, active: true, seeking: true })
    const newValue = Math.round(
      capValueWithinRange(state.value + state.deltaValue, [min, max]),
    )
    setState({ value: newValue })
    props.onSeekStart!(newValue)
  }

  function onEndMove() {
    setState({ deltaValue: 0, seeking: false, active: false })
    props.onSeekEnd!(state.value)
  }

  function capValueWithinRange(value: number, range: number[]) {
    if (value < range[0]) return range[0]
    if (value > range[1]) return range[1]
    return value
  }

  function getValueFromOffset(
    offset: number,
    barWidth: number,
    rangeMin: number,
    rangeMax: number,
  ) {
    return ((rangeMax - rangeMin) * offset) / barWidth
  }

  function getOffsetFromValue(
    value: number,
    rangeMin: number,
    rangeMax: number,
    barWidth: number,
  ) {
    const valueOffset = value - rangeMin
    const totalRange = rangeMax - rangeMin
    const percentage = valueOffset / totalRange
    return barWidth * percentage
  }

  const cappedValue = capValueWithinRange(state.value, [min, max])

  const Offset = getOffsetFromValue(cappedValue, min, max, state.barWidth)

  const animatedValue = new Animated.Value(state.value)

  const minTrackWidth = animatedValue.interpolate({
    inputRange: [min, max],
    outputRange: [0, state.barWidth],
    extrapolate: 'clamp',
  })

  const handdleProgressPress = (e: any) => {
    const position = e.nativeEvent.locationX
    const realPosition = capValueWithinRange(position, [min, state.barWidth])
    const progress = Math.round(
      (realPosition / state.barWidth) * props.duration,
    )
    setState({ value: progress })
    setThumbVisible(!state.active)
    props.onSeekStart!(progress)
    props.onSeekEnd!(progress)
  }

  return (
    <TouchableWithoutFeedback onPress={handdleProgressPress}>
      <View style={styles.barContainer}>
        <View style={styles.bar} onLayout={onBarLayout} />
        <Animated.View style={[styles.progressBar, { width: minTrackWidth }]} />
        <Animated.View
          style={[
            styles.circle,
            {
              opacity: state.active || props.triggerSeekBar ? 1 : 0,
              left: Offset,
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              transform: [{ scale: state.active ? 1.5 : 1 }],
            },
          ]}
          {...panResponder.panHandlers}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
