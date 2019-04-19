import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ActionButton } from '../action-button'
import { DurationBox } from '../duration-box'
import { Thumbnail } from '../thumbnail'
import { Title } from '../title'

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
})

export function VideoItem(props: {
  title: string
  titleLineHeight?: number
  duration: string
  imgUri: string
  titleSize: number
  width?: number | '100%'
  imgWidth: number
  height?: number | '100%'
  imgHeight: number
  durationFontSize: number
  durationBoxHeight: number
  playlist?: boolean
  onItemPress?: () => void
  onButtonPress?: () => void
}) {
  return (
    <TouchableOpacity onPress={() => props.onItemPress}>
      <View
        style={{
          width: props.width,
          height: props.height,
          flexDirection: props.playlist ? 'row' : 'column',
          alignItems: 'center',
        }}
      >
        <View style={{ width: props.imgWidth }}>
          <Thumbnail
            imgWidth={props.imgWidth}
            imgHeight={props.imgHeight}
            imgUri={props.imgUri}
          />
          <DurationBox
            durationFontSize={props.durationFontSize}
            duration={props.duration}
            durationBoxHeight={props.durationBoxHeight}
          />
        </View>
        {props.playlist ? (
          <View style={{ width: 8 }} />
        ) : (
          <View style={{ height: 8 }} />
        )}
        <View style={{ flex: 1, width: '100%' }}>
          <Title
            title={props.title}
            titleSize={props.titleSize}
            numberOfLines={props.playlist ? 2 : 1}
            lineHeight={props.titleLineHeight}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
