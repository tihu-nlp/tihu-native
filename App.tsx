import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from '@logic/context'
import { RootView } from '@views/root'
import { bootstrap } from '@logic/bootstrap'

bootstrap()

export default function App() {
  return (
    <Provider>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <RootView />
    </Provider>
  )
}
