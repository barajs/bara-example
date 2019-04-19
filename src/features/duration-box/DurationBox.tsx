import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  durationBox: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingLeft: 4,
    paddingRight: 4,
    top: 4,
    right: 4,
  },
  duration: {
    fontWeight: 'normal',
    letterSpacing: 0.5,
    color: 'white',
    textAlign: 'justify',
  },
})


export function DurationBox(props: {
  duration?: string
  durationFontSize?: number
  durationBoxHeight: number
}) {
  return (
    <View
      style={[
        styles.durationBox,
        {
          height: props.durationBoxHeight,
        },
      ]}
    >
      <Text
        numberOfLines={1}
        style={[styles.duration, { fontSize: props.durationFontSize }]}
      >
        {props.duration}
      </Text>
    </View>
  )
}
