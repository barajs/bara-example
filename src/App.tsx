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
import React, { Component } from 'react'
import { Dimensions, Platform, StyleSheet, View } from 'react-native'
import { ColumnWidthProvider } from './ColumnWidthContext'
import { DimensionsProvider } from './DimensionsContext'
import { AppLayoutProvider } from './LayoutContext'

import { AudioScreen } from './features/audio-screen'
import { Sidebar } from './features/sidebar'
import { VideoScreen } from './features/video-screen'

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
        <DimensionsProvider>
          <AppLayoutProvider>
            <ColumnWidthProvider>
              <View style={styles.container}>
                <Sidebar />
                <VideoScreen />
                <AudioScreen />
              </View>
            </ColumnWidthProvider>
          </AppLayoutProvider>
        </DimensionsProvider>
      </BaraProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
  },
})
