import { I18nManager } from 'react-native'

/**
 * App bootstrap logic
 */
export const bootstrap = () => {
  I18nManager.forceRTL(true)
}
