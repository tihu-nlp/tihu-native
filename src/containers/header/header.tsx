import React from 'react'
import { View, Image } from 'react-native'

const img = require('../../../assets/speak.png')

export const Header: React.FC = () => {
  return (
    <View>
      <Image
        source={img}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  )
}
