import React from 'react'
import { Text } from 'react-native'

export function ScreenHeader(props: {
  title?: string
  titleSize?: number
  titleColor?: string
}) {
  return (
    <Text
      style={{
        fontSize: props.titleSize,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: props.titleColor,
      }}
      numberOfLines={1}
    >
      {props.title}
    </Text>
  )
}
