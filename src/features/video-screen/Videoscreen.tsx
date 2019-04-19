import { TouchableOpacity, useBarnState } from 'bara-react'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDimensions } from '../../DimensionsContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  text: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '500',
  },
})

export const VideoScreen = () => {
  const { height } = useDimensions()
  const videoTopicList = [
    '01-Bài Giảng',
    '02-Khoa Học Và Niềm Tin',
    '03-Hoạt Hình',
    '04-Thiếu Nhi',
    '05-Ngôn Ngữ Ký Hiệu',
  ]
  const renderItems = videoTopicList.map((name, index) => (
    <Text style={[styles.text, { color: 'black' }]} key={index}>
      {name}
    </Text>
  ))
  return <View style={[styles.container, { height }]}>{renderItems}</View>
}
