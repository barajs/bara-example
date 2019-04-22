/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import { BaraProvider, TouchableOpacity } from 'bara-react'
import { Octicons } from 'bara-react-icons'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { Sidebar } from './features/sidebar'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <BaraProvider>
        <View style={styles.container}>
          <Octicons name="gear" size={30} />
          <Text style={styles.welcome}>Welcome to Bara React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.tsx</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TouchableOpacity name="bara-button">
            <Text>Bara Button</Text>
          </TouchableOpacity>
          <Sidebar />
        </View>
      </BaraProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
