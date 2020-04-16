import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  StatusBar,
  I18nManager,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

I18nManager.forceRTL(true)

const img = require('./assets/speak.png')

export default function App() {
  const [input, setInput] = useState('')
  const [height, setHeight] = useState<string | number>('100%')

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <LinearGradient
        colors={['rgba(86, 61, 124,1)', 'rgba(96,24,72, 1)']}
        style={{
          ...styles.gradient,
          height,
        }}
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout
          setHeight(height)
        }}
      >
        <View
          style={{
            ...styles.inputWrapper,
          }}
        >
          <TextInput
            textAlignVertical="top"
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder={`خیام اگر ز باده مستی خوش باش`}
            multiline
          />
        </View>
        <Image
          source={img}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            bottom: 96,
          }}
        />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 32,
    width: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputWrapper: {
    width: '100%',
    borderColor: 'grey',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'right',
  },
})
