import React, { useContext } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Context } from '../../logic/context'

export const Main: React.FC = () => {
  const { input, setInput } = useContext(Context)

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        textAlignVertical="top"
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder={`شتر دیدی ندیدی`}
        placeholderTextColor="rgba(171,132,234,.5)"
        multiline
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    borderColor: 'rgba(171,132,234,1)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    color: 'rgba(171,132,234,1)',
    fontSize: 24,
    textAlign: 'right',
  },
})
