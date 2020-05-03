import React, { createContext, useState } from 'react'
import { Audio } from 'expo-av'
import { noop, noopPromise } from '@utils/noop'
import { apiSpeak } from '@logic/api/speak'

type ContextType = {
  input: string
  setInput: (input: string) => void
  speak: () => Promise<void>
  save: () => void
}

const DEFAULT_VALUE = {
  input: '',
  setInput: noop,
  speak: noopPromise,
  save: noop,
}

export const Context = createContext<ContextType>(DEFAULT_VALUE)

export const Provider: React.FC = ({ children }) => {
  const [input, setInput] = useState('')
  const [lastFetch, setLastFetch] = useState<string | null>(null)
  const [sound] = useState(new Audio.Sound())

  const speak = async () => {
    if (!(await sound.getStatusAsync()).isLoaded) {
      const uri = await apiSpeak(input)
      await sound.loadAsync({ uri })
    }

    // TEMP: Always load
    // if (input !== lastFetch) {
    if (true) {
      setLastFetch(input)
      const uri = await apiSpeak(input)
      if ((await sound.getStatusAsync()).isLoaded) {
        await sound.unloadAsync()
      }
      await sound.loadAsync({ uri })
    }

    // TODO: fix waveheader to set correct header based on audio length
    // this is a bug, the playback never stops
    // probably because the wav header is set to max
    // so it will keep playing until it the end (which takes forever)
    await sound.setPositionAsync(0)

    await sound.playAsync()
  }

  return (
    <Context.Provider
      value={{
        ...DEFAULT_VALUE,
        input,
        setInput,
        speak,
      }}
    >
      {children}
    </Context.Provider>
  )
}
