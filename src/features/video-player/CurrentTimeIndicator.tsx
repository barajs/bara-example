import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
  time: {
    fontWeight: 'normal',
    letterSpacing: 0.5,
    color: 'white',
    textAlign: 'justify',
  },
})

function secondsToTime(time: number) {
  const d = Number(time)
  const h = Math.floor(d / 3600)
  const m = Math.floor((d % 3600) / 60)
  const s = Math.floor((d % 3600) % 60)

  const hDisplay = h > 0 && h <= 9 ? '0' + h + ':' : h >= 10 ? h + ':' : ''
  const mDisplay = m > 0 && m <= 9 ? '0' + m + ':' : m >= 10 ? m + ':' : '00:'
  const sDisplay = s >= 0 && s <= 9 ? '0' + s : s >= 10 ? s : ''
  return `${hDisplay}${mDisplay}${sDisplay}`
}

export function TimeIndicator(props: {
  time?: number
  fontSize?: number
  boxHeight: number
}) {
  return (
    <View
      style={[
        styles.container,
        {
          height: props.boxHeight,
        },
      ]}
    >
      <Text
        numberOfLines={1}
        style={[styles.time, { fontSize: props.fontSize }]}
      >
        {secondsToTime(Math.floor(props.time!))}
      </Text>
    </View>
  )
}
