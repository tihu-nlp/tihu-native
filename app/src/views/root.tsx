import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from '@containers/header/header'
import { Main } from '@containers/main/main'
import { grayscale } from '@utils/grayscale'
import { style } from '@config/style'

export const RootView: React.FC = () => {
  return (
    <LinearGradient
      colors={[grayscale(235), grayscale(220)]}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: style.viewPadding,
        paddingVertical: style.viewPadding,
        width: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
      }}
    >
      <Header />
      <Main />
    </LinearGradient>
  )
}
