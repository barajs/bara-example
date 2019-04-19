import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
})

export function Title(props: {
  title?: string
  titleSize?: number
  numberOfLines?: number
  lineHeight?: number
}) {
  return (
    <Text
      style={[
        styles.title,
        { fontSize: props.titleSize, lineHeight: props.lineHeight },
      ]}
      numberOfLines={props.numberOfLines}
    >
      {props.title}
    </Text>
  )
}
