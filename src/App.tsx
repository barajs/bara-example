/**
 * Sample Bara React Native App
 * https://github.com/barajs/bara-example
 *
 * @format
 */

import { Platform, Text, TouchableOpacity, View } from 'bara-react'
import { Octicons as Icon } from 'bara-react-icons/es'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { GlobalStyles } from './features/global-styles'
import { SideBarScreen } from './features/sidebar'

const instructions = Platform.select({
  ios: '[iOS] Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    '[Android] Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

interface Props {}
const App = () => {
  return (
    <>
      <GlobalStyles />
      <View style={styles.container}>
        <SideBarScreen>
          <Text style={styles.welcome}>Welcome to Bara React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.tsx</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TouchableOpacity style={styles.welcomeButton} name="bara-button">
            <Text>Say Welcome!</Text>
          </TouchableOpacity>
        </SideBarScreen>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#f0f',
    margin: 15,
  },
  welcomeButton: {
    borderRadius: 5,
    backgroundColor: '#f0f',
    margin: 20,
    padding: 15,
    alignSelf: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
})

export default App
