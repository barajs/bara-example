import { Text } from 'bara-react'
import React from 'react'

import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    width: 48,
    backgroundColor: '#222',
  },
})

export const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <Text>Sidebar</Text>
    </View>
  )
}
