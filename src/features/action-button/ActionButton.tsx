import { TouchableOpacity } from 'bara-react'
import React from 'react'
import { Text } from 'react-native'

export function ActionButton(props: {
  name?: string
  active?: boolean
  iconName: string
  iconColor?: string
  iconSize?: number
  onActionButtonPress?: () => void
}) {
  return (
    <TouchableOpacity
      name={props.name}
      onPress={props.onActionButtonPress}
      style={{ transform: [{ scale: props.active ? 1.5 : 1 }] }}
    >
      <Text
        style={{ color: 'grey', fontSize: 12, fontFamily: 'SF Pro Display' }}
      >
        {props.iconName}
      </Text>
    </TouchableOpacity>
  )
}
