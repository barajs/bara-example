import React from 'react'
import { Image, View } from 'react-native'

export function Thumbnail(props: {
  imgWidth?: number
  imgHeight?: number
  imgUri?: string
}) {
  return (
    <View>
      <Image
        style={{
          backgroundColor: '#111',
          width: props.imgWidth,
          height: props.imgHeight,
          borderRadius: props.imgWidth! / 28,
        }}
        source={{
          uri: props.imgUri,
        }}
      />
    </View>
  )
}
