import React, { createContext, useState } from 'react'
import { noop } from '@utils/noop'

type ContextType = {
  input: string
  setInput: (input: string) => void
  speak: () => void
  save: () => void
}

const DEFAULT_VALUE = {
  input: '',
  setInput: noop,
  speak: noop,
  save: noop,
}

export const Context = createContext<ContextType>(DEFAULT_VALUE)

export const Provider: React.FC = ({ children }) => {
  const [input, setInput] = useState('')

  return (
    <Context.Provider
      value={{
        ...DEFAULT_VALUE,
        input,
        setInput,
      }}
    >
      {children}
    </Context.Provider>
  )
}
