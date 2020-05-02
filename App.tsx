import React from 'react'
import { StatusBar, I18nManager } from 'react-native'
import { Provider } from '@logic/context'
import { RootView } from '@views/root'

I18nManager.forceRTL(true)

export default function App() {
  return (
    <Provider>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <RootView />
    </Provider>
  )
}
