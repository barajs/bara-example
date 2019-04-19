import { Text } from 'bara-react'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export function PlayerControls(props: {
  paused: boolean
  onPlayPause?: () => void
  onNext?: () => void
  onPrev?: () => void
  onReplay?: () => void
  onForward?: () => void
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.onPrev!()
        }}
      >
        <Text
          name="replay-10"
          style={{ color: 'grey', fontSize: 12, fontFamily: 'SF Pro Display' }}
        >
          Replay-10
        </Text>
      </TouchableOpacity>
      <View style={{ width: 24 }} />
      <TouchableOpacity
        onPress={() => {
          props.onReplay!()
        }}
      >
        <Text
          name="skip-previous"
          style={{ color: 'grey', fontSize: 12, fontFamily: 'SF Pro Display' }}
        >
          Prev
        </Text>
      </TouchableOpacity>
      <View style={{ width: 24 }} />
      <TouchableOpacity
        onPress={() => {
          props.onPlayPause!()
        }}
      >
        {props.paused ? (
          <Text
            name="play-circle-filled"
            style={{
              color: 'grey',
              fontSize: 12,
              fontFamily: 'SF Pro Display',
            }}
          >
            Play
          </Text>
        ) : (
          <Text
            name="pause-circle-filled"
            style={{
              color: 'grey',
              fontSize: 12,
              fontFamily: 'SF Pro Display',
            }}
          >
            Pause
          </Text>
        )}
      </TouchableOpacity>
      <View style={{ width: 24 }} />
      <TouchableOpacity
        onPress={() => {
          props.onNext!()
        }}
      >
        <Text
          name="skip-next"
          style={{ color: 'grey', fontSize: 12, fontFamily: 'SF Pro Display' }}
        >
          Next
        </Text>
      </TouchableOpacity>
      <View style={{ width: 24 }} />
      <TouchableOpacity
        onPress={() => {
          props.onForward!()
        }}
      >
        <Text
          name="forward-10"
          style={{ color: 'grey', fontSize: 12, fontFamily: 'SF Pro Display' }}
        >
          Forward
        </Text>
      </TouchableOpacity>
    </View>
  )
}
