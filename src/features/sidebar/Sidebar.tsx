import {
  TouchableOpacity,
  useBarnState,
} from 'bara-react'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDimensions } from '../../DimensionsContext'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 88,
    backgroundColor: '#222',
    paddingHorizontal: 8,
  },
  sidebar: {
    width: '100%',
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarText: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '500',
  },
})

export const Sidebar = () => {
  const [select, setSelect] = useBarnState('section')
  const { height } = useDimensions()
  const list = ['Video', 'Audio', 'Search']
  const renderItems = list.map((name, index) => (
    <TouchableOpacity
      style={{
        marginVertical: 8,
        height: 40,
        width: '100%',
        backgroundColor: select === name ? '#008080' : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      key={index}
      className={'button'}
      name={name}
    >
      <Text
        style={[
          styles.sidebarText,
          { color: select === name ? '#0f0' : '#aaa' },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  ))
  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/vgmlogo.png')}
          style={{
            width: 36,
            height: 36,
          }}
        />
      </View>
      <View style={styles.sidebar}>{renderItems}</View>
    </View>
  )
}
