import React from 'react'
import { View } from 'react-native'

export function ScreenOverlay(props: {
  backgroundColor: string
  children: object
  screenOverlayHeight?: number | string
}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: props.backgroundColor,
        height: props.screenOverlayHeight,
      }}
    >
      {props.children}
    </View>
  )
}
