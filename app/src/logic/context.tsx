import React, { createContext, useState, useRef } from 'react'
import { Audio } from 'expo-av'
import * as Crypto from 'expo-crypto'
import * as FileSystem from 'expo-file-system'
import { noop, noopPromise } from '@utils/noop'
import { speak as apiSpeak } from '@logic/api/speak'
import { config } from '@app/config'

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
  const { current: sound } = useRef(new Audio.Sound())

  const speak = async () => {
    const text = input || 'شتر دیدی ندیدی'

    // check if text already fetched before
    const fileName = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      text
    )
    const uri = `${config.fileSystem.downloadPath}/${fileName}`
    const uriExists = (await FileSystem.getInfoAsync(uri)).exists

    if (!uriExists) {
      await apiSpeak(text)
      if ((await sound.getStatusAsync()).isLoaded) {
        await sound.unloadAsync()
      }
    }

    if (!(await sound.getStatusAsync()).isLoaded) {
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
