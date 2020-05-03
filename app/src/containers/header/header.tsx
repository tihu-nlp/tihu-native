import React, { useContext, useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Context } from '@logic/context'

const img = require('../../../assets/speak.png')

export const Header: React.FC = () => {
  const { speak } = useContext(Context)
  const [loading, setLoading] = useState(false)

  return (
    <View>
      <TouchableOpacity
        disabled={loading}
        onPress={async () => {
          setLoading(true)
          await speak()
          setLoading(false)
        }}
      >
        <Image
          source={img}
          style={{
            opacity: loading ? 0.2 : 1,
            width: 150,
            height: 150,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}
