import { View } from 'bara-react'
import {
  SideBar,
  SideBarContent,
  SideBarItem,
  SideBarLayout,
  SideBarSeparator,
  SideBarSpace,
} from 'bara-react-yofi'
import React, { ReactNode } from 'react'

export interface SideBarProps {
  children?: ReactNode
}

export const SideBarScreen = ({ children }: SideBarProps) => {
  const horizontal = true
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <SideBarLayout
        horizontal={horizontal}
        horizontalSide="bottom"
        verticalSide="right"
      >
        <SideBar name="sidebar-demo" horizontal={horizontal}>
          <SideBarItem name="home" iconMaterial="home" label="Home" />
          <SideBarSeparator horizontal={horizontal} />
          <SideBarItem
            name="light-bulb"
            iconOcticon="light-bulb"
            label="Light"
          />
          <SideBarSpace />
          <SideBarSeparator horizontal={horizontal} />
          <SideBarItem name="plus" iconOcticon="plus" label="Add" />
          <SideBarItem
            name="settings"
            iconMaterial="settings"
            label="Settings"
          />
        </SideBar>
        <SideBarContent style={{ backgroundColor: '#fff' }}>
          {children}
        </SideBarContent>
      </SideBarLayout>
    </View>
  )
}
